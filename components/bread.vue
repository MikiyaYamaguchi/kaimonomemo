<template>
  <ul class="bread">
    <li><nuxt-link to="/">HOME</nuxt-link></li>
    <li v-if="pageType == 'post'">
      <nuxt-link :to="`/category/${cat}/`">{{
        category.find((v) => v.slug == cat).text
      }}</nuxt-link>
    </li>
    <li>{{ title }}</li>
  </ul>
</template>

<script>
import Vue from "vue";
import taxonomy from "@/taxonomy";
export default Vue.extend({
  props: {
    pageType: {
      type: String
    },
    title: {
      type: String
    },
    cat: {
      type: String
    },
  },
  data () {
    return {
      category: [...taxonomy.category],
      tags: [...taxonomy.tags]
    }
  },
})
</script>

<style lang="scss" scoped>
.bread {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 3em 0;
  li {
    list-style: none;
    font-size: 13px;
    &:not(:last-child) {
      position: relative;
      padding-right: 20px;
      &:after {
        content: "";
        width: 6px;
        height: 6px;
        border-top: 1px solid #222;
        border-right: 1px solid #222;
        position: absolute;
        top: 50%;
        right: 8px;
        margin: auto;
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }
}
</style>
