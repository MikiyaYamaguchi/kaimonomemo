<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <Nuxt />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import "@/static/css/global.scss";
export default Vue.extend({
  data () {
    return {
    };
  },
});
</script>

<style lang="scss">
html {
  overflow: hidden;
}
body {
  position: relative;
  z-index: 0;
  overflow: hidden;
  &:after,
  &:before {
    content: "";
    width: 1500px;
    height: 500px;
    position: absolute;
    margin: auto;
    background: #ffd700;
    z-index: -2;
  }
  &:after {
    top: -350px;
    transform: rotate(20deg);
    right: -350px;
  }
  &:before {
    bottom: -350px;
    left: -350px;
    transform: rotate(30deg);
  }
  > #__nuxt {
    position: relative;
    &:after {
      content: "";
      width: 1500px;
      height: 500px;
      background: #ffa500;
      position: absolute;
      bottom: -200px;
      right: -550px;
      margin: auto;
      z-index: -1;
      transform: rotate(-55deg);
    }
  }
  @media screen and (max-width: 1510px) {
    &:after {
      top: -300px;
      right: -600px;
    }
    &:before {
      bottom: -200px;
      left: -600px;
    }
  }
  @media screen and (max-width: 1200px) {
    &:after {
      top: -300px;
      right: -900px;
    }
    &:before {
      bottom: -250px;
      left: -900px;
    }
  }
  @media screen and (max-width: 767px) {
    &:after {
      right: -850px;
      transform: rotate(65deg);
    }
    &:before {
      left: -850px;
      transform: rotate(65deg);
    }
    > div {
      &:after {
        bottom: -700px;
      }
    }
  }
}
header {
  height: auto;
  padding: 0 2% !important;
}
.el-footer {
  height: auto !important;
  min-height: 122px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 10px;
  @media screen and (max-width: 767px) {
    min-height: 56px;
  }
}
.el-header {
  height: auto !important;
}
.el-container {
  height: 100vh;
}
.el-main {
  padding: 0;
  overflow: inherit;
  max-height: calc(100vh - 122px - 122px);
  height: 100vh;
  height: -webkit-fill-available;
  @media screen and (max-width: 767px) {
    max-height: calc(100vh - 56px - 56px);
    height: 100vh;
    height: -webkit-fill-available;
  }
}
</style>
