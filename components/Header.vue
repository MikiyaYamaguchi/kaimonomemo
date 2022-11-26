<template>
  <div class="hdr_container">
    <Logo />
    <Gnav />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
});
</script>

<style lang="scss" scoped>
.el-header {
  position: relative;
}
.hdr_container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
</style>
