<template>
  <div class="header-navbar">
    <van-nav-bar
      :title="navbarInfo.title"
      :left-text="navbarInfo.leftText"
      :right-text="navbarInfo.rightText"
      :left-arrow="navbarInfo.leftArrow"
      :fixed="navbarInfo.fixed"
      :safe-area-inset-top="navbarInfo.safeAreaInsetTop"
      @click-left="$emit('navbar-click', 'left')"
      @click-right="$emit('navbar-click', 'right')"
    />
  </div>
</template>

<script>
export default {
  name: 'HeaderNavBar',
  data() {
    return {
      navbarInfo: {
        title: `首页`,
        leftText: ``,
        leftArrow: false,
        rightText: '',
        border: true,
        fixed: true,
        safeAreaInsetTop: true
      }
    }
  },
  watch: {
    $route(to, from) {
      this.navbarInfo.title = to.meta.title
      this.navbarInfo.leftText = to.meta.isShowLeftText ? `返回` : ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
