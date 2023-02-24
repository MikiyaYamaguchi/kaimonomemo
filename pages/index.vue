<template>
  <div class="container top-container">
    <div class="main_visual">
      <figure>
        <img
          src="../static/image/main_image.jpg"
          alt="かいものの助"
          class="pc-only"
        />
        <img
          src="../static/image/sp_main_image.jpg"
          alt="かいものの助"
          class="sp-only"
        />
      </figure>
      <h1>買い物に関する情報や自作アプリを<br />発信するブログサイト</h1>
    </div>
    <h2><i class="el-icon-mobile-phone"></i> アプリ</h2>
    <div class="app-container">
      <ul v-if="apps.length != 0">
        <li v-for="app in apps" :key="app.slug">
          <nuxt-link :to="`/${app.slug}/`">
            <div class="card_wrap">
              <div class="txt_content">
                <p class="title">{{ app.name }}</p>
                <div class="sp_img sp-only">
                  <img
                    :src="require(`../static/image/${app.img_sp}`)"
                    :alt="app.name"
                  />
                </div>
                <p>
                  {{ app.description }}
                </p>
              </div>
              <div class="img_content pc-only">
                <img
                  :src="require(`../static/image/${app.img_pc}`)"
                  :alt="app.name"
                />
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <h2><i class="el-icon-document"></i> 新着記事</h2>
    <div class="blogs-container">
      <article-list v-if="articles != 0" :articles="articles" />
      <p v-else>記事がありません。</p>
      <div class="btn_wrap">
        <nuxt-link class="more_btn" to="/new_post">もっと見る</nuxt-link>
      </div>
    </div>
    <h2><i class="el-icon-folder"></i> カテゴリー</h2>
    <div class="cat-container">
      <ul v-if="category != 0">
        <li v-for="cat in category" :key="cat.slug">
          <nuxt-link :to="`/category/${cat.slug}`">
            <span class="inner">
              <span :class="`${cat.slug} cat_img`"></span>
              {{ cat.text }}
            </span>
          </nuxt-link>
        </li>
      </ul>
      <p v-else>記事がありません。</p>
    </div>
    <h2><i class="el-icon-collection-tag"></i> タグ</h2>
    <div class="tag-container">
      <ul v-if="tags != 0">
        <li v-for="tag in tags" :key="tag.slug">
          <nuxt-link :to="`/tag/${tag.slug}`">
            {{ tag.text }}
          </nuxt-link>
        </li>
      </ul>
      <p v-else>記事がありません。</p>
    </div>
    <div class="top_profile">
      <div class="img_content">
        <figure>
          <img src="../static/image/profile.png" alt="mikiya" />
        </figure>
      </div>
      <div class="txt_content">
        <p class="name">mikiya</p>
        <p class="sns_icon">
          <a
            href="https://twitter.com/mikiya32131569"
            target="_blank"
            style="text-decoration: none"
          >
            <img
              src="../static/image/twitter.png"
              alt="twitter"
              style="max-width: 50px"
            /><br /><span class="text-small">Twitterはこちら</span>
          </a>
        </p>
        <p>
          千葉県在住のWebエンジニア。都内のWeb制作会社に勤務。<br />
          節約術やポイ活などに興味があり、いかに買い物を安く済ませるかを日々考えております。<br />
          趣味は映画鑑賞。
        </p>
        <div class="btn_wrap">
          <nuxt-link class="more_btn" to="/profile">もっと見る</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import taxonomy from "../taxonomy";
