import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),
  actions: {
    async loadProducts() {
      if (this.products.length === 0) {
        const res = await axios.get('http://localhost:3000/product');
        this.products = res.data
      }
    },
  },
});
