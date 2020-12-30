<template>
  <div ref="wrapper" class="scroll-wrapper">
    <slot></slot>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core'
  export default {
    name: 'VastScroll',
    props: {
      probeType: {
        type: Number,
        // 1 滚动的时候派发事件
        // 2 实时派发滚动事件
        // 3 轮播的情况派发事件
        default: 1,
      },
      // 点击列表派发事件
      click: {
        type: Boolean,
        default: true,
      },
      // 是否开启横向滚动
      scrollX: {
        type: Boolean,
        default: false,
      },
      // 是否派发滚动事件
      listenScroll: {
        type: Boolean,
        default: false,
      },
      // 列表的数据
      scrollListData: {
        type: Array,
        default: null,
      },
      // 触底事件
      pullup: {
        type: Boolean,
        default: false,
      },
      // 下拉的事件
      pulldown: {
        type: Boolean,
        default: false,
      },
      // 列表滚动开始
      beforeScroll: {
        type: Boolean,
        default: false,
      },
      // 当数据更新后，刷新scroll的延时
      refreshDelay: {
        type: Number,
        default: 20,
      },
    },
    data() {
      return {
        timerId: null,
      }
    },
    mounted() {
      this.timerId = setTimeout(() => {
        this.initBScroll()
      }, 20)
    },
    beforeDestroy() {
      if (this.timerId) {
        clearTimeout(this.timerId)
      }
    },
    methods: {
      initBScroll() {
        // dom节点不能存在直接return
        if (!this.$refs.wrapper) {
          return
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .scroll-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
