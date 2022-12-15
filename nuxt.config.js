export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "かいものの助 | 買い物に関する便利な情報やアプリをお届けするサイト",
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
          "買い物に関する便利な情報や便利な自作アプリをお届けするサイトです。日常に欠かせない「買い物」に関する情報や、Webエンジニアとしての技術をたくさんの人に共有したいという思いでサイトを立ち上げました。このサイトが「買い物」の分野において、皆さんの役に立つことを願っています。",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "買い物,ショッピング,情報,ブログ,Webアプリ,便利アプリ,お役立ち情報",
      },
      { hid: "og:site_name", property: "og:site_name", content: "買い物メモ" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://kaimonomemo.netlify.app",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://kaimonomemo.netlify.app/image/logo_ogp.jpg",
      },
      { hid: "og:title", property: "og:title", content: "買い物メモ" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "買い物に関する便利な情報や便利な自作アプリをお届けするサイトです。日常に欠かせない「買い物」に関する情報や、Webエンジニアとしての技術をたくさんの人に共有したいという思いでサイトを立ち上げました。このサイトが「買い物」の分野において、皆さんの役に立つことを願っています。",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://kaimonomemo.netlify.app",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@Twitter" },
      {
        hid: "twitter:image",
        content: "https://kaimonomemo.netlify.app/image/logo_org.png",
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
    "~plugins/vue-scrollto",
    { src: "@/plugins/localStorage", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@aceforth/nuxt-optimized-images",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/dayjs",
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-6161648963667133",
        pageLevelAds: true,
      },
    ],
    [
      "@nuxtjs/google-gtag",
      {
        id: "G-566YBLX6KD",
        debug: true,
      },
    ],
  ],

  sitemap: {
    hostname: process.env.BASE_URL || "https://kaimononosuke.netlify.app/",
    routes: async () => {
      const { $content } = require("@nuxt/content");

      const posts = await $content("article").only(["path"]).fetch();

      return posts.map((p) => p.path);
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/404/"),
      });
    },
  },

  optimizedImages: {
    optimizeImages: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
};
