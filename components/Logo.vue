<template>
  <div class="title">
    <img
      src="../static/image/logo.png"
      alt="買い物メモ"
      @click="changePage(Path.HOME)"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Path } from "~/constants";
export default Vue.extend({
  data () {
    return {
      Path: Path,
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
.title {
  padding: 25px 0;
  img {
    max-width: 376px;
    cursor: pointer;
  }
}
@media screen and (max-width: 860px) {
  .title {
    img {
      max-width: 280px;
    }
  }
}
@media screen and (max-width: 450px) {
  .title {
    padding: 10px 0;
    img {
      max-width: 180px;
    }
  }
}
</style>
