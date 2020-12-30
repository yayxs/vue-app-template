<template>
  <div class="classify-page">
    <vast-header>商品分类</vast-header>
    <section ref="classifyRef" class="classify-wrap">
      <vast-scroll :scroll-data="categoryData" class="nav-side-warpper">
        <ul class="nav-side">
          <li
            v-for="(item, index) in categoryData"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="selectMenu(index)"
          >
            <span>{{ item.name.slice(0, 2) }}</span>
            <span>{{ item.name.slice(2) }}</span>
          </li>
        </ul>
      </vast-scroll>
      <vast-scroll class="main-content-warpper" :scroll-data="categoryData">
        <div class="swiper-container">
          <template v-for="(item, index) in categoryData">
            <div
              v-if="currentIndex === index"
              :key="index"
              class="swiper-slide"
            >
              <vast-image
                v-if="item.imgUrl"
                class="category-main-img"
                :src="item.imgUrl"
              ></vast-image>
              <div v-for="(products, index) in item.list" :key="index">
                <p class="goods-title">{{ products.title }}</p>
                <div class="category-list">
                  <div
                    v-for="(product, index) in products.productList"
                    :key="index"
                    class="product-item"
                  >
                    <img class="item-img" :src="product.imgUrl" />
                    <p class="product-title">{{ product.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
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
        categoryData: [],
      }
    },
    mounted() {
      this.categoryData = require('../../../mock/json/classify.json').categoryData
    },
    methods: {
      selectMenu(index) {
        this.currentIndex = index
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
      .main-content-warpper {
        width: 80%;
        height: 100%;
        padding: 0 16px;
        background-color: #fff;
        padding-bottom: 30px;
        @include bb;
        .swiper-container{
          width: 100%;
          .swiper-slide{
            width: 100%;
            padding-top: 20px;
            .goods-title{
              font-size: 14px;
            }
          }
      }
    }
  }
</style>
