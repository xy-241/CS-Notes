import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Tanpa Judul",
    description: "Tidak ada deskripsi",
  },
  components: {
    callout: {
      note: "Catatan",
      abstract: "Abstrak",
      info: "Info",
      todo: "Daftar Tugas",
      tip: "Tips",
      success: "Berhasil",
      question: "Pertanyaan",
      warning: "Peringatan",
      failure: "Gagal",
      danger: "Bahaya",
      bug: "Bug",
      example: "Contoh",
      quote: "Kutipan",
    },
    backlinks: {
      title: "Tautan Balik",
      noBacklinksFound: "Tidak ada tautan balik ditemukan",
    },
    themeToggle: {
      lightMode: "Mode Terang",
      darkMode: "Mode Gelap",
    },
    readerMode: {
      title: "Mode Pembaca",
    },
    explorer: {
      title: "Penjelajah",
    },
    footer: {
      createdWith: "Dibuat dengan",
    },
    graph: {
      title: "Tampilan Grafik",
    },
    recentNotes: {
      title: "Catatan Terbaru",
      seeRemainingMore: ({ remaining }) => `Lihat ${remaining} lagi →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transklusi dari ${targetSlug}`,
      linkToOriginal: "Tautan ke asli",
    },
    search: {
      title: "Cari",
      searchBarPlaceholder: "Cari sesuatu",
    },
    tableOfContents: {
      title: "Daftar Isi",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} menit baca`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Catatan terbaru",
      lastFewNotes: ({ count }) => `${count} catatan terakhir`,
    },
    error: {
      title: "Tidak Ditemukan",
      notFound: "Halaman ini bersifat privat atau tidak ada.",
      home: "Kembali ke Beranda",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item di bawah folder ini." : `${count} item di bawah folder ini.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Indeks Tag",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item dengan tag ini." : `${count} item dengan tag ini.`,
      showingFirst: ({ count }) => `Menampilkan ${count} tag pertama.`,
      totalTags: ({ count }) => `Ditemukan total ${count} tag.`,
    },
  },
} as const satisfies Translation
