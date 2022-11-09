export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "買い物メモ | 便利な買い物Webアプリ",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "gfmYJciWyj5Y_dy51O4cO6GwnXa-LgCP59DCHClER9s",
      },
      {
        hid: "description",
        name: "description",
        content:
          "便利な買い物メモアプリケーションです。買うものをメモしておくことができて、家族や友達にメモ内容をURLで共有可能！買い物リストをカテゴリー分けもできます。",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    { src: "@/plugins/localStorage", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-6161648963667133",
        pageLevelAds: true,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
};
