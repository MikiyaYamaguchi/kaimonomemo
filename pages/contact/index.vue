<template>
  <div class="container">
    <h1>お問い合わせ</h1>
    <bread pageType="page" title="お問い合わせ" cat="" />
    <div class="row">
      <form
        class="contact_form"
        name="contact"
        method="POST"
        action="/thanks"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="contact_item">
          <label for="name">お名前</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            autocomplete="name"
            required
          />
        </div>
        <div class="contact_item">
          <label for="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            autocomplete="email"
            required
          />
        </div>
        <div class="contact_item">
          <label for="message">お問い合わせ内容</label>
          <textarea
            id="message"
            rows="12"
            name="message"
            v-model="message"
            required
          ></textarea>
        </div>
        <div class="contact_item" v-show="false">
          <label for="message">スパムでない場合は空欄</label>
          <input type="text" name="bot-field" v-model="botField" />
        </div>
        <div class="contact_submit">
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  head () {
    return {
      title: 'お問い合わせ | かいものの助',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'かいものの助のお問い合わせページ。かいものの助に関する感想や意見、「買い物」に関する情報共有など、なんでもお問い合わせください。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'かいものの助,お問い合わせ,買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ'
        },
        { hid: "og:title", property: "og:title", content: "お問い合わせ | かいものの助" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "かいものの助のお問い合わせページ。かいものの助に関する感想や意見、「買い物」に関する情報共有など、なんでもお問い合わせください。",
        }
      ],
    }
  }
});
</script>

<style lang="scss" scoped>
.contact_submit {
  button {
    display: block;
    border: none;
    margin: 20px auto 0;
    width: 100%;
    max-width: 300px;
    font-size: 20px;
    padding: 0.6em;
    background: gold;
    -ms-box-shadow: 0 4px 0 0 orange;
    box-shadow: 0 4px 0 0 orange;
    border-radius: 5px;
    font-weight: 700;
    transition: 0.2s;
    font-size: 14px;
    color: #222;
    cursor: pointer;
    &:hover {
      transform: translateY(4px);
      box-shadow: none;
    }
  }
}
.contact_item {
  display: flex;
  align-content: flex-start;
  &:not(:last-child) {
    margin-bottom: 3%;
  }
  label {
    width: 150px;
    font-size: 16px;
  }
  input,
  textarea {
    margin-left: 2%;
    width: calc(100% - 150px);
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #707070;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: calc(100% - 100px);
    line-height: 2;
    padding: 0 0.5em;
  }
  @media screen and (max-width: 767px) {
    display: block;
    &:not(:last-child) {
      margin-bottom: 6%;
    }
    label {
      width: 100%;
      font-size: 15px;
      margin-bottom: 1em;
    }
    input,
    textarea {
      margin-left: 0;
      width: 100%;
    }
  }
}
</style>
