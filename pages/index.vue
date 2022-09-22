<template>
  <div class="container">
    <div class="content_top_area">
      <!-- <i class="el-icon-share" @click="shareDialog = true"></i> -->
      <p class="item_count">
        {{ checkedItemCount }}/{{ ItemListArray.length }}
      </p>
      <el-button
        class="finish_btn"
        v-bind:disabled="finishBtnActive"
        @click="finishDialog = true"
        >買い物終わり！</el-button
      >
      <i class="el-icon-plus" @click="dialogVisible = true"></i>
    </div>
    <draggable v-model="itemList" class="item-card_wrap">
      <ItemCard
        v-for="item in itemList"
        :key="item.id"
        v-bind:itemName="item.param"
        v-bind:itemId="item.id"
        v-bind:itemType="item.type"
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
          <el-select
            v-model="catSelectVal"
            placeholder="追加カテゴリー"
            v-if="itemList.find((e) => e.type === 'cat') != null"
          >
            <el-option
              v-for="cat in catList"
              :key="cat.id"
              :label="cat.param"
              :value="cat.param"
            >
            </el-option>
          </el-select>
          <el-button class="add_btn" @click="addItem">追加する</el-button>
        </div>
        <div v-else>
          <p class="inner_dialog_title">カテゴリー名</p>
          <el-input
            placeholder="カレーライス、調味料 etc..."
            v-model="form_value"
          ></el-input>
          <el-button class="add_btn" @click="addCat">追加する</el-button>
        </div>
      </el-dialog>
    </el-dialog>
    <el-dialog title="お買い物お疲れ様でした！！" :visible.sync="finishDialog">
      <div slot="footer" class="dialog-footer">
        <el-button @click="finishDialog = false">戻る</el-button>
        <el-button type="primary" @click="deleteData"
          >メモをリセットする</el-button
        >
      </div>
    </el-dialog>
    <!-- <el-dialog
      title="買い物内容をシェアしますか？"
      class="share_dialog"
      :visible.sync="shareDialog"
    >
      <div slot="footer" class="dialog-footer">
        <el-button @click="shareDialog = false">戻る</el-button>
        <el-button type="primary" @click="postData">シェアする</el-button>
      </div>
      <el-dialog
        title="下記URLをコピーしてシェアしましょう"
        :visible.sync="shareDialog2"
        class="inner_dialog"
        append-to-body
      >
        <el-input
          placeholder="カレーライス、調味料 etc..."
          v-model="share_url_value"
          readonly
        ></el-input>
        <div slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            v-bind:style="{
              background: '#ffa500',
              borderColor: '#ffa500',
              color: '#222',
            }"
            @click="copyShareUrl(share_url_value)"
            >コピーする</el-button
          >
        </div>
      </el-dialog>
    </el-dialog> -->
  </div>
</template>

<script>
import Vue from "vue";
import draggable from "vuedraggable";
// import kaimonomemoApi from "~/api/index";

