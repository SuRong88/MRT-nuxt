<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
import URL from '~/plugins/url';
export default {
  components: {},

  head() {
    return {
      title: this.webInfo.website_name,
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: this.webInfo.website_icon
        }
      ]
    };
  },

  created() {
    this.$axios.get(URL.getWebInfo).then(res => {
      this.$store.commit('SET_WEBINFO', res.data.info);
      // console.log('服务端');
    });
  },

  computed: {
    webInfo(){
      return this.$store.state.webInfo
    }
  },

  methods: {}
};
</script>

<style></style>
