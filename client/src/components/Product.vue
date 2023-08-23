<template>
  <div class="card">
    <div class="card-body">{{ productName }}</div>
  </div>
</template>

<script setup>
const props = defineProps([
  'productName'
])
</script>