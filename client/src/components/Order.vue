<template>
  <tr>
    <td>#{{ number }}</td>
    <td>{{ date }}</td>
    <td>${{ total }}</td>
  </tr>
</template>

<script setup>
const props = defineProps({
  number: Number,
  date: String,
  total: Number,
});
</script>
