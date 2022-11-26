<template>
  <div class="container">
    <h1>404 Not Found</h1>
    <bread pageType="page" title="404 Not Found" cat="" />
    <p class="main_txt">お探しのページが見つかりませんでした。</p>
    <p>
      申し訳ありません。お探しのページが見つかりませんでした。<br /><nuxt-link
        to="/"
        >TOPへ戻る</nuxt-link
      >
    </p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  head () {
    return {
      title: '404 Not Found | かいものの助',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'かいものの助の404 Not Foundページ。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'かいものの助,買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ'
        }
      ],
    }
  },
});
</script>

<style lang="scss" scoped>
.main_txt {
  font-size: 22px;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
}
</style>
