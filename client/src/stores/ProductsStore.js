import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('products', {
  state: () => ({
    products: [],
  }),
  actions: {
    async loadProducts() {
        
    }
  },
});
