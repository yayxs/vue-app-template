<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import axios from 'axios'
  import { Random } from 'mockjs'
  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
    mounted() {
      axios('/user/userinfo').then((res) => {
        console.log(res)
        console.log(this.handleRandomImage())
      })
    },
    methods: {
      handleRandomImage(width = 200, height = 200) {
        return `https://picsum.photos/${width}/${height}?random=${Random.guid()}`
      },
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
