<template>
  <div class="list-page">
    <h1>文章列表</h1>
    <ul v-if="list.length > 0">
      <li v-for="(item, index) in list" :key="item.id">
        序号:{{ index + 1 }} --- id:{{ item.id }} ---- 文章标题:{{ item.name }} ----
        <nuxt-link target="_blank" :to="'/detail/' + item.id">查看详情</nuxt-link>
      </li>
    </ul>
    <!-- 分页器 -->
    <div class="flex flex-center">
      <el-pagination
        v-if="list.length"
        @current-change="handleCurrentChange"
        class="pagination"
        background
        layout="prev, pager, next"
        :page-size="limit"
        :current-page="current_page"
        :page-count="total_page"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import URL from '@/plugins/url.js';
export default {
  watchQuery: true,
  head() {
    return {
      title: this.SEOInfo.seo_title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.SEOInfo.seo_keyword
        },
        {
          hid: 'description',
          name: 'description',
          content: this.SEOInfo.seo_desc
        }
      ]
    };
  },
  async asyncData({ route, params, query, app }) {
    console.log(query);
    let [res01, res02] = await Promise.all([
      app.$axios.get(URL.getSEOInfo, {
        params: {
          type: 'article_list',
          client: 1,
          module_id: params.type
        }
      }),
      app.$axios.get(URL.getArticleList, {
        params: {
          classify_id: params.type,
          client: 1,
          page: query.page,
          rownum: 1
        }
      })
    ]).catch(err => {
      console.log(err);
    });
    console.log(res02);
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
      SEOInfo: {},
      list: [],
      limit: 1,
      current_page: 1,
      total_page: 0
    };
  },
  methods: {
    handleCurrentChange(page) {
      let query = JSON.parse(JSON.stringify(this.$route.query));
      query.page = page;
      this.$router.push({
        query: query
      });
    }
  }
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
