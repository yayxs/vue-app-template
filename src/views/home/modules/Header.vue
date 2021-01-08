<template>
  <header class="home-header" :class="{ active: headerActive }">
    <!-- <div class="header-search">
      <svg-icon class="search-icon" icon-class="search"></svg-icon>
      <router-link tag="span" class="search-title" to="./search">
        推荐搜索 关键词
      </router-link>
    </div>
    <svg-icon
      class="customer-service-icon"
      icon-class="customer-service"
    ></svg-icon> -->
  </header>
</template>

<script>
  export default {
    name: 'HomeHeader',
    data() {
      return {
        headerActive: false,
      }
    },
    mounted() {},
    methods: {},
  }
</script>
<style scoped lang="scss"></style>
