<template>
  <div class="index-page">
    <v-header></v-header>
    <main>
      <section class="sec sec01">
        <no-ssr>
          <swiper class="banner-swiper" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in bannerList" class="swiper-item">
              <!-- <nuxt-link class="swiper-item-inner" :to="item.link" :title="item.name" :style="'background-image: url(' + item.img + ');'"></nuxt-link> -->
              <a class="swiper-item-inner" :href="item.link" :title="item.name" :style="'background-image: url(' + item.img + ');'"></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </no-ssr>
        <div class="arrow-down" @click.stop="slideDown"><img class="arrow-icon" src="@/assets/images/index/arrow.png" alt="" /></div>
      </section>
      <section class="sec sec02">
        <h2 class="sec-title">一站式数字化解决方案服务商</h2>
        <div class="sec02-main">
          <p class="sec02-desc">广州名锐讯动信息科技有限公司（MRT）专注于企业互联网+解决方案，为企业提供咨询调研 、战略部署 、定制开发 、运营支持 、规划指导等一体化服务。</p>
          <ul class="type-list flex flex-wrap" v-if="typeList.length > 0">
            <li class="type-item" v-for="(item, index) in typeList">
              <img class="item-icon" :src="item.iconPath" alt="" />
              <p class="item-txt">{{ item.txt }}</p>
            </li>
          </ul>
        </div>
      </section>
      <section class="sec sec03">
        <h2 class="sec-title">量身定制解决方案，为企业带来持续的商业价值</h2>
        <div class="sec03-main">
          <div class="main-top flex flex-ver flex-align-center">
            <div class="img-left"><img class="img" src="@/assets/images/index/img01.png" alt="" /></div>
            <div class="img-right"><img class="img" src="@/assets/images/index/img.png" alt="" /></div>
          </div>
          <ul class="main-bottom case-list flex flex-jcsb" v-if="caseList.length > 0">
            <li v-for="(item, index) in caseList" class="case-item flex flex-center">{{ item.txt }}</li>
          </ul>
        </div>
      </section>
      <section class="sec sec04">
        <h2 class="sec-title">我们已为他们提供优质互联网+服务</h2>
        <ul v-if="serviceList.length > 0" class="service-list flex flex-wrap">
          <li v-for="(item, index) in serviceList" class="service-item" :style="'background-image: url(' + item.iconPath + ');'"></li>
        </ul>
      </section>
      <section class="sec sec05">
        <h2 class="sec-title">最新资讯</h2>
        <no-ssr>
          <swiper class="news-list" :options="subSwiperOption" ref="mySubSwiper">
            <swiper-slide v-for="item in newsList" class="news-item">
              <h2 class="item-tit">{{ item.title }}</h2>
              <img class="item-img" :src="item.imgPath" alt="" />
              <p class="item-desc">{{ item.desc }}</p>
              <div class="item-bottom flex flex-ver flex-jcsb">
                <p class="item-date">{{ item.date | dateformat('YYYY-MM-DD') }}</p>
                <nuxt-link to="/" class="item-btn-more">查看更多</nuxt-link>
              </div>
            </swiper-slide>
          </swiper>
        </no-ssr>
        <nuxt-link to="/" tag="button" class="view-more">查看更多</nuxt-link>
      </section>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import URL from '@/plugins/url.js';
