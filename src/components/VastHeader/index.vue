<template>
  <div class="vast-header"><slot /></div>
</template>

<script>
  export default {
    name: 'VastHeader',
    data() {
      return {}
    },
    mounted() {},
    methods: {},
  }
</script>
<style scoped lang="scss">
  .vast-header {
    font-size: 18px;
    color: #3a3a3a;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
  }
</style>
