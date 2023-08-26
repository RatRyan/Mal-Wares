<template>
  <tr>
    <td>#{{ orderNumber }}</td>
    <td>{{ orderDate }}</td>
    <td>${{ orderTotal }}</td>
  </tr>
</template>

<script setup>
const props = defineProps({
  orderNumber: Number,
  orderDate: String,
  orderTotal: Number,
});
</script>
