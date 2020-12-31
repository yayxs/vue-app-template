<template>
  <div>
    <van-image v-bind="$attrs" lazy-load style="display: block">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
      <!-- <template v-slot:error>加载失败</template> -->
    </van-image>
  </div>
</template>

<script>
  export default {
    name: 'VastImage',
    data() {
      return {}
    },
    mounted() {},
    methods: {},
  }
</script>
<style scoped lang="scss"></style>
