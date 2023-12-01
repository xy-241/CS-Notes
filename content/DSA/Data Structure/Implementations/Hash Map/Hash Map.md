#dsa 
## Basics
- Make use of [[Hash Function]] to convert a key into an index which points to a bucket inside an [[Array]], and a bucket holds a value
- Decide if a key is inside the collection quickly
- We are using space in exchange for better performance 
- >![[hash_map.png]]
- [LeetCode Questions](https://github.com/youngyangyang04/leetcode-master#%E5%93%88%E5%B8%8C%E8%A1%A8)

>[!caution] Since input space is much bigger than the output space, it is very likely we will have [[Hash Collision]]
>For example, all the possible keys are all the integers, the output space is just the total number of buckets inside the underlying [[Array]]


>[!note] Another 2 Common Variants
>1. [[Hash Set]]
>2. [[Array]]

## Tips
### Use [[Array]] to save space
- When keys are fixed & manageable, we can use the key as the [[Array]] index 
- This will give us constant space, avoid the extra computation used by [[Hash Function]]

## Example Implementation in [[Java]]
```java
/* 键值对 */
class Pair {
    public int key;
    public String val;

    public Pair(int key, String val) {
        this.key = key;
        this.val = val;
    }
}

/* 基于数组简易实现的哈希表 */
class ArrayHashMap {
    private List<Pair> buckets;

    public ArrayHashMap() {
        // 初始化数组，包含 100 个桶
        buckets = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            buckets.add(null);
        }
    }

    /* 哈希函数 */
    private int hashFunc(int key) {
        int index = key % 100;
        return index;
    }

    /* 查询操作 */
    public String get(int key) {
        int index = hashFunc(key);
        Pair pair = buckets.get(index);
        if (pair == null)
            return null;
        return pair.val;
    }

    /* 添加操作 */
    public void put(int key, String val) {
        Pair pair = new Pair(key, val);
        int index = hashFunc(key);
        buckets.set(index, pair);
    }

    /* 删除操作 */
    public void remove(int key) {
        int index = hashFunc(key);
        // 置为 null ，代表删除
        buckets.set(index, null);
    }

    /* 获取所有键值对 */
    public List<Pair> pairSet() {
        List<Pair> pairSet = new ArrayList<>();
        for (Pair pair : buckets) {
            if (pair != null)
                pairSet.add(pair);
        }
        return pairSet;
    }

    /* 获取所有键 */
    public List<Integer> keySet() {
        List<Integer> keySet = new ArrayList<>();
        for (Pair pair : buckets) {
            if (pair != null)
                keySet.add(pair.key);
        }
        return keySet;
    }

    /* 获取所有值 */
    public List<String> valueSet() {
        List<String> valueSet = new ArrayList<>();
        for (Pair pair : buckets) {
            if (pair != null)
                valueSet.add(pair.val);
        }
        return valueSet;
    }

    /* 打印哈希表 */
    public void print() {
        for (Pair kv : pairSet()) {
            System.out.println(kv.key + " -> " + kv.val);
        }
    }
}

```

## [[Abstract Data Type (ADT)]]
>[!success] O(1) to Insert

>[!success] O(1) to Delete

>[!success] O(1) to Search for a value, where the value we want to search is the key


## Side Notes

>[!note] 3 ways to iterate 
>1. Key-value pairs
>	```java
>	for (Map.Entry<Integer, String> kv: map.entrySet()) {
>		System.out.println(kv.getKey() + " -> " + kv.getValue());
>	}
>	```
>2. Key
>	```java
>	for (int key: map.keySet()) {
>		System.out.println(key);
>	}
>	```
>1. Value
>	```java
>	for (String val: map.values()) {
>		System.out.println(val);
>	}
>	```

>[!success] 

>[!success] 

>[!success] 
