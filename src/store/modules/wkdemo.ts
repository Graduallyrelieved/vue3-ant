import { defineStore } from 'pinia';

export const demoData = defineStore({
  id: 'mydemoData',
  state: () => {
    return {
      status: false,
      name: '小猪课堂',
    };
  },
  getters: {
    getAddstatus: (state) => {
      return state.status;
    },
  },
  actions: {},
});
