<template>
  <div class="box-container">
    <header></header>
    <main>
      <section>
        <ul ref="tabs" :style="`--tab-count: ${list.length}`">
          <li v-for="v in list" :key="v" :style="`--bg-color: ${v}`">
            <keep-alive v-if="$route.meta.keepAlive">
              <router-view></router-view>
            </keep-alive>
            <router-view v-else></router-view>
          </li>
        </ul>
      </section>
    </main>
    <footer>
      <nav>
        <a v-for="(v, i) in list" :key="v" :class="{ active: index === i }" @click="select(i)"
          >Tab{{ i + 1 }}</a
        >
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
  data() {
    return {
      index: 0,
      list: ['#f66', '#66f', '#f90', '#09f']
    }
  },
  mounted() {},
  methods: {
    select(i) {
      this.index = i
      this.$refs.tabs.style.setProperty('--tab-index', i)
    }
  }
}
</script>
<style scoped lang="scss">
.box-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  header,
  footer,
  main {
    position: absolute;
    left: 0;
    right: 0;
  }
  header {
    top: 0;
    height: 50px;
    background-color: #ccc;
  }
  footer {
    bottom: 0;
    height: 40px;
    background-color: #f0f0f0;
    nav {
      display: flex;
      height: 40px;
      line-height: 40px;
      text-align: center;
      a {
        flex: 1;
        cursor: pointer;
        transition: all 300ms;
        &.active {
          background-color: #3c9;
          color: #fff;
        }
      }
    }
  }
  main {
    top: 50px;
    bottom: 50px;
    background-color: #fff;
    section {
      height: 100%;
      ul {
        --tab-index: 0;
        --tab-width: calc(var(--tab-count) * 100%);
        --tab-move: calc(var(--tab-index) / var(--tab-count) * -100%);
        display: flex;
        flex-wrap: nowrap;
        width: var(--tab-width);
        height: 100%;
        transform: translate3d(var(--tab-move), 0, 0);
        transition: all 300ms;
        li {
          @include flexbox(center, center);
          background-color: var(--bg-color);
          font-weight: bold;
          font-size: 20px;
          color: #fff;
        }
      }
    }
  }
}
</style>
