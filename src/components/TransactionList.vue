<!-- eslint-disable no-unused-vars -->
<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount > 0 ? 'plus' : 'minus'"
    >
      {{ transaction.text }} <span>{{ transaction.amount }}</span
      ><button class="delete-btn" @click="deleteTrans(transaction.id)">x</button>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'

const emit = defineEmits(['handelDelet'])

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})

const deleteTrans =(id)=>{
emit('handelDelet', id)
}
</script>
