<template>
  <div class="c-pagination-wrap">
    <ul class="c-pagination">
      <li v-if="current > 1" class="c-pagination-btn c-pagination-prev">
        <nuxt-link :to="getPath(current - 1)" class="c-pagination-btn__link"
          ><i class="el-icon-back"></i
        ></nuxt-link>
      </li>
      <li v-if="3 < current" class="c-pagination-item">
        <nuxt-link :to="getPath(1)" class="c-pagination-item__link"
          >1</nuxt-link
        >
      </li>
      <li v-if="4 < current" class="c-pagination-omit">
        <span>...</span>
      </li>
      <li
        v-for="p in pages"
        :key="p"
        v-show="current - 2 <= p && p <= current + 2"
        class="c-pagination-item"
        :class="{ active: current === p }"
      >
        <nuxt-link :to="getPath(p)" class="c-pagination-item__link">{{
          p
        }}</nuxt-link>
      </li>
      <li v-if="current + 3 < pages" class="c-pagination-omit">
        <span>...</span>
      </li>
      <li v-if="current + 2 < pages" class="c-pagination-item">
        <nuxt-link :to="getPath(pages)" class="c-pagination-item__link">{{
          pages
        }}</nuxt-link>
      </li>
      <li v-if="current < pages" class="c-pagination-btn c-pagination-next">
        <nuxt-link :to="getPath(current + 1)" class="c-pagination-btn__link"
          ><i class="el-icon-right"></i
        ></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: false,
    },
    current: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      required: false,
    },
  },
  data () {
    return {
      p: "",
    }
  },
  methods: {
    getPath (p) {
      if (this.category !== undefined) {
        if (p === 1) {
          return `/category/${this.category}/`;
        } else {
          return `/category/${this.category}/page/${p}/`;
        }
      } else if (this.tag !== undefined) {
        if (p === 1) {
          return `/tag/${this.tag}/`;
        } else {
          return `/tag/${this.tag}/page/${p}/`;
        }
      } else {
        if (p === 1) {
          return `/new_post/`;
        } else {
          return `/new_post/page/${p}/`;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.c-pagination-wrap {
  .c-pagination {
    padding: 0;
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      margin: 0 0.5em;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    }
    .c-pagination-item {
      width: 35px;
      height: 35px;
      border-radius: 100%;
      border: 1px solid #ffa500;
      a {
        border-radius: 100%;
        line-height: normal;
        padding-top: 2px;
        background: transparent;
        transition: 0.2s;
        &:hover {
          background: #ffa500;
        }
      }
      &.active {
        a {
          pointer-events: none;
          background: #ffa500;
        }
      }
    }
  }
  .c-pagination-next,
  .c-pagination-prev {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) {
    .c-pagination {
      li {
        margin: 0 0.4em;
      }
      .c-pagination-item {
        width: 30px;
        height: 30px;
        a {
          padding-top: 0;
        }
      }
    }
  }
}
</style>
