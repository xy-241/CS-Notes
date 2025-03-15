import test, { describe, beforeEach } from "node:test"
import assert from "node:assert"
import { FileTrieNode } from "./fileTrie"
import { FullSlug } from "./path"

interface TestData {
  title: string
  slug: string
  filePath: string
}

describe("FileTrie", () => {
  let trie: FileTrieNode<TestData>

  beforeEach(() => {
    trie = new FileTrieNode<TestData>([])
  })

  describe("constructor", () => {
    test("should create an empty trie", () => {
      assert.deepStrictEqual(trie.children, [])
      assert.strictEqual(trie.slug, "")
      assert.strictEqual(trie.displayName, "")
      assert.strictEqual(trie.data, null)
    })

    test("should set displayName from data title", () => {
      const data = {
        title: "Test Title",
        slug: "test",
        filePath: "test.md",
      }

      trie.add(data)
      assert.strictEqual(trie.children[0].displayName, "Test Title")
    })

    test("should be able to set displayName", () => {
      const data = {
        title: "Test Title",
        slug: "test",
        filePath: "test.md",
      }

      trie.add(data)
      trie.children[0].displayName = "Modified"
      assert.strictEqual(trie.children[0].displayName, "Modified")
    })
  })

  describe("add", () => {
    test("should add a file at root level", () => {
      const data = {
        title: "Test",
        slug: "test",
        filePath: "test.md",
      }

      trie.add(data)
      assert.strictEqual(trie.children.length, 1)
      assert.strictEqual(trie.children[0].slug, "test")
      assert.strictEqual(trie.children[0].data, data)
    })

    test("should handle index files", () => {
      const data = {
        title: "Index",
        slug: "index",
        filePath: "index.md",
      }

      trie.add(data)
      assert.strictEqual(trie.data, data)
      assert.strictEqual(trie.children.length, 0)
    })

    test("should add nested files", () => {
      const data1 = {
        title: "Nested",
        slug: "folder/test",
        filePath: "folder/test.md",
      }

      const data2 = {
        title: "Really nested index",
        slug: "a/b/c/index",
        filePath: "a/b/c/index.md",
      }

      trie.add(data1)
      trie.add(data2)
      assert.strictEqual(trie.children.length, 2)
      assert.strictEqual(trie.children[0].slug, "folder/index")
      assert.strictEqual(trie.children[0].children.length, 1)
      assert.strictEqual(trie.children[0].children[0].slug, "folder/test")
      assert.strictEqual(trie.children[0].children[0].data, data1)

      assert.strictEqual(trie.children[1].slug, "a/index")
      assert.strictEqual(trie.children[1].children.length, 1)
      assert.strictEqual(trie.children[1].data, null)

      assert.strictEqual(trie.children[1].children[0].slug, "a/b/index")
      assert.strictEqual(trie.children[1].children[0].children.length, 1)
      assert.strictEqual(trie.children[1].children[0].data, null)

      assert.strictEqual(trie.children[1].children[0].children[0].slug, "a/b/c/index")
      assert.strictEqual(trie.children[1].children[0].children[0].data, data2)
      assert.strictEqual(trie.children[1].children[0].children[0].children.length, 0)
    })
  })

  describe("filter", () => {
    test("should filter nodes based on condition", () => {
      const data1 = { title: "Test1", slug: "test1", filePath: "test1.md" }
      const data2 = { title: "Test2", slug: "test2", filePath: "test2.md" }

      trie.add(data1)
      trie.add(data2)

      trie.filter((node) => node.slug !== "test1")
      assert.strictEqual(trie.children.length, 1)
      assert.strictEqual(trie.children[0].slug, "test2")
    })
  })

  describe("map", () => {
    test("should apply function to all nodes", () => {
      const data1 = { title: "Test1", slug: "test1", filePath: "test1.md" }
      const data2 = { title: "Test2", slug: "test2", filePath: "test2.md" }

      trie.add(data1)
      trie.add(data2)

      trie.map((node) => {
        if (node.data) {
          node.data.title = "Modified"
        }
      })

      assert.strictEqual(trie.children[0].displayName, "Modified")
      assert.strictEqual(trie.children[1].displayName, "Modified")
    })

    test("map over folders should work", () => {
      const data1 = { title: "Test1", slug: "test1", filePath: "test1.md" }
      const data2 = {
        title: "Test2",
        slug: "a/b-with-space/test2",
        filePath: "a/b with space/test2.md",
      }

      trie.add(data1)
      trie.add(data2)

      trie.map((node) => {
        if (node.isFolder) {
          node.displayName = `Folder: ${node.displayName}`
        } else {
          node.displayName = `File: ${node.displayName}`
        }
      })

      assert.strictEqual(trie.children[0].displayName, "File: Test1")
      assert.strictEqual(trie.children[1].displayName, "Folder: a")
      assert.strictEqual(trie.children[1].children[0].displayName, "Folder: b with space")
      assert.strictEqual(trie.children[1].children[0].children[0].displayName, "File: Test2")
    })
  })

  describe("entries", () => {
    test("should return all entries", () => {
      const data1 = { title: "Test1", slug: "test1", filePath: "test1.md" }
      const data2 = {
        title: "Test2",
        slug: "a/b-with-space/test2",
        filePath: "a/b with space/test2.md",
      }

      trie.add(data1)
      trie.add(data2)

      const entries = trie.entries()
      assert.deepStrictEqual(
        entries.map(([path, node]) => [path, node.data]),
        [
          ["index", trie.data],
          ["test1", data1],
          ["a/index", null],
          ["a/b-with-space/index", null],
          ["a/b-with-space/test2", data2],
        ],
      )
    })
  })

  describe("fromEntries", () => {
    test("nested", () => {
      const trie = FileTrieNode.fromEntries([
        ["index" as FullSlug, { title: "Root", slug: "index", filePath: "index.md" }],
        [
          "folder/file1" as FullSlug,
          { title: "File 1", slug: "folder/file1", filePath: "folder/file1.md" },
        ],
        [
          "folder/index" as FullSlug,
          { title: "Folder Index", slug: "folder/index", filePath: "folder/index.md" },
        ],
        [
          "folder/file2" as FullSlug,
          { title: "File 2", slug: "folder/file2", filePath: "folder/file2.md" },
        ],
        [
          "folder/folder2/index" as FullSlug,
          {
            title: "Subfolder Index",
            slug: "folder/folder2/index",
            filePath: "folder/folder2/index.md",
          },
        ],
      ])

      assert.strictEqual(trie.children.length, 1)
      assert.strictEqual(trie.children[0].slug, "folder/index")
      assert.strictEqual(trie.children[0].children.length, 3)
      assert.strictEqual(trie.children[0].children[0].slug, "folder/file1")
      assert.strictEqual(trie.children[0].children[1].slug, "folder/file2")
      assert.strictEqual(trie.children[0].children[2].slug, "folder/folder2/index")
      assert.strictEqual(trie.children[0].children[2].children.length, 0)
    })
  })

  describe("findNode", () => {
    test("should find root node with empty path", () => {
      const data = { title: "Root", slug: "index", filePath: "index.md" }
      trie.add(data)
      const found = trie.findNode([])
      assert.strictEqual(found, trie)
    })

    test("should find node at first level", () => {
      const data = { title: "Test", slug: "test", filePath: "test.md" }
      trie.add(data)
      const found = trie.findNode(["test"])
      assert.strictEqual(found?.data, data)
    })

    test("should find nested node", () => {
      const data = {
        title: "Nested",
        slug: "folder/subfolder/test",
        filePath: "folder/subfolder/test.md",
      }
      trie.add(data)
      const found = trie.findNode(["folder", "subfolder", "test"])
      assert.strictEqual(found?.data, data)

      // should find the folder and subfolder indexes too
      assert.strictEqual(
        trie.findNode(["folder", "subfolder", "index"]),
        trie.children[0].children[0],
      )
      assert.strictEqual(trie.findNode(["folder", "index"]), trie.children[0])
    })

    test("should return undefined for non-existent path", () => {
      const data = { title: "Test", slug: "test", filePath: "test.md" }
      trie.add(data)
      const found = trie.findNode(["nonexistent"])
      assert.strictEqual(found, undefined)
    })

    test("should return undefined for partial path", () => {
      const data = {
        title: "Nested",
        slug: "folder/subfolder/test",
        filePath: "folder/subfolder/test.md",
      }
      trie.add(data)
      const found = trie.findNode(["folder"])
      assert.strictEqual(found?.data, null)
    })
  })

  describe("getFolderPaths", () => {
    test("should return all folder paths", () => {
      const data1 = {
        title: "Root",
        slug: "index",
        filePath: "index.md",
      }
      const data2 = {
        title: "Test",
        slug: "folder/subfolder/test",
        filePath: "folder/subfolder/test.md",
      }
      const data3 = {
        title: "Folder Index",
        slug: "abc/index",
        filePath: "abc/index.md",
      }

      trie.add(data1)
      trie.add(data2)
      trie.add(data3)
      const paths = trie.getFolderPaths()

      assert.deepStrictEqual(paths, [
        "index",
        "folder/index",
        "folder/subfolder/index",
        "abc/index",
      ])
    })
  })

  describe("sort", () => {
    test("should sort nodes according to sort function", () => {
      const data1 = { title: "A", slug: "a", filePath: "a.md" }
      const data2 = { title: "B", slug: "b", filePath: "b.md" }
      const data3 = { title: "C", slug: "c", filePath: "c.md" }

      trie.add(data3)
      trie.add(data1)
      trie.add(data2)

      trie.sort((a, b) => a.slug.localeCompare(b.slug))
      assert.deepStrictEqual(
        trie.children.map((n) => n.slug),
        ["a", "b", "c"],
      )
    })
  })
})
