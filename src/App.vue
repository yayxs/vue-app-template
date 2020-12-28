<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name: 'App',
  }
</script>
<style lang="scss">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #efeff4;
    -webkit-overflow-scrolling: touch;
  }
</style>
