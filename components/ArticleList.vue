<template>
  <div class="article_list_wrap">
    <div v-for="article of articles" :key="article.slug" class="article_card">
      <NuxtLink
        :to="{ name: 'article-slug', params: { slug: article.slug } }"
        class="inline-block"
      >
        <p class="category">{{ getCatName(article.category) }}</p>
        <p class="title_txt">{{ article.title }}</p>
        <p class="date_txt">
          {{ $dayjs(article.updatedAt).format("YYYY/MM/DD") }}
        </p>
        <p class="tag">
          <span v-for="tag in getTagName(article.tag)" :key="tag">{{
            tag
          }}</span>
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import taxonomy from "@/taxonomy";
export default Vue.extend({
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      category: [...taxonomy.category],
      tags: [...taxonomy.tags]
    }
  },
  methods: {
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
  }
});
</script>

<style lang="scss" scoped>
.article_list_wrap {
  display: flex;
  flex-wrap: wrap;
  .article_card {
    width: 32%;
    margin-left: 2%;
    background: #fff;
    -moz-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
    border-left: 8px solid #ffa500;
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    a {
      text-decoration: none;
      display: block;
      padding: 6% 6% 6% calc(8px + 6%);
      height: 100%;
      .title_txt {
        font-size: 16px;
        font-weight: 700;
        margin: 0;
      }
      .date_txt {
        text-align: left;
        margin-top: 0;
        color: #808080;
      }
      .category {
        font-size: 12px;
        margin-bottom: 0;
      }
      .tag {
        span {
          display: inline-block;
          position: relative;
          font-size: 12px;
          margin-right: 10px;
          &:before {
            content: "#";
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    display: block;
    .article_card {
      width: 100%;
      margin-left: 0;
      &:not(:last-child) {
        margin-bottom: 4%;
      }
      a {
        padding: 3% 3% 3% calc(8px + 3%);
      }
    }
  }
}
</style>
