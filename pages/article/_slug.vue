<template>
  <div class="container">
    <div class="category">
      <nuxt-link :to="'/category/' + article.category">{{
        getCatName(article.category)
      }}</nuxt-link>
    </div>
    <h1>{{ article.title }}</h1>
    <bread pageType="post" :title="article.title" :cat="article.category" />
    <p class="date_txt">
      投稿日：{{ $dayjs(article.createdAt).format("YYYY/MM/DD") }}<br /><span
        v-if="updateDateActive"
        >更新日：{{ $dayjs(article.updatedAt).format("YYYY/MM/DD") }}</span
      >
    </p>
    <div class="tag">
      <nuxt-link
        v-for="(tag, i) in getTagName(article.tag)"
        :key="tag"
        :to="'/tag/' + article.tag[i]"
        >{{ tag }}</nuxt-link
      >
    </div>
    <div class="article_wrap">
      <h2>目次</h2>
      <div class="toc">
        <ul>
          <li v-for="toc in article.toc" :key="toc.id">
            <nuxt-link
              v-if="toc.depth == 2"
              to="#"
              v-scroll-to="{
                el: `#${toc.id}`,
              }"
              class="h2_link"
              >{{ toc.text }}</nuxt-link
            >
            <nuxt-link
              v-else-if="toc.depth == 3"
              to="#"
              v-scroll-to="{
                el: `#${toc.id}`,
              }"
              class="h3_link"
              >{{ toc.text }}</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="ad">
        <adsbygoogle
          :ad-slot="'1207627504'"
          :ad-style="{ display: 'block', width: '100%', margin: '0 auto' }"
          ad-format=""
        />
      </div>
      <nuxt-content :document="article" />
      <div class="ad">
        <adsbygoogle
          :ad-slot="'8985496438'"
          :ad-style="{ display: 'block', width: '100%', margin: '0 auto' }"
          ad-format=""
        />
      </div>
      <SnsShareButton :text="article.title" />
      <h2>関連記事</h2>
      <ArticleList
        v-if="articles_array.length != 0"
        :articles="articles_array"
      />
      <p v-else>記事がありません。</p>
      <ul class="page-nav">
        <li class="page-nav__item page-nav__item--next">
          <nuxt-link
            v-if="next"
            :to="`/article/${next.slug}/`"
            class="page-nav__link"
          >
            {{ next.title }}
          </nuxt-link>
        </li>
        <li class="page-nav__item page-nav__item--prev">
          <nuxt-link
            v-if="prev"
            :to="`/article/${prev.slug}/`"
            class="page-nav__link"
          >
            {{ prev.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import taxonomy from "@/taxonomy";
export default Vue.extend({
  layout: "default",
  head () {
    return {
      title: `${this.article.title} | かいものの助`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        { hid: "og:title", property: "og:title", content: `${this.article.title} | かいものの助` },
        {
          hid: "og:description",
          property: "og:description",
          content:
            this.article.description,
        }
      ],
    }
  },
  data () {
    return {
      articles_array: [],
      category: [...taxonomy.category],
      tags: [...taxonomy.tags],
      updateDateActive: false
    }
  },
  async asyncData ({ $content, params, store }) {
    const article = await $content(`article/${params.slug}`).fetch()
    const [prev, next] = await $content("article")
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    const related_articles = await $content("article")
      .sortBy('createdAt', 'desc')
      .where({ category: { $contains: article.category } })
      .skip(0).limit(store.state.indexPerPage)
      .fetch();
    return {
      prev,
      next,
      article,
      related_articles
    }
  },
  methods: {
    shuffle (array) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    deleteSamePost () {
      this.articles_array.forEach(item => {
        if (item.slug === this.article.slug) {
          this.articles_array.splice(this.articles_array.findIndex((v) => { return v.slug === item.slug }), 1);
        }
      });
    },
    getCatName (cat) {
      return this.category.find((v) => v.slug === cat).text;
    },
    getTagName (tag) {
      const tagArray = [];
      tag.forEach((item) => {
        tagArray.push(this.tags.find((v) => v.slug === item).text);
      });
      return tagArray;
    }
  },
  mounted () {
    this.articles_array = this.shuffle(this.related_articles);
    this.deleteSamePost();
    this.articles_array.slice(0, 3);
    if (this.$dayjs(this.article.updatedAt).format("YYYY/MM/DD") != this.$dayjs(this.article.createdAt).format("YYYY/MM/DD")) {
      this.updateDateActive = true;
    }
  }
});
</script>
