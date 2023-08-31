<template>
  <div class="d-flex flex-column vh=100">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useProductsStore } from './stores/ProductsStore';

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.loadProducts();
});
</script>