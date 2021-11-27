<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'vant'
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <Button title="123" />
</template>

<style scoped></style>
