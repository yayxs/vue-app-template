<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="needKeepAlive" :key="key" />
    </keep-alive>
    <router-view v-if="!needKeepAlive" :key="key" />
    <vast-tab-bar v-if="needShowTab" />
  </div>
</template>
<script>
  export default {
    name: 'App',
    computed: {
      key() {
        return this.$route.fullPath
      },
      needKeepAlive() {
        return this.$route.meta.keepAlive
      },
      needShowTab() {
        return this.$route.meta.showTab
      },
    },
  }
</script>
