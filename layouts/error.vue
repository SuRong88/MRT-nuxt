<template>
  <div class="error-page">
    <v-header></v-header>
    <div class="expression">o(╥﹏╥)o</div>
    <div class="error_text">404</div>
    <div class="text">页面找不到了</div>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  components: {
    vHeader(resolve) {
      require(['@/components/vHeader'], resolve);
    },
    vFooter(resolve) {
      require(['@/components/vFooter'], resolve);
    }
  }
};
</script>

<style scoped lang="less">
.error-page {
  height: 100vh;
  color: #000;
  text-align: center;
  padding-top: 120px;
  position: relative;
  .expression {
    font-size: 60px;
  }
  .error_text {
    font-size: 60px;
    margin: 50px auto;
  }
  .text {
    font-size: 40px;
  }
  .v-footer {
    width: 100%;
    text-align: left;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>
