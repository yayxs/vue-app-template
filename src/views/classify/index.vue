<template>
  <div class="classify-page">
    <vast-header>商品分类</vast-header>
    <section ref="classifyRef" class="classify-wrap">
      <vast-scroll :scroll-data="classifyData" class="nav-side-warpper">
        <ul class="nav-side">
          <li
            v-for="(item, index) in classifyData"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="selectMenu(index)"
          >
            <span>{{ item.label.slice(0, 2) }}</span>
            <span>{{ item.label.slice(2) }}</span>
          </li>
        </ul>
      </vast-scroll>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Classify',
    data() {
      return {
        currentIndex: 0, // 默认选中第一个
        classifyData: [
          {
            label: '热门推荐',
            active: true,
          },
          {
            label: '手机数码',
            active: false,
          },
          {
            label: '电脑办公',
            active: false,
          },
          {
            label: '计生情趣',
            active: false,
          },
          {
            label: '美妆护肤',
            active: false,
          },

          {
            label: '个人清洁',
            active: false,
          },
          {
            label: '汽车生活',
            active: false,
          },
          {
            label: '男装',
            active: false,
          },
          {
            label: '女装',
            active: false,
          },
          {
            label: '超市',
            active: false,
          },
          {
            label: '户外运动',
            active: false,
          },
          {
            label: '男装',
            active: false,
          },
          {
            label: '女装',
            active: false,
          },
          {
            label: '超市',
            active: false,
          },
          {
            label: '户外运动',
            active: false,
          },
          {
            label: '其他',
            active: false,
          },
        ], // 分类的数据
      }
    },
    mounted() {},
    methods: {
      selectMenu() {
        console.log('选中左侧的一级分类')
      },
    },
  }
</script>
<style scoped lang="scss">
  @import '@/styles/mixin.scss';
  .classify-page {
    height: 100%;
    .classify-wrap {
      @include fj;
      width: 100%;
      background-color: #fff;
      .nav-side-warpper {
        width: 88px;
        height: 100%;
        overflow: hidden;
        .nav-side {
          width: 100%;
          background: #f8f8f8;
          @include bb;
          li {
            width: 100%;
            height: 77px;
            text-align: center;
            font-weight: 600;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #949497;
            flex-direction: column;
            &.active {
              color: #d8182d;
              border-left: 3px solid transparent;
              border-color: #d8182d;
              background: #fff;
            }
          }
        }
      }
    }
  }
</style>
