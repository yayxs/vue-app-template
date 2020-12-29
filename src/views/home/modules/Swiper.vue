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
  export default {
    name: 'HomeSwiper',
    props: {
      banner: {
        type: Array,
        default() {
          return []
        },
      },
    },
    data() {
      return {}
    },
    mounted() {},
    methods: {
      handleOnNavigateDetail() {
        console.log('点击了跳转')
      },
    },
  }
</script>
