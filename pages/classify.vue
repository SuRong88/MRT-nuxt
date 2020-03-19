<template>
  <div class="classify-page">
    <h1>文章分类</h1>
    <ul>
      <li v-for="(item, index) in typeList" :key="item.id">序号:{{ index + 1 }} --- id:{{ item.id }} ---- 分类名称:{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import URL from '@/plugins/url.js';
export default {
  async asyncData({ route, app }) {
    let [res01] = await Promise.all([
      app.$axios.get(URL.getArticleType, {
        params: {
          id: 22
        }
      })
    ]).catch((err) => {
      console.log(err);
    });
    console.log(res01);
    return {
      typeList: res01.data
    };
  },
  created() {},
  data() {
    let that = this;
    return {
      SEOInfo: {},
      typeList: []
    };
  },
  methods: {}
};
</script>

<style scoped>
  h1{
    color: #000;
    font-size: 40px;
  }
  li{
    color: #000;
    font-size: 30px;
  }
</style>
