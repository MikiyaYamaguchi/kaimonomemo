<template>
  <div class="ftr_container">
    <nav class="ftr_nav">
      <ul>
        <li @click="changePage(Path.POLICY)">プライバシーポリシー</li>
      </ul>
    </nav>
    <div class="copyright">
      <p>Copyright © かいものの助 All Rights Reserved.</p>
    </div>
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
      window.scrollTo(0, 0);
      this.$router.push({ path });
      this.MenuFlag = false;
    }
  },
});
</script>

<style lang="scss" scoped>
.ftr_container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .ftr_nav {
    ul {
      margin: 0;
      padding-left: 0;
      li {
        font-size: 12px;
        list-style: none;
        cursor: pointer;
        color: #222;
        transition: 0.3s;
        &:hover {
          color: #808080;
        }
      }
    }
  }
  .copyright {
    text-align: right;
  }
}
p {
  margin: 0;
  font-size: 12px;
}
</style>
