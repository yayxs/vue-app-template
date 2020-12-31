<template>
  <div class="home-page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <vast-header></vast-header>
      <vast-swiper></vast-swiper>
    </van-pull-refresh>
  </div>
</template>

<script>
  import VastHeader from './modules/Header'
  import VastSwiper from './modules/Swiper'
  import { createNamespacedHelpers } from 'vuex'
  const { mapActions } = createNamespacedHelpers('home')
  export default {
    components: {
      VastHeader,
      VastSwiper,
    },
    data() {
      return {
        count: 0,
        isLoading: false,
      }
    },
    mounted() {
      this.getHomeBannerAction()
    },
    methods: {
      ...mapActions({
        getHomeBannerAction: 'getHomeBannerAction',
      }),
      onRefresh() {
        setTimeout(() => {
          Toast('刷新成功')
          this.isLoading = false
          this.count++
        }, 1000)
      },
    },
  }
</script>
<style scoped lang="scss">
  .home-page {
    height: 20px;
  }
</style>
