const host = '/api'; // 域名（地址公共部分）
const api = {
  getWebInfo: host + '/setting/', // 网站信息
  getNavList: host + '/setting/nav', // 网站导航
  getSEOInfo: host + '/setting/seo', // seo信息
  getArticleType: host + '/article/classify', // 文章分类
  getArticleList: host + '/article/', // 文章列表
  getArticleDetail: host + '/article/', // 文章详情
  getArticleRecommend: host + '/article/recommend' ,// 文章推荐
  
  getIndexBannerList:host + '/index/banner'//首页轮播
}

export default api
