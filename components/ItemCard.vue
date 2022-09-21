<template>
  <div class="item_card" v-bind:class="itemType">
    <el-checkbox
      v-bind:label="itemName"
      v-model="checked"
      v-on:change="checkItem"
      border
    ></el-checkbox>
    <el-popover placement="top" width="280" v-model="popupVisible">
      <p>{{ popupTitle }}</p>
      <div>
        <el-input
          :placeholder="popupPlaceholder"
          v-model="renameValue"
        ></el-input>
        <el-button
          class="rename_btn"
          @click="renameItem"
          v-bind:style="{ marginTop: '3%' }"
          >変更する</el-button
        >
      </div>
      <span class="edit" slot="reference"><i class="el-icon-edit"></i></span>
    </el-popover>
    <span class="close" @click="removeItem"><i class="el-icon-close"></i></span>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    itemName: {
      type: String
    },
    itemId: {
      type: Number
    },
    itemType: {
      type: String
    },
  },
  data () {
    return {
      renameDialogVisible: false,
      renameValue: "",
      popupVisible: false,
      popupTitle: "商品名を編集",
      popupPlaceholder: "じゃがいも、鳥もも肉 etc..."
    }
  },
  computed: {
    checked: {
      get () {
        return this.$store.getters.getChecked(this.itemId);
      },
      set (checked) {
        this.$store.commit("setChecked", { checked: checked, id: this.itemId });
      }
    }
  },
  methods: {
    removeItem () {
      this.$store.commit("deleteItemList", this.itemId);
    },
    renameItem () {
      this.$store.commit("renameItemList", { id: this.itemId, new_name: this.renameValue });
      this.popupVisible = false;
    },
    checkItem () {
      if (this.itemType == "item") {
        if (this.$store.state.itemList.find((e) => e.id === this.itemId).checked == true) {
          this.$store.commit("addcheckedCount");
        } else {
          this.$store.commit("takeCheckedCount");
        }
      }
    }
  },
  mounted () {
    if (this.itemType == "cat") {
      this.popupTitle = "カテゴリー名を編集";
      this.popupPlaceholder = "カレーライス、調味料 etc...";
    }
  }
})
</script>

<style lang="scss" scoped>
.item_card {
  position: relative;
  z-index: 0;
  span.edit {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 8%;
    margin: auto;
    width: 22px;
    height: 22px;
    z-index: 1;
    border-radius: 100%;
    cursor: pointer;
    background: transparent;
    transition: background 0.2s;
    padding: 3px;
    box-sizing: border-box;
    &:hover {
      background: #dcdcdc;
    }
  }
  span.close {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 3%;
    margin: auto;
    width: 22px;
    height: 22px;
    z-index: 1;
    border-radius: 100%;
    cursor: pointer;
    background: transparent;
    transition: background 0.2s;
    padding: 3px;
    box-sizing: border-box;
    &:hover {
      background: #dcdcdc;
    }
  }
  &.cat {
    width: 98% !important;
    cursor: pointer;
    border-bottom: 1px solid #606266;
    .el-checkbox {
      border: none;
      padding: 0;
      align-items: center;
      ::v-deep .el-checkbox__input.is-checked {
        & + .el-checkbox__label {
          color: #606266;
        }
      }
      ::v-deep .el-checkbox__input {
        display: none;
      }
      ::v-deep .el-checkbox__label {
        position: relative;
        padding-left: 20px;
        font-weight: bold;
        font-size: 22px;
        &:after {
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 100%;
          background: #606266;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto;
        }
      }
    }
    @media screen and (min-width: 768px) {
      ::v-deep .close {
        right: 1.5%;
      }
      ::v-deep .edit {
        right: 4%;
      }
    }
    @media screen and (max-width: 767px) {
      .el-checkbox {
        ::v-deep .el-checkbox__label {
          font-size: 18px;
          &:after {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    span.edit {
      right: 10%;
    }
  }
}
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
