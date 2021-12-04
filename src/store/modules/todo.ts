import axios from 'axios';
import { defineStore } from 'pinia';

import { store } from '/@/store';
interface ToDoState {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}
export const useToDoStore = defineStore({
  id: 'app-todo',
  state: (): ToDoState => ({
    userId: -1,
    title: '',
    id: -1,
    completed: false,
  }),
  // getters: {
  //   getCompleted,
  // },
  actions: {
    async getTo(id: number) {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      console.log(res);
    },
  },
});

export function useToDoStoreWithOut() {
  return useToDoStore(store);
}
