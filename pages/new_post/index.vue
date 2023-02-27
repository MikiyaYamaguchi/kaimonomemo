<template>
  <div class="container">
    <h1>新着一覧</h1>
    <bread pageType="page" title="新着一覧" cat="" />
    <section>
      <div class="ad">
        <adsbygoogle
          :ad-slot="'4655933830'"
          :ad-style="{ display: 'block' }"
          :ad-format="'auto'"
          data-full-width-responsive="false"
        />
      </div>
      <div class="row">
        <article-list :articles="posts" />
      </div>
      <div class="ad">
        <adsbygoogle
          :ad-slot="'1016055811'"
          :ad-style="{ display: 'block' }"
          :ad-format="'auto'"
          data-full-width-responsive="false"
        />
      </div>
    </section>
    <Pagination
      v-if="getPageCount > 1"
      :pages="getPageCount"
      :current="currentPage"
      :category="selectedCategory"
      :tag="selectedTag"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  head () {
    return {
      title: '新着一覧 | かいものの助',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'かいものの助の新着一覧ページ。このページではかいものの助に投稿された記事を新着順に閲覧することができます。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'かいものの助,新着一覧,買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ'
        },
        { hid: "og:title", property: "og:title", content: "新着一覧 | かいものの助" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "かいものの助の新着一覧ページ。このページではかいものの助に投稿された記事を新着順に閲覧することができます。",
        }
      ],
    }
  },
  name: 'IndexPage',
  data () {
    return {
      articles: '',
      parPage: '',
      currentPage: '',
    }
  },
  computed: {
    posts: function () {
      const end = this.currentPage * this.parPage;
      const start = end - this.parPage;
      return this.articles.slice(start, end);
    },
    getPageCount: function () {
      return Math.ceil(this.articles.length / this.parPage);
    },
  },
  async asyncData ({ $content, params }) {
    const articles = await $content("article")
      .sortBy('createdAt', 'desc')
      .fetch()
    const parPage = 12;
    const currentPage = parseInt(params.id) || 1;
    const selectedCategory = undefined;
    const selectedTag = undefined;
    return {
      articles,
      parPage,
      currentPage,
      selectedCategory,
      selectedTag,
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
