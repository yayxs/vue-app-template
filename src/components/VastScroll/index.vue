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
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      },
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
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX,
        })
        // 是否派发滚动事件
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            // 滚动到底部
            if (this.scroll.y <= this.scroll.maxScrollY + 50) {
              this.$emit('scrollToEnd')
            }
          })
        }
        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pulldown) {
          this.scroll.on('touchend', (pos) => {
            // 下拉动作
            if (pos.y > 50) {
              this.$emit('pulldown')
            }
          })
        }
        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable()
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable()
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
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
