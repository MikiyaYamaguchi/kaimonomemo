<template>
  <h1 class="title" @click="changePage(Path.HOME)">
    <img
      v-bind:src="require('../static/image/' + slug + '.png')"
      alt="買い物メモ"
    />
  </h1>
</template>

<script>
import Vue from "vue";
import { Path } from "~/constants";
export default Vue.extend({
  data () {
    return {
      Path: Path,
      slug: this.$route.path.replace(/\//g, "")
    }
  },
  methods: {
    changePage: function (path) {
      this.$router.push({ path });
    }
  }
});
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 0;
}
.title {
  padding: 25px 0;
  img {
    max-width: 376px;
    cursor: pointer;
  }
}
@media screen and (max-width: 767px) {
  .title {
    img {
      max-width: 250px;
    }
  }
}
@media screen and (max-width: 450px) {
  .title {
    padding: 10px 0;
    img {
      max-width: 140px;
    }
  }
}
</style>
