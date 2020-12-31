<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in banner"
        :key="index"
        @click="handleOnNavigateDetail"
      >
        <vast-image width="100%" height="150" :src="item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapState } = createNamespacedHelpers('home')
  export default {
    name: 'HomeSwiper',
    data() {
      return {}
    },
    computed: {
      ...mapState({
        banner: (state) => state.bannerList,
      }),
    },
    mounted() {
      console.log(this.banner)
    },
    methods: {
      handleOnNavigateDetail() {
        console.log('点击了跳转')
      },
    },
  }
</script>
