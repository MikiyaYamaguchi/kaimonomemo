<template>
  <div class="how_to">
    <div class="how_to_icon_wrap">
      <i class="el-icon-s-opportunity" @click="how_to_open()"></i>
      <p>使い方</p>
    </div>
    <el-dialog title="使い方" :visible.sync="howToDialog" icon="el-icon-search">
      <div class="how_to_content_wrap">
        <div class="content" :style="{ display: how_to_01 }">
          <p class="title_txt">
            <i class="el-icon-shopping-cart-2"></i> 初めに
          </p>
          <p>
            「買い物メモ」アプリをご利用くださいまして、ありがとうございます。<br />このアプリは買い物商品をメモできるアプリです。<br />料理名などで分類できるカテゴリー機能や他の人にメモを共有することも可能です。
          </p>
        </div>
        <div class="content" :style="{ display: how_to_02 }">
          <p class="title_txt">
            <i class="el-icon-shopping-cart-2"></i> 買い物商品の追加
          </p>
          <p>
            右上のプラスマークを押して、表示されるダイアログの「商品を追加」を押しましょう。そうすると商品入力フォームが出てくるので、商品名を入力して、「追加する」ボタンを押すと、商品が追加されます。<br />
            「カテゴリー」を追加している状態だと、商品入力フォームの下に「カテゴリー」を選択するプルダウンメニューが表示されるので、ここから追加する「カテゴリー」を選択できます。<br />
            追加した商品は、長押ししてドラッグ＆ドロップで入れ替えができます。
          </p>
          <div class="flex_wrap">
            <figure>
              <img
                src="../static/image/how_to_img001.png"
                alt="買い物商品の追加"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img001.png"
                alt="買い物商品の追加"
                class="sp-only"
              />
            </figure>
            <figure>
              <img
                src="../static/image/how_to_img002.png"
                alt="買い物商品の追加"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img002.png"
                alt="買い物商品の追加"
                class="sp-only"
              />
            </figure>
          </div>
        </div>
        <div class="content" :style="{ display: how_to_03 }">
          <p class="title_txt">
            <i class="el-icon-shopping-cart-2"></i> カテゴリーの追加
          </p>
          <p>
            「カテゴリー」は商品を分類分けするのにお使いください。（料理名や調味料のようなジャンル名など）
            右上のプラスマークを押して、表示されるダイアログの「カテゴリーを追加」を押しましょう。そうするとカテゴリー入力フォームが出てくるので、カテゴリー名を入力して、「追加する」ボタンを押すと、カテゴリーが追加されます。<br />
            「カテゴリー」は商品と同じで、長押ししてドラッグ＆ドロップで入れ替えができます。
          </p>
          <div class="flex_wrap">
            <figure>
              <img
                src="../static/image/how_to_img003.png"
                alt="カテゴリーの追加"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img003.png"
                alt="カテゴリーの追加"
                class="sp-only"
              />
            </figure>
            <figure>
              <img
                src="../static/image/how_to_img004.png"
                alt="カテゴリーの追加"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img004.png"
                alt="カテゴリーの追加"
                class="sp-only"
              />
            </figure>
          </div>
        </div>
        <div class="content" :style="{ display: how_to_04 }">
          <p class="title_txt">
            <i class="el-icon-shopping-cart-2"></i> 商品・カテゴリーの削除
          </p>
          <p>
            追加した商品やカテゴリーは一番右側の「×」アイコンを押すと、削除できます。
          </p>
          <div class="flex_wrap">
            <figure>
              <img
                src="../static/image/how_to_img005.png"
                alt="商品・カテゴリーの削除"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img005.png"
                alt="商品・カテゴリーの削除"
                class="sp-only"
              />
            </figure>
          </div>
        </div>
        <div class="content" :style="{ display: how_to_05 }">
          <p class="title_txt">
            <i class="el-icon-shopping-cart-2"></i> 商品・カテゴリーの編集
          </p>
          <p>
            追加した商品やカテゴリーは右から2番目の編集アイコンを押すと、商品名およびカテゴリー名の編集ができます。
          </p>
          <div class="flex_wrap">
            <figure>
              <img
                src="../static/image/how_to_img006.png"
                alt="商品・カテゴリーの編集"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img006.png"
                alt="商品・カテゴリーの編集"
                class="sp-only"
              />
            </figure>
          </div>
        </div>
        <div class="content" :style="{ display: how_to_06 }">
          <p class="title_txt">
            <i class="el-icon-shopping-cart-2"></i> 買い物データのリセット
          </p>
          <p>
            画面左上のゴミ箱アイコンを押すと、ダイアログが表示され「メモをリセットする」を押すことで、内容をリセットすることができます。
          </p>
          <div class="flex_wrap">
            <figure>
              <img
                src="../static/image/how_to_img007.png"
                alt="買い物データのリセット"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img007.png"
                alt="買い物データのリセット"
                class="sp-only"
              />
            </figure>
            <figure>
              <img
                src="../static/image/how_to_img008.png"
                alt="買い物データのリセット"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img008.png"
                alt="買い物データのリセット"
                class="sp-only"
              />
            </figure>
          </div>
        </div>
        <div class="content" :style="{ display: how_to_07 }">
          <p class="title_txt">
            <i class="el-icon-shopping-cart-2"></i> 買い物データの共有
          </p>
          <p>
            ゴミ箱アイコンの横の共有アイコンを押すと、「買い物内容をシェアしますか？」とダイアログが出ます。<br />
            「シェアする」ボタンを押すと、URLが発行されます。<br />
            このURLを共有相手に送ると、メモ内容を共有できます。<br />
            共有されたURLを開くと、「共有された買い物データをメモに反映させますか？」とダイアログが出るので、「はい」を押すとメモ内容が反映されます。<br />
            「いいえ」を押すと反映されません。
          </p>
          <div class="flex_wrap">
            <figure>
              <img
                src="../static/image/how_to_img009.png"
                alt="買い物データの共有"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img009.png"
                alt="買い物データの共有"
                class="sp-only"
              />
            </figure>
            <figure>
              <img
                src="../static/image/how_to_img010.png"
                alt="買い物データの共有"
                class="pc-only"
              />
              <img
                src="../static/image/sp_how_to_img010.png"
                alt="買い物データの共有"
                class="sp-only"
              />
            </figure>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <p class="count_num">{{ pageCount }}/7</p>
        <el-button @click="how_to_next" type="primary">{{
          how_to_next_btn
        }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data () {
    return {
      howToDialog: false,
      pageCount: 1,
      how_to_01: "none",
      how_to_02: "none",
      how_to_03: "none",
      how_to_04: "none",
      how_to_05: "none",
      how_to_06: "none",
      how_to_07: "none",
      how_to_next_btn: "次へ"
    }
  },
  methods: {
    how_to_open () {
      this.pageCount = 1;
      this.how_to_01 = "block";
      this.how_to_02 = "none";
      this.how_to_03 = "none";
      this.how_to_04 = "none";
      this.how_to_05 = "none";
      this.how_to_06 = "none";
      this.how_to_07 = "none";
      this.how_to_next_btn = "次へ";
      this.howToDialog = true;
    },
    how_to_next () {
      switch (this.pageCount) {
        case 1:
          this.how_to_01 = "none";
          this.how_to_02 = "block";
          this.pageCount++;
          break;
        case 2:
          this.how_to_02 = "none";
          this.how_to_03 = "block";
          this.pageCount++;
          break;
        case 3:
          this.how_to_03 = "none";
          this.how_to_04 = "block";
          this.pageCount++;
          break;
        case 4:
          this.how_to_04 = "none";
          this.how_to_05 = "block";
          this.pageCount++;
          break;
        case 5:
          this.how_to_05 = "none";
          this.how_to_06 = "block";
          this.pageCount++;
          break;
        case 6:
          this.how_to_06 = "none";
          this.how_to_07 = "block";
          this.how_to_next_btn = "閉じる";
          this.pageCount++;
          break;
        case 7:
          this.how_to_07 = "none";
          this.pageCount = 1;
          this.howToDialog = false;
          break;
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.how_to {
  .how_to_icon_wrap {
    text-align: center;
    font-size: 12px;
    border-radius: 100%;
    cursor: pointer;
    margin-top: 20px;
    .el-icon-s-opportunity {
      font-size: 30px;
    }
    p {
      margin: 0;
      font-weight: bold;
    }
  }
  ::v-deep(.el-dialog) {
    .el-dialog__header {
      text-align: center;
      .el-dialog__title {
        position: relative;
        font-weight: bold;
        font-size: 22px;
      }
    }
    .content {
      .title_txt {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: baseline;
        padding-bottom: 5px;
        border-bottom: 1px solid #222;
        .el-icon-shopping-cart-2 {
          font-size: 24px;
          margin-right: 7px;
        }
      }
      .flex_wrap {
        display: flex;
        figure {
          margin: 0;
          &:nth-child(2) {
            margin-left: 2%;
          }
          img {
            max-width: 100%;
          }
        }
      }
    }
    .el-dialog__footer {
      .dialog-footer {
        display: flex;
        justify-content: flex-end;
        .count_num {
          margin-right: 20px;
        }
      }
      button:last-child {
        background: #ffa500;
        border-color: #ffa500;
        color: #222;
      }
    }
  }
  @media screen and (max-width: 767px) {
    ::v-deep(.el-dialog) {
      width: 90%;
    }
    .how_to_icon_wrap {
      margin-top: 8px;
      font-size: 10px;
      .el-icon-s-opportunity {
        font-size: 25px;
      }
    }
  }
}
.how_to_active {
  display: block !important;
}
</style>