export default Vue.extend({
  layout: "default",
  components: { draggable },
  data () {
    return {
      dialogVisible: false,
      innerDialog: false,
      finishDialog: false,
      // shareDialog: false,
      // shareDialog2: false,
      form_type: false,
      form_value: "",
      catSelectVal: null,
      share_url_value: "http://www.test.com"
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
    },
    checkedItemCount: {
      get () {
        return this.$store.getters.getCheckedCount;
      }
    },
    finishBtnActive: {
      get () {
        return this.$store.state.finishBtnActive;
      }
    },
    ItemListArray: {
      get () {
        return this.$store.getters.getItemListArray;
      }
    },
    catList: {
      get () {
        return this.$store.getters.getCatList;
      }
    }
  },
  mounted () {
    console.log(this.itemList);
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
    setStrageItem (item) {
      if (this.catSelectVal != null) {
        let selectCatNextId = null;
        if (this.catList.indexOf(this.catList.find((e) => e.param == this.catSelectVal)) == this.catList.length - 1) {
          selectCatNextId = null;
        } else {
          selectCatNextId = this.catList[(this.catList.indexOf(this.catList.find((e) => e.param == this.catSelectVal))) + 1].id;
        }
        this.$store.commit("addItemList", { itemList: { id: this.$store.state.num, param: item, type: "item", checked: false }, selectCatNextId: selectCatNextId });
      } else {
        this.$store.commit("addItemList", { itemList: { id: this.$store.state.num, param: item, type: "item", checked: false }, selectCatNextId: null });
      }
    },
    setStrageCat (cat) {
      this.$store.commit("addCatList", { id: this.$store.state.num, param: cat, type: "cat", checked: false });
    },
    addItem () {
      this.setStrageItem(this.form_value);
      this.form_value = "";
      this.$store.commit("addNum");
      this.dialogVisible = false;
      this.innerDialog = false;
      this.catSelectVal = null;
      this.$store.commit("finishBtnDisActive");
    },
    addCat () {
      this.setStrageCat(this.form_value);
      this.form_value = "";
      this.$store.commit("addNum");
      this.dialogVisible = false;
      this.innerDialog = false;
      this.$store.commit("finishBtnDisActive");
    },
    deleteData () {
      this.$store.commit("deleteData");
      this.finishDialog = false;
    },
    copyShareUrl (url) {
      navigator.clipboard.writeText(url)
        .then(() => {
          alert("コピーしました")
        })
        .catch(e => {
          console.error(e)
        })
    },
    // async postKaimonoData () {
    //   await kaimonomemoApi.postKaimonoData(this.itemList);
    // },
    // postData () {
    //   this.postKaimonoData();
    //   this.shareDialog2 = true;
    // }
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
    margin-bottom: 4%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > *:not(:first-child) {
      margin-left: 2%;
    }
    .item_count {
      margin: 0;
      margin-left: 2%;
    }
    .finish_btn {
      display: inline-block;
      border: none;
      font-size: 16px;
      padding: 0.6em 1em;
      background: #ffd700;
      -ms-box-shadow: 0px 4px 0px 0px orange;
      box-shadow: 0px 4px 0px 0px orange;
      border-radius: 5px;
      font-weight: bold;
      transition: 0.2s;
      margin-bottom: 4px;
      &:hover {
        color: #222;
        transform: translateY(4px);
        box-shadow: none;
      }
      &:focus {
        color: #222 !important;
      }
      &.is-disabled {
        color: #222;
        opacity: 0.5;
        &:hover {
          transform: translateY(0);
          -ms-box-shadow: 0px 4px 0px 0px orange;
          box-shadow: 0px 4px 0px 0px orange;
        }
      }
    }
    .el-icon-share {
      cursor: pointer;
      font-size: 25px;
    }
    .el-icon-plus {
      cursor: pointer;
      font-size: 25px;
      color: #ffa500;
    }
    @media screen and (max-width: 767px) {
      > *:not(:first-child) {
        margin-left: 5%;
      }
      .finish_btn {
        font-size: 14px;
      }
    }
  }
  ::v-deep .el-dialog__wrapper {
    .el-dialog {
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
    &:last-child {
      .el-dialog {
        flex-direction: column;
        .el-dialog__footer {
          button {
            &:first-child {
              &:hover {
                background: none;
                color: #606266;
                opacity: 0.8;
                border-color: #dcdfe6;
              }
            }
            &:last-child {
              background: #ffa500;
              border-color: #ffa500;
              color: #222;
              &:hover {
                background: #e58b00;
              }
            }
          }
        }
      }
    }
  }
  .item-card_wrap {
    display: flex;
    flex-wrap: wrap;
    max-height: calc(100% - 3% - 3% - 2% - 25px);
    overflow-y: scroll;
    > div {
      width: 48%;
      margin: 1% 1% 0 !important;
      margin-right: 0;
      margin: 6px 0;
      z-index: 1;
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
      > div {
        width: 100%;
        margin: 3% 0 0 !important;
      }
    }
  }
}
.inner_dialog {
  .inner_dialog_title {
    font-size: 26px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  ::v-deep .el-select {
    margin-top: 10px;
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
