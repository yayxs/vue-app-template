<template>
  <div class="home-category">
    <div ref="scroll" class="bs-wrapper">
      <div class="bs-content">
        <!-- <div v-for=""></div> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeCategory',
    props: {
      cateList: {
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
  }
</script>

<style lang="scss" scoped>
  .home-category {
    padding: 24px 0;
    background-color: #fff;
    .bs-wrapper {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
    }
  }
</style>
