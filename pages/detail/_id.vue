<template>
  <div class="detail-page">
    <h1>文章详情{{ articleDetail.id }}</h1>
    <div class="detail-box">
      <h2 class="detail-tit">标题：{{ articleDetail.name }}</h2>
      <p>时间：{{ articleDetail.create_time }}</p>
      详情富文本：
      <div class="detail-txt edit_textBox" v-html="articleDetail.body"></div>
    </div>
    <dl>
      <dt></dt>
      <dd></dd>
    </dl>
  </div>
</template>

<script>
import URL from '@/plugins/url.js';
export default {
  // 参数校验（失败直接跳转至404页面）
  validate({ params, route }) {
    return /^\d+$/.test(params.id); // 必须是number类型
  },
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
  async asyncData({ params, route, app }) {
    let [res01, res02] = await Promise.all([
      app.$axios.get(URL.getSEOInfo, {
        params: {
          type: 'article_info',
          client: 1,
          module_id: params.id
        }
      }),
      app.$axios.get(URL.getArticleDetail, {
        params: {
          id: params.id
        }
      })
    ]).catch(err => {
      console.log(err);
    });
    return {
      SEOInfo: res01.data,
      articleDetail: res02.data
    };
  },
  created() {},
  data() {
    let that = this;
    return {
      SEOInfo: {},
      articleDetail: null
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
.detail-tit{
  color: #000;
  font-size: 30px;
}
.detail-box {
  color: #000;
  font-size: 30px;
}
</style>
