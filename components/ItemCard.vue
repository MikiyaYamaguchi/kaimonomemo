<template>
  <el-checkbox v-bind:label="itemName" border></el-checkbox>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    itemName: {
      type: String
    }
  },
  data () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.el-checkbox {
  display: flex;
  align-content: center;
  ::v-deep .el-checkbox__label {
    font-size: 20px;
  }
  ::v-deep .el-checkbox__input {
    display: flex;
    align-items: center;
    &.is-checked {
      .el-checkbox__inner {
        background-color: #ffa500;
        border-color: #ffa500;
      }
      + .el-checkbox__label {
        color: #ffa500;
      }
    }
  }
  &.is-bordered.is-checked {
    border-color: #ffa500;
  }
  @media screen and (max-width: 767px) {
    ::v-deep .el-checkbox__label {
      font-size: 17px;
    }
  }
}
</style>
