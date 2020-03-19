<template>
  <footer class="v-footer">
    <div class="wrapper">
      <div class="footer-main flex">
        <div class="main-left">
          <nuxt-link :style="'background-image: url(' + webInfo.website_logo_bottom + ');'" to="/" class="ft-logo">{{ webInfo.website_name }}</nuxt-link>
        </div>
        <div class="main-center flex">
          <ol class="service-list">
            <nuxt-link tag="li" to="/" class="service-item">主营业务</nuxt-link>
            <nuxt-link tag="li" to="/" class="service-item">解决方案</nuxt-link>
            <nuxt-link tag="li" to="/" class="service-item">精选案例</nuxt-link>
          </ol>
          <ol class="service-list">
            <nuxt-link tag="li" to="/" class="service-item">关于MRT</nuxt-link>
            <nuxt-link tag="li" to="/" class="service-item">360°服务</nuxt-link>
            <nuxt-link tag="li" to="/" class="service-item">加入我们</nuxt-link>
          </ol>
          <ol class="service-list">
            <nuxt-link tag="li" to="/" class="service-item">网站地图</nuxt-link>
            <nuxt-link tag="li" to="/" class="service-item">友情链接</nuxt-link>
          </ol>
        </div>
        <div class="main-right">
          <ol class="contact-list">
            <li class="contact-item">
              <img class="item-icon" src="@/assets/images/index/footer_icon01.png" alt="">
              {{webInfo.customer_service_phone}}
            </li>
            <li class="contact-item">
              <img class="item-icon" src="@/assets/images/index/footer_icon02.png" alt="">
              {{webInfo.website_email}}
            </li>
            <li class="contact-item mb12">
              <img class="item-icon" src="@/assets/images/index/footer_icon03.png" alt="">
              {{webInfo.website_address}}
            </li>
            <li class="contact-item">
              <span style="display: inline-block;"  class="item-icon"></span>
              <img class="qrcode" src="@/assets/images/index/footer_wx.png" alt="">
            </li>
          </ol>
        </div>
      </div>
      <p class="copyright flex flex-jcsb">
        <span>{{webInfo.website_copyright}}</span>
        <span>{{webInfo.website_icp_numb}}</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name:'vFooter',
  computed: {
    webInfo() {
      return this.$store.state.webInfo;
    }
  }
};
</script>

<style lang="less">
.v-footer {
  background: #002d65;
  .footer-main {
    padding: 74px 0 50px;
    .main-left {
      width: 240px;
      flex-shrink: 0;
      .ft-logo {
        // background: url(../images/logo.png) no-repeat;
        // background-size: 100% 100%;
        background: center center/contain no-repeat;
        display: block;
        height: 30px;
        width: 150px;
        text-indent: -999px;
        overflow: hidden;
      }
    }
    .main-center {
      // width: calc(~"100%-600px");
      width: 600px;
      .service-list {
        margin-right: 76px;
        &:last-child {
          margin-right: 0;
        }
      }
      .service-item {
        font-size: 13px;
        color: #ffffff;
        margin-bottom: 24px;
        cursor: pointer;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .main-right {
      width: 360px;
      flex-shrink: 0;
      .contact-list {
      }
      .contact-item {
        font-size: 13px;
        color: #b7d1f1;
        margin-bottom: 27px;
        .item-icon{
          width: 16px;height: 16px;
          margin-right: 6px;
        }
        .qrcode{
          width: 28px;height: 28px;
          padding: 4px;
          border: 1px solid #003D88;
        }
        &.mb12{
          margin-bottom: 12px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .copyright {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 12px;
    color: #2b5a95;
    line-height: 50px;
  }
}
</style>