export default Vue.extend({
  layout: "default",
  name: 'IndexPage',
  head () {
    return {
      title: 'かいものの助 | 買い物に関する便利な情報やアプリをお届けするサイト',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '買い物に関する便利な情報や便利な自作アプリをお届けするサイトです。日常に欠かせない「買い物」に関する情報や、Webエンジニアとしての技術をたくさんの人に共有したいという思いでサイトを立ち上げました。このサイトが「買い物」の分野において、皆さんの役に立つことを願っています。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '買い物,ショッピング,情報,ブログ,Webアプリ,便利アプリ,お役立ち情報'
        },
        { hid: "og:title", property: "og:title", content: "かいものの助 | 買い物に関する便利な情報やアプリをお届けするサイト" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "買い物に関する便利な情報や便利な自作アプリをお届けするサイトです。日常に欠かせない「買い物」に関する情報や、Webエンジニアとしての技術をたくさんの人に共有したいという思いでサイトを立ち上げました。このサイトが「買い物」の分野において、皆さんの役に立つことを願っています。",
        }
      ],
    }
  },
  data () {
    return {
      category: [...taxonomy.category],
      tags: [...taxonomy.tags],
      apps: [...taxonomy.apps],
    }
  },
  async asyncData ({ $content }) {
    const articles = await $content("article")
      .sortBy('createdAt', 'desc')
      .limit(9)
      .fetch()
    return {
      articles
    }
  },
});
</script>

