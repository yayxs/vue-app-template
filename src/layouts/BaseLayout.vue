<template>
  <div class="app-container">
    <div class="layout-header">
      <HeaderNavBar />
    </div>
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import { tabbars } from 'config'
export default {
  name: 'AppBaseLayout',
  data() {
    return {}
  },
  computed: {
    tabbars() {
      return tabbars
    }
  },
  methods: {
    handleChange(v) {}
  }
}
</script>
