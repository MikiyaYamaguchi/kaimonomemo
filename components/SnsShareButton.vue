<template>
  <div>
    <div class="sns_wrap">
      <p class="title_txt">
        <i class="el-icon-shopping-cart-2"></i> シェアする！
      </p>
      <ul class="share_buttons">
        <!-- Twitter -->
        <li>
          <a :href="this.twitterURL" target="_blank">
            <img src="../static/image/twitter.png" alt="Twitter" />
          </a>
        </li>
        <!-- Facebook -->
        <li>
          <a :href="this.facebookURL" target="_blank">
            <img src="../static/image/facebook.png" alt="Facebook" />
          </a>
        </li>
        <!-- LINE -->
        <li>
          <a :href="this.lineURL" target="_blank">
            <img src="../static/image/line.png" alt="LINE" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnsShareButton",
  props: {
    text: String
  },
  computed: {
    url () {
      return `https://ja.nuxtjs.org${this.$route.path}`;
    },
    textAndHashTag () {
      return encodeURIComponent(`${this.text} ${this.hashTag}`);
    },
    content () {
      return encodeURIComponent(`${this.text} ${this.url}`);
    },
    twitterURL () {
      return `https://twitter.com/intent/tweet?url=http://localhost:3000/${this.$route.path}&text=${this.text}`;
    },
    facebookURL () {
      return `https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/${this.$route.path}`;
    },
    lineURL () {
      return `https://line.me/R/msg/text/?${this.content}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.sns_wrap {
  display: flex;
  align-items: center;
  margin-bottom: 4%;
  .title_txt {
    margin: 0 15px 0 0;
  }
}
.title_txt {
  font-size: 16px;
}
.el-icon-shopping-cart-2 {
  font-size: 24px;
  color: #ffa500;
}
.share_buttons {
  display: flex;
  flex-wrap: wrap;
  background: none !important;
  box-shadow: none !important;
  padding: 0;
  > * {
    list-style: none;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
@media screen and (max-width: 767px) {
  .sns_wrap {
    display: block;
  }
  .title_txt {
    font-size: 14px;
    margin-bottom: 0.5em !important;
  }
  .el-icon-shopping-cart-2 {
    font-size: 20px;
  }
}
</style>
