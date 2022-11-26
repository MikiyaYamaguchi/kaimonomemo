<template>
  <p>{{ articles }}</p>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    cat: {
      type: String,
    }
  },
  name: 'IndexPage',
  async asyncData ({ $content }) {
    const articles = await $content()
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles
    }
  }
});
</script>
