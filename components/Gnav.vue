<template>
  <div class="nav_wrap">
    <div
      class="sp_nav_icon"
      v-on:click="MenuFlag = !MenuFlag"
      v-bind:class="MenuFlag ? 'close' : ''"
    >
      <span class="inner"><span></span></span>
    </div>
    <nav class="gnav" v-bind:class="MenuFlag ? 'open' : ''">
      <ul>
        <li @click="changePage(Path.ABOUT)">このサイトについて</li>
        <li @click="changePage(Path.PROFILE)">プロフィール</li>
        <li @click="changePage(Path.CONTACT)">お問い合わせ</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import { Path } from "~/constants";

export default Vue.extend({
  data () {
    return {
      Path: Path,
      MenuFlag: false,
    }
  },
  methods: {
    changePage: function (path) {
      this.$router.push({ path });
      this.MenuFlag = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.sp_nav_icon {
  display: none;
  width: 20px;
  height: 15px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5%;
  margin: auto;
  > .inner {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    &:after,
    &:before {
      content: "";
      width: 100%;
      height: 2px;
      background: #222;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      transform: rotate(0);
      transition: 0.3s;
    }
    &:after {
      top: 0;
    }
    &:before {
      bottom: 0;
    }
    > span {
      width: 100%;
      height: 2px;
      background: #222;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      opacity: 1;
      transition: 0.3s;
    }
  }
  &.close {
    > .inner {
      &:after {
        bottom: 0;
        transform: rotate(-45deg);
      }
      &:before {
        top: 0;
        transform: rotate(45deg);
      }
      > span {
        opacity: 0;
      }
    }
  }
  @media screen and (max-width: 767px) {
    display: block;
  }
}
.gnav {
  ul {
    display: flex;
    padding-bottom: 2%;
    li {
      list-style: none;
      position: relative;
      padding-left: 12px;
      font-size: 14px;
      color: #222;
      transition: 0.3s;
      cursor: pointer;
      letter-spacing: 1.6px;
      &:before {
        content: "";
        width: 6px;
        height: 6px;
        background: #222;
        border-radius: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        transition: 0.3s;
      }
      &:hover {
        color: #808080;
        &:before {
          background: #808080;
        }
      }
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 999;
    transform-origin: center top;
    visibility: hidden;
    transition: transform 0.3s;
    transform: rotateX(90deg);
    &.open {
      visibility: visible;
      transform: rotateX(0deg);
    }
    ul {
      display: block;
      padding: 0;
      margin: 0;
      li {
        display: block;
        width: 100%;
        background: #ffd700;
        text-align: center;
        margin-left: 0 !important;
        padding: 0.8em;
        &:before {
          display: none;
        }
      }
    }
  }
}
</style>
