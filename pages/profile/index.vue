<template>
  <div class="container">
    <h1>プロフィール</h1>
    <bread pageType="page" title="プロフィール" cat="" />
    <div class="profile_wrap">
      <div class="flex_wrap">
        <div class="img">
          <figure>
            <img src="../../static/image/profile.png" alt="mikiya" />
          </figure>
        </div>
        <div class="txt">
          <p class="name_txt">mikiya</p>
          <p>
            千葉県在住のWebエンジニア。<br />
            都内のWeb制作会社に勤務。<br /><br />
            独学でプログラミングの勉強を始めて、エンジニア職で新卒入社。<br />
            一発目でとんでもないブラック企業を引き当ててしまい、3ヶ月でやめるが、諦めずエンジニアを続けて、今に至る。<br /><br />
            最近ではWebアプリケーションの開発に興味を持ち、絶賛勉強中。<br />
            自分が身につけたスキルを活かして、日常生活の中の「これがあったらいいのに」を形にすることを目標に日々制作活動に勤しむ。<br /><br />
            趣味は映画鑑賞。<br />
            MCUやDCなどのアメコミヒーロー映画にどハマりしています。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  head () {
    return {
      title: 'プロフィール | かいものの助',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'かいものの助のプロフィールページ。かいものの助の運営者ついての自己紹介を記載しています。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'かいものの助,プロフィール,買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ'
        },
        { hid: "og:title", property: "og:title", content: "プロフィール | かいものの助" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "かいものの助のプロフィールページ。かいものの助の運営者ついての自己紹介を記載しています。",
        }
      ],
    }
  }
});
</script>

<style lang="scss" scoped>
.profile_wrap {
  .flex_wrap {
    display: flex;
    align-items: center;
    .img {
      width: 32%;
      figure {
        position: relative;
        margin: 0;
        height: 0;
        padding-top: 100%;
        overflow: hidden;
        border: 1px solid #707070;
        border-radius: 50%;
        img {
          max-width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .txt {
      width: 64%;
      margin-left: 4%;
      .name_txt {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .flex_wrap {
      display: block;
      .img,
      .txt {
        width: 100% !important;
        margin-left: 0 !important;
      }
      .img {
        margin-bottom: 5%;
        padding: 0 10%;
      }
      .txt {
        .name_txt {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
