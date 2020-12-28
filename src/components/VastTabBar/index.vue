<template>
  <div class="vast-tabbar">
    <ul>
      <van-tabs v-model="active">
        <van-tab title="标签1">内容 1</van-tab>
        <van-tab title="标签2">内容 2</van-tab>
        <van-tab title="标签3">内容 3</van-tab>
        <van-tab title="标签4">内容 4</van-tab>
      </van-tabs>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'VastTabBar',
  data() {
    return {
      active: 0
    }
  }
}
</script>
