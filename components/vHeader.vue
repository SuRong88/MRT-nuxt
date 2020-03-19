<template>
  <header class="v-header" :class="{ withBgc: showBgc }">
    <h1 class="logo-box">
      <nuxt-link :style="'background-image: url(' + webInfo.website_logo_top + ');'" :to="webInfo.website_domain || '/'" class="logo">{{ webInfo.website_name }}</nuxt-link>
    </h1>
    <ul class="nav-menu" v-if="navList.length > 0">
      <template v-for="(item, index) in navList">
        <!-- 无子级 -->
        <li v-if="!item.children || item.children.length == 0" class="nav-item" :key="index">{{ item.name }}</li>
        <!-- 有子级 -->
        <li v-else class="nav-item">
          {{ item.name }}
          <ul class="subnav">
            <li @click="navToggle" class="subnav-item" v-for="(subItem, subIndex) in item.children">{{ subItem.name }}</li>
          </ul>
        </li>
      </template>
      <li class="nav-item lang">
        {{ langArr[langIndex] }}
        <ul class="lang-menu">
          <li v-for="(item, index) in langArr" @click="langIndex = index" class="lang-item">{{ item }}</li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
import URL from '~/plugins/url';
export default {
  name: 'vHeader',
  props: {
    showBgc: Boolean
  },
  created() {
    let that = this;
    this.$axios.get(URL.getNavList, { client: 1 }).then(res => {
      this.navList = res.data.header;
    });
  },
  mounted() {
    console.log(this.$options);
  },
  computed: {
    webInfo() {
      return this.$store.state.webInfo;
    }
  },
  data() {
    return {
      navList: [],
      langIndex: 0,
      langArr: ['简体中文', 'English']
    };
  },
  methods:{
    navToggle(){
      console.log(233);
      this.$router.push({
        path:'/404'
      })
    }
  }
};
</script>

<style lang="less">
.v-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 22, 49, 0.8);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1200px;
  z-index: 10;
  .logo-box {
    .logo {
      width: 150px;
      height: 30px;
      background: center center/contain no-repeat;
      display: block;
      text-indent: -999px;
      overflow: hidden;
    }
  }
  .nav-menu {
    &::after {
      content: '';
      height: 0;
      clear: both;
      display: block;
      visibility: hidden;
    }
    .nav-item {
      float: left;
      margin-right: 60px;
      color: #fff;
      font-size: 14px;
      line-height: 40px;
      cursor: pointer;
      position: relative;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        .subnav {
          transform: scaleY(1) translateX(-50%);
          -webkit-transform: scaleY(1) translateX(-50%);
          -o-transform: scaleY(1) translateX(-50%);
          -moz-transform: scaleY(1) translateX(-50%);
        }
      }
      .subnav {
        position: absolute;
        top: ~'calc(100% + 10px)';
        left: 50%;
        z-index: 99;
        padding: 5px 15px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        white-space: nowrap;
        transition: all 0.2s;
        -o-transition: all 0.2s;
        -moz-transition: all 0.2s;
        -webkit-transition: all 0.2s;
        transform: scaleY(0) translateX(-50%);
        -webkit-transform: scaleY(0) translateX(-50%);
        -moz-transform: scaleY(0) translateX(-50%);
        -o-transform: scaleY(0) translateX(-50%);
        transform-origin: 50% 0;
        -moz-transform-origin: 50% 0;
        -o-transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
        border-radius: 0 0 3px 3px;
        -webkit-border-radius: 0 0 3px 3px;
        -moz-border-radius: 0 0 3px 3px;
        -ms-border-radius: 0 0 3px 3px;
        -o-border-radius: 0 0 3px 3px;
        .subnav-item {
          cursor: pointer;
          background: #fff;
          font-size: 14px;
          line-height: 40px;
          color: #444;
          text-align: center;
          border-bottom: 1px solid #cacaca;
          &:last-child {
            border-bottom: 0;
          }
        }
      }
      a {
        display: block;
        color: #fff;
        font-size: 14px;
        line-height: 40px;
      }
    }
    .lang {
      padding: 0 18px 0 22px;
      position: relative;
      cursor: pointer;
      &:hover {
        .lang-menu {
          transform: scaleY(1) translateX(-50%);
          -webkit-transform: scaleY(1) translateX(-50%);
          -o-transform: scaleY(1) translateX(-50%);
          -moz-transform: scaleY(1) translateX(-50%);
        }
      }
      &::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: url(../assets/images/index/header_img.png) center center / cover no-repeat;
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      &::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        position: absolute;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        border-top: 5px solid #fff;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }
    }
    .lang-menu {
      position: absolute;
      top: ~'calc(100% + 10px)';
      left: 50%;
      z-index: 99;
      padding: 5px 15px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      white-space: nowrap;
      transition: all 0.2s;
      -o-transition: all 0.2s;
      -moz-transition: all 0.2s;
      -webkit-transition: all 0.2s;
      transform: scaleY(0) translateX(-50%);
      -webkit-transform: scaleY(0) translateX(-50%);
      -moz-transform: scaleY(0) translateX(-50%);
      -o-transform: scaleY(0) translateX(-50%);
      transform-origin: 50% 0;
      -moz-transform-origin: 50% 0;
      -o-transform-origin: 50% 0;
      -webkit-transform-origin: 50% 0;
      border-radius: 0 0 3px 3px;
      -webkit-border-radius: 0 0 3px 3px;
      -moz-border-radius: 0 0 3px 3px;
      -ms-border-radius: 0 0 3px 3px;
      -o-border-radius: 0 0 3px 3px;
      .lang-item {
        cursor: pointer;
        background: #fff;
        font-size: 14px;
        line-height: 40px;
        color: #444;
        text-align: center;
        border-bottom: 1px solid #cacaca;
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>
