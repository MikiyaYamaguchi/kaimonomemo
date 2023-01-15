<template>
  <div class="container top-container">
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
            {{ cat.text }}
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
  </div>
</template>

<script>
import Vue from "vue";
import taxonomy from "../taxonomy";
export default Vue.extend({
  layout: "default",
  name: 'IndexPage',
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
        font-size: 18px;
        font-weight: bold;
        background: #fff;
        -ms-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 1px 1px 4px 2px rgb(0 0 0 / 10%);
        border-left: 8px solid #ffa500;
        transition: 0.2s;
        text-decoration: none;
        padding: 6% 6% 6% calc(8px + 6%);
        &:hover {
          border-color: #ffd700;
        }
        @media screen and (max-width: 767px) {
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
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    li {
      list-style: none;
      display: inline-block;
      margin-right: 30px;
      font-size: 18px;
      a {
        text-decoration: none;
        &:before {
          content: "#";
        }
        &:hover {
          text-decoration: underline;
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
      display: block;
      li {
        width: 100%;
        margin-left: 0 !important;
        margin-top: 0 !important;
        &:not(:last-child) {
          margin-bottom: 4%;
        }
        a {
          padding: 3% 3% 3% calc(8px + 3%);
        }
      }
    }
  }
  .tag-container {
    ul {
      li {
        margin-right: 15px;
        font-size: 15px;
      }
    }
  }
}
</style>
