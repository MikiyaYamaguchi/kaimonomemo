<template>
  <div id="page-top">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <div class="container">
          <Nuxt />
        </div>
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
  head () {
    return {
      link: [
        {
          rel: "canonical",
          href: `https://www.kaimononosuke.com${this.$route.path}`,
        },
      ],
    }
  },
  data () {
    return {
    };
  },
});
</script>

<style lang="scss">
body {
  position: relative;
  z-index: 0;
  > #__nuxt {
    position: relative;
    height: 100%;
    overflow: hidden;
    &:after,
    &:before {
      content: "";
      width: 1500px;
      height: 500px;
      position: fixed;
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
    > #__layout {
      position: relative;
      height: 100%;
      &:after {
        content: "";
        width: 1500px;
        height: 500px;
        background: #ffa500;
        position: fixed;
        bottom: -200px;
        right: -550px;
        margin: auto;
        z-index: -1;
        transform: rotate(-55deg);
      }
    }
  }
  @media screen and (max-width: 1510px) {
    > #__nuxt {
      &:after {
        top: -300px;
        right: -600px;
      }
      &:before {
        bottom: -200px;
        left: -600px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    > #__nuxt {
      &:after {
        top: -300px;
        right: -900px;
      }
      &:before {
        bottom: -250px;
        left: -900px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    > #__nuxt {
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
}
header {
  height: auto;
  padding: 0 2% !important;
}
.el-footer {
  height: auto !important;
  min-height: 122px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media screen and (max-width: 767px) {
    min-height: 56px;
  }
}
.el-header {
  height: auto !important;
  position: relative;
}
.el-container {
  position: relative;
  height: 100%;
}
.el-main {
  padding: 0;
  overflow: inherit;
  > .container {
    position: relative;
    background: #fff;
    padding: 5%;
    width: 95%;
    margin: 0 auto;
    -ms-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 2px 2px rgb(0 0 0 / 10%);
    min-height: calc(100vh - 122px - 125px);
    @media screen and (max-width: 767px) {
      min-height: calc(100vh - 59px - 56px);
    }
  }
  @media screen and (max-width: 767px) {
    > .container {
      padding: 8% 5%;
    }
  }
}
</style>
