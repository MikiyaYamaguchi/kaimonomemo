<template>
  <div class="container">
    <div class="content_top_area">
      <i class="el-icon-plus" @click="dialogVisible = true"></i>
    </div>
    <draggable v-model="itemList" class="item-card_wrap">
      <ItemCard
        v-for="item in itemList"
        :key="item.id"
        v-bind:itemName="item.param"
      />
    </draggable>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      :options="{ animation: 300, handle: '.handle' }"
    >
      <p class="btn cat_btn" @click="catBtnClick">
        <img src="../static/image/category_icon.png" />カテゴリーを追加
      </p>
      <p class="btn item_btn" @click="itemBtnClick">
        <img src="../static/image/item_icon.png" />商品を追加
      </p>
      <el-dialog
        :visible.sync="innerDialog"
        class="inner_dialog"
        append-to-body
      >
        <div v-if="form_type">
          <p class="inner_dialog_title">商品名</p>
          <el-input
            placeholder="じゃがいも、鳥もも肉 etc..."
            v-model="form_value"
          ></el-input>
          <el-button class="add_btn" @click="addItem">追加する</el-button>
        </div>
        <div v-else>
          <p class="inner_dialog_title">カテゴリー名</p>
          <el-input
            placeholder="カレーライス、調味料 etc..."
            v-model="form_value"
          ></el-input>
          <el-button class="add_btn" @click="addItem">追加する</el-button>
        </div>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import draggable from "vuedraggable";

export default Vue.extend({
  layout: "default",
  components: { draggable },
  data () {
    return {
      dialogVisible: false,
      innerDialog: false,
      form_type: false,
      form_value: "",
    };
  },
  computed: {
    itemList: {
      get () {
        return this.$store.state.itemList
      },
      set (itemList) {
        this.$store.commit('UpdateItemList', itemList)
      }
    }
  },
  mounted () {
  },
  methods: {
    itemBtnClick () {
      this.form_type = true;
      this.innerDialog = true;
    },
    catBtnClick () {
      this.form_type = false;
      this.innerDialog = true;
    },
    setStrage (item) {
      this.$store.commit("addItemList", { id: this.$store.state.num, param: item });
    },
    addItem () {
      this.setStrage(this.form_value);
      this.form_value = "";
      this.$store.commit("addNum");
      this.dialogVisible = false;
      this.innerDialog = false;
    }
  },
});
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  padding: 3% 5%;
  width: 85%;
  height: 100%;
  margin: 0 auto;
  -moz-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  .content_top_area {
    margin-bottom: 2%;
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    color: #ffa500;
    .el-icon-plus {
      cursor: pointer;
    }
  }
  ::v-deep .el-dialog {
    margin-top: 20vh;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-dialog__header {
      padding: 0;
    }
    .el-dialog__body {
      width: 100%;
    }
    .btn {
      font-size: 20px;
      display: flex;
      align-content: center;
      justify-content: center;
      color: #222;
      border-radius: 5px;
      padding: 1.2em;
      width: 90%;
      margin: 0 auto;
      transition: 0.2s;
      cursor: pointer;
      &:first-child {
        margin-bottom: 5%;
      }
      img {
        width: 30px;
        margin-right: 10px;
      }
      &:first-child {
        background: #ffa500;
        &:hover {
          background: #e58b00;
        }
      }
      &:nth-child(2) {
        background: #ffd700;
        &:hover {
          background: #e5bd00;
        }
      }
    }
  }
  .item-card_wrap {
    display: flex;
    flex-wrap: wrap;
    > label {
      width: 49%;
      margin-left: 2% !important;
      margin-right: 0;
      margin: 6px 0;
      &:nth-child(2n + 1) {
        margin-left: 0 !important;
      }
    }
  }
  @media screen and (max-width: 767px) {
    ::v-deep .el-dialog {
      width: 90% !important;
      .btn {
        font-size: 16px;
        img {
          width: 25px;
        }
      }
    }
    .item-card_wrap {
      > label {
        width: 100%;
        margin-left: 0 !important;
      }
    }
  }
}
.inner_dialog {
  .inner_dialog_title {
    font-size: 30px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  ::v-deep .el-dialog__body {
    padding: 30px 20px 50px;
  }
  .add_btn {
    display: block;
    border: none;
    margin: 20px auto 0;
    width: 100%;
    max-width: 300px;
    font-size: 20px;
    padding: 0.6em;
    background: #ffd700;
    -moz-box-shadow: 0px 4px 0px 0px rgba(255, 165, 0, 1);
    -webkit-box-shadow: 0px 4px 0px 0px rgba(255, 165, 0, 1);
    -ms-box-shadow: 0px 4px 0px 0px rgba(255, 165, 0, 1);
    box-shadow: 0px 4px 0px 0px rgba(255, 165, 0, 1);
    border-radius: 5px;
    font-weight: bold;
    transition: 0.2s;
    &:hover {
      color: #222;
      transform: translateY(4px);
      box-shadow: none;
    }
  }
  @media screen and (max-width: 767px) {
    ::v-deep .el-dialog {
      width: 90%;
    }
    .inner_dialog_title {
      font-size: 22px;
    }
    .add_btn {
      font-size: 16px;
    }
  }
}
</style>
