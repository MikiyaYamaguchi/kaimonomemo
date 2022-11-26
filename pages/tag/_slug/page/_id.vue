<template>
  <div class="container">
    <h1>{{ getTagName[0] }}</h1>
    <bread pageType="tag" :title="getTagName[0]" cat="" />
    <section>
      <div class="row">
        <article-list :articles="posts" />
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
      title: `${this.getTagName} | かいものの助`,
      meta: [
        { hid: "og:title", property: "og:title", content: `${this.getTagName} | かいものの助` },
      ]
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
    getTagName () {
      return this.$store.getters.getTagName([this.$route.params.slug]);
    }
  },
  async asyncData ({ store, $content, params }) {
    const articles = await $content("article")
      .sortBy('createdAt', 'desc')
      .where({ tag: { $contains: params.slug } })
      .skip(0).limit(store.state.indexPerPage)
      .fetch()
    const parPage = 12;
    const currentPage = parseInt(params.id) || 1;
    const selectedCategory = undefined;
    const selectedTag = params.slug;
    return {
      articles,
      parPage,
      currentPage,
      selectedCategory,
      selectedTag,
    }
  },
})
</script>
