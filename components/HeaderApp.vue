<template>
  <div class="hdr_container">
    <LogoApp />
    <HowTo v-if="$route.path.match('kaimonomemo')" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.hdr_container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