export default {
  // default模板
  // layout: function(context) {
  //   return 'default-demo';
  // },
  // 参数校验（失败直接跳转至404页面）
  // validate({ params, route }) {
  //   // 必须是number类型
  //   return /^\d+$/.test(params.id);
  // },
  components: {
    vHeader(resolve) {
      require(['@/components/vHeader'], resolve);
    },
    vFooter(resolve) {
      require(['@/components/vFooter'], resolve);
    }
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
  async asyncData({ store, params, route, app }) {
    let [res01, res02] = await Promise.all([
      app.$axios.get(URL.getSEOInfo, {
        params: {
          type: 'custom',
          client: 1,
          module_id: 1
        }
      }),
      app.$axios.get(URL.getIndexBannerList)
    ]).catch(() => {
      console.log(err);
    });
    return {
      SEOInfo: res01.data,
      bannerList: res02.data
    };
  },
  created() {},
  mounted() {},
  data() {
    return {
      SEOInfo: {},
      bannerList: [],
      swiperOption: {
        loop: true,
        speed: 1000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // simulateTouch: false,
        autoplayDisableOnInteraction: true,
        onInit: function(swiper) {
          // swiper.slideTo(1);
        },
        onTransitionEnd: function(swiper) {
          // console.log(swiper.realIndex);
        }
      },
      subSwiperOption: {
        loop: false,
        speed: 1000,
        autoplay: false,
        slidesPerView: 4
      },
      // sec02 业务范畴
      typeList: [
        {
          iconPath: require('@/assets/images/index/icon01.png'),
          txt: '网站建设'
        },
        {
          iconPath: require('@/assets/images/index/icon02.png'),
          txt: '微信开发'
        },
        {
          iconPath: require('@/assets/images/index/icon03.png'),
          txt: '小程序开发'
        },
        {
          iconPath: require('@/assets/images/index/icon04.png'),
          txt: '定制商城'
        },
        {
          iconPath: require('@/assets/images/index/icon05.png'),
          txt: 'APP开发'
        },
        {
          iconPath: require('@/assets/images/index/icon06.png'),
          txt: '定制系统'
        },
        {
          iconPath: require('@/assets/images/index/icon07.png'),
          txt: '物联网Iot'
        },
        {
          iconPath: require('@/assets/images/index/icon08.png'),
          txt: '区块链'
        }
      ],
      // sec03 相关案例
      caseList: [
        {
          link: '/',
          txt: 'INSIDE LVMH'
        },
        {
          link: '/',
          txt: '轩尼诗美食之旅'
        },
        {
          link: '/',
          txt: '南方电网'
        },
        {
          link: '/',
          txt: '哈罗国际教育'
        },
        {
          link: '/',
          txt: '携旅 | 丽枫'
        },
        {
          link: '/',
          txt: '中山医科大学眼科'
        },
        {
          link: '/',
          txt: '更多案例'
        }
      ],
      // sec04 提供服务
      serviceList: [
        {
          iconPath: require('@/assets/images/index/img03.png'),
          txt: ''
        },
        {
          iconPath: require('@/assets/images/index/img03.png'),
          txt: ''
        },
        {
          iconPath: require('@/assets/images/index/img03.png'),
          txt: ''
        },
        {
          iconPath: require('@/assets/images/index/img03.png'),
          txt: ''
        }
      ],
      // sec05最新资讯
      newsList: [
        {
          title: '荣获了猪八戒华南地区的“技术开发行业之星”',
          imgPath: require('@/assets/images/index/new_img01.jpg'),
          desc: '粤港澳大湾区“互联网+”中小企业创新服务高峰论坛暨2018年度猪八戒网华南大区颁奖典礼在广州市东方宾馆隆重举行…',
          date: '2018-06-12',
          link: ''
        },
        {
          title: '轩尼诗携手陈晓卿、宋茜、张亮玩味“食”验室',
          imgPath: require('@/assets/images/index/new_img02.jpg'),
          desc: '法国知名干邑品牌轩尼诗邀请陈晓卿、张亮及宋茜共同上演轩尼诗【食】验室，用三支关于美食的视频，带你重新发现中国味。',
          date: '2018-06-12',
          link: ''
        },
        {
          title: '名锐讯动参与“益路有你-爱在龙胜公益活动“…',
          imgPath: require('@/assets/images/index/new_img03.jpg'),
          desc: '广西自治区龙胜县西部计划志愿者携手广东元创星影视文化传媒有限公司“益路有你——爱在龙胜公益行”团队来到龙胜县江底乡。',
          date: '2018-06-12',
          link: ''
        },
        {
          title: '名锐讯动公司入驻中大大学科技园',
          imgPath: require('@/assets/images/index/new_img04.jpg'),
          desc: '中山大学国家大学科技园是依托中山大学的科技、人才等资源优势和学科 特点，面向社会，开放办园，以产权为纽带，以市场…',
          date: '2018-06-12',
          link: ''
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    subSwiper() {
      return this.$refs.mySubSwiper.swiper;
    }
  },
  methods: {
    slideDown(e, speed = 100) {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let height = clientHeight - scrollTop;
      if (height <= 0) {
        return false;
      }
      let count = 0; //计数
      let time = 1000 / speed; //执行时间
      let distance = Math.ceil(height / time); //每次滚动距离
      let timer = setInterval(() => {
        count++;
        window.scrollBy(0, distance);
        count == time && clearInterval(timer);
      }, time);
    }
  }
};
</script>

<style lang="less"></style>
