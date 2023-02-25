<template>
  <div class="container">
    <h1>{{ getCatName($route.params.slug) }}</h1>
    <bread pageType="category" :title="getCatName($route.params.slug)" cat="" />
    <section>
      <div class="ad">
        <adsbygoogle
          :ad-slot="'4655933830'"
          :ad-style="{ display: 'block', width: '100%', margin: '0 auto' }"
          :ad-format="'rectangle'"
        />
      </div>
      <div class="row">
        <article-list :articles="posts" />
      </div>
      <div class="ad">
        <adsbygoogle
          :ad-slot="'1016055811'"
          :ad-style="{ display: 'block', width: '100%', margin: '0 auto' }"
          :ad-format="'rectangle'"
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
import taxonomy from "@/taxonomy";
export default Vue.extend({
  layout: "default",
  head () {
    return {
      title: `${this.getCatName(this.$route.params.slug)} | かいものの助`,
      meta: [
        { hid: "og:title", property: "og:title", content: `${this.getCatName} | かいものの助` },
      ]
    }
  },
  data () {
    return {
      category: [...taxonomy.category]
    }
  },
  computed: {
    posts: function () {
      const end = this.currentPage * this.parPage;
      const start = end - this.parPage;
      return this.articles.slice(start, end);
    }
  },
  async asyncData ({ store, $content, params }) {
    const articles = await $content("article")
      .sortBy('createdAt', 'desc')
      .where({ category: { $contains: params.slug } })
      .skip(0).limit(store.state.indexPerPage)
      .fetch()
    const parPage = 12;
    const currentPage = parseInt(params.id) || 1;
    const selectedCategory = params.slug;
    const selectedTag = undefined;
    return {
      articles,
      parPage,
      currentPage,
      selectedCategory,
      selectedTag,
    }
  },
  methods: {
    getCatName (cat) {
      return this.category.find((v) => v.slug === cat).text;
    },
  }
})
</script>
