<template>
  <div class="basic-layout-container">
    <section class="main-container">
      <template v-if="$route.meta.keepAlive">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
    </section>
    <section class="footer-container"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
