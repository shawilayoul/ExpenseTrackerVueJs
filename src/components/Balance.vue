<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names

<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{total}}</h1>
</template>
<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  total: {
    type: Number,
    required: true
  }
})
</script>