<style lang="scss" scoped>
.main_visual {
  position: relative;
  margin-bottom: 5%;
  figure {
    margin: 0;
    img {
      max-width: 100%;
    }
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
    color: #e58b00;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20%;
    margin: auto;
  }
  @media screen and (max-width: 815px) {
    h1 {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 10%;
    h1 {
      bottom: 34%;
    }
  }
  @media screen and (max-width: 540px) {
    h1 {
      font-size: 14px;
    }
  }
}
.top-container {
  h2 {
    font-size: 28px;
    padding-bottom: 0;
    border: none;
    margin-bottom: 0.6em;
    .el-icon-mobile-phone,
    .el-icon-document,
    .el-icon-folder,
    .el-icon-collection-tag {
      color: #ffa500;
    }
  }
}
.blogs-container {
  margin-bottom: 5%;
  .btn_wrap {
    text-align: right;
    .more_btn {
      margin-top: 2%;
      display: inline-block;
      text-align: right;
      padding-right: 28px;
      position: relative;
      font-size: 13px;
      text-decoration: none;
      &:after {
        content: "";
        border-right: 1px solid #222;
        border-bottom: 1px solid #222;
        width: 18px;
        height: 4px;
        position: absolute;
        top: 50%;
        right: 5%;
        margin: auto;
        transform: translateY(-50%) skew(45deg);
      }
    }
  }
}
.app-container {
  margin-bottom: 5%;
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      list-style: none;
      width: 49%;
      margin-left: 2%;
      a {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 18px;
        font-weight: bold;
        background: #fff;
        -ms-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 1px 1px 4px 2px rgb(0 0 0 / 10%);
        border-left: 8px solid #ffa500;
        transition: 0.2s;
        text-decoration: none;
        padding: 5% 5% 5% calc(8px + 5%);
        &:hover {
          border-color: #ffd700;
        }
        .card_wrap {
          display: flex;
          .txt_content,
          .img_content {
            width: 49%;
          }
          .txt_content {
            font-size: 12px;
            .title {
              font-size: 18px;
              font-weight: bold;
              margin: 0 0 0.4em 0;
              @media screen and (max-width: 767px) {
                font-size: 16px;
                font-weight: 700;
              }
            }
          }
          .img_content {
            margin-left: 2%;
            border: 1px solid #ccc;
            img {
              max-width: 100%;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
      &:nth-child(2n + 1) {
        margin-left: 0;
      }
    }
  }
}
.cat-container {
  margin-bottom: 5%;
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      list-style: none;
      width: 32%;
      margin-left: 2%;
      margin-top: 2%;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 0;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: bold;
        background: #fff;
        -ms-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 1px 1px 4px 2px rgb(0 0 0 / 10%);
        transition: 0.2s;
        text-decoration: none;
        padding: 5px;
        .inner {
          display: block;
          padding: 6%;
          border: 1px solid #ffa500;
          text-align: center;
          transition: 0.2s;
          .cat_img {
            display: block;
            height: 0;
            padding-top: 30%;
            overflow: hidden;
            max-width: 130px;
            margin: 0 auto 4%;
            &.tool {
              background: url(../static/image/app.svg) no-repeat center/contain;
            }
            &.saving {
              background: url(../static/image/setsuyaku.svg) no-repeat
                center/contain;
            }
            &.column {
              background: url(../static/image/column.png) no-repeat
                center/contain;
              max-width: 60px;
            }
            &.report {
              background: url(../static/image/kaimono.png) no-repeat
                center/contain;
              max-width: 60px;
            }
          }
        }
        @media screen and (min-width: 768px) {
          &:hover {
            .inner {
              border-color: #ffd700;
            }
          }
          font-size: 16px;
          font-weight: 600;
        }
      }
      &:nth-child(3n + 1) {
        margin-left: 0;
      }
    }
  }
}
.tag-container {
  margin-bottom: 10%;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    li {
      list-style: none;
      display: inline-block;
      margin: 0 10px 10px 0;
      font-size: 15px;
      border: 1px solid #ffa500;
      color: #fff;
      border-radius: 4px;
      transition: 0.2s;
      a {
        text-decoration: none;
        padding: 0.2em 0.6em;
        display: block;
        &:before {
          content: "#";
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    ul {
      li {
        &:hover {
          background: #ffa500;
        }
      }
    }
  }
}
.top_profile {
  display: flex;
  align-items: center;
  .img_content {
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
  .txt_content {
    width: 64%;
    margin-left: 4%;
    .name {
      font-size: 24px;
      font-weight: bold;
    }
    .btn_wrap {
      text-align: right;
      .more_btn {
        margin-top: 2%;
        display: inline-block;
        text-align: right;
        padding-right: 28px;
        position: relative;
        font-size: 13px;
        text-decoration: none;
        &:after {
          content: "";
          border-right: 1px solid #222;
          border-bottom: 1px solid #222;
          width: 18px;
          height: 4px;
          position: absolute;
          top: 50%;
          right: 5%;
          margin: auto;
          transform: translateY(-50%) skew(45deg);
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .top-container {
    h2 {
      font-size: 20px !important;
      padding-bottom: 0;
      border: none;
    }
  }
  .blogs-container {
    margin-bottom: 10%;
    .btn_wrap {
      .more_btn {
        margin-top: 4%;
      }
    }
  }
  .app-container {
    margin-bottom: 10%;
    ul {
      display: block;
      li {
        width: 100%;
        margin-left: 0 !important;
        &:not(:last-child) {
          margin-bottom: 4%;
        }
        a {
          padding: 3% 3% 3% calc(8px + 3%);
          .card_wrap {
            display: block !important;
            .img_content,
            .txt_content {
              width: 100% !important;
              margin-left: 0 !important;
            }
            .sp_img {
              position: relative;
              height: 0;
              padding-top: 73%;
              border: 1px solid #ccc;
              margin-bottom: 5%;
              img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: auto;
                margin: auto;
                object-fit: cover;
                width: 100%;
                height: 100%;
              }
              + p {
                font-weight: normal;
              }
            }
          }
        }
      }
    }
  }
  .cat-container {
    margin-bottom: 10%;
    ul {
      li {
        width: 49%;
        margin-top: 0 !important;
        margin-left: 2%;
        &:nth-child(3n + 1) {
          margin-left: 2%;
        }
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        &:not(:last-child) {
          margin-bottom: 4%;
        }
        a {
          padding: 5px;
          height: auto;
          font-size: 15px;
          .inner {
            .cat_img {
              margin: 0 auto 8%;
              padding-top: 45%;
              &.saving {
                max-width: 100px;
              }
              &.column {
                max-width: 40px;
              }
              &.report {
                max-width: 50px;
              }
            }
          }
        }
      }
    }
  }
  .tag-container {
    margin-bottom: 15%;
    ul {
      li {
        margin-right: 15px;
        font-size: 15px;
      }
    }
  }
  .top_profile {
    display: block;
    .img_content {
      width: 70%;
      margin: 0 auto;
    }
    .txt_content {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
