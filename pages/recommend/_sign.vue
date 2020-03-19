<template>
  <div class="list-page">
    <h1>文章推荐列表</h1>
    <ul v-if="list.length > 0">
      <li v-for="(item, index) in list" :key="item.id">
        序号:{{ index + 1 }} --- id:{{ item.id }} ---- 文章标题:{{ item.name }} ----
        <nuxt-link target="_blank" :to="'/detail/' + item.id">查看详情</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import URL from '@/plugins/url.js';
export default {
  async asyncData({ route, params, query, app }) {
    let [res02] = await Promise.all([
      app.$axios.get(URL.getArticleRecommend, {
        params: {
          recommend_sign: params.sign,
          client: 1,
          page: query.page,
          rownum: 8
        }
      })
    ]).catch(err => {
      console.log(err);
    });
    let list = res02.data.list;
    let pagination = res02.data.pagination;
    return {
      list: list,
      limit: pagination.rownum * 1,
      current_page: pagination.current * 1,
      total_page: pagination.total_page * 1
    };
  },
  created() {},
  data() {
    let that = this;
    return {
      list: [],
      limit: 8,
      current_page: 1,
      total_page: 2
    };
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  color: #000;
  font-size: 40px;
}
li {
  color: #000;
  font-size: 30px;
}
</style>
