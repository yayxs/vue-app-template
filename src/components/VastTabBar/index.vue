<template>
  <div class="vast-tabbar">
    <ul>
      <van-tabbar
        v-model="active"
        route
        active-color="#FE4F70"
        inactive-color="#949497"
        style="z-index: 100"
        @change="handleTabBarChange"
      >
        <van-tabbar-item name="index" to="/index" icon="home-o">
          首页
        </van-tabbar-item>
        <van-tabbar-item name="classify">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
        <van-tabbar-item name="mine" to="/mine">
          <span>我的</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="
              props.active
                ? iconImgsList.icon_mine.default
                : iconImgsList.icon_mine.active
            "
            alt=""
          />
        </van-tabbar-item>
      </van-tabbar>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'VastTabBar',
    data() {
      return {
        active: 0, // 默认绑定选中标签的索引值
        iconImgsList: {
          icon_home: {
            default: require('@/assets/tabbar/home.png'),
            active: require('@/assets/tabbar/home_active.png'),
          },
          icon_classify: {
            default: require('@/assets/tabbar/classify.png'),
            active: require('@/assets/tabbar/classify_active.png'),
          },
          icon_cart: {
            default: require('@/assets/tabbar/cart.png'),
            active: require('@/assets/tabbar/cart_active.png'),
          },
          icon_mine: {
            default: require('@/assets/tabbar/mine.png'),
            active: require('@/assets/tabbar/mine_active.png'),
          },
        },
      }
    },
    methods: {
      handleTabBarChange() {},
    },
  }
</script>
<style lang="scss" scoped>
  .vast-tabbar {
    ul {
      height: 50px;
    }
  }
</style>
