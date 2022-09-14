<template>
  <div class="hdr_container">
    <h1 class="title">
      <img src="../static/image/logo.png" alt="買い物メモ" />
    </h1>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.title {
  padding: 25px 0;
  img {
    max-width: 376px;
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
