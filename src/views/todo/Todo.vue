<template>
  <div>
    <TodoItem />
  </div>
</template>

<script lang="ts" setup>
import { useToDoStoreWithOut } from '/@/store/modules/todo';
import { ref, onMounted } from 'vue';
import TodoItem from './TodoItem.vue';
const loading = ref(false);

const toDoStore = useToDoStoreWithOut();
onMounted(() => {
  fetchTodos();
});
async function fetchTodos() {
  try {
    loading.value = true;
    toDoStore.getTo(1);
  } catch (error) {
  } finally {
    loading.value = false;
  }
}
</script>
