<template>
  <Hearder />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList :transactions="transactions"  @handelDelet ="deleteTransaction"/>
    <AddTransaction @handelDataSubmited="handelSubmit" />
  </div>
</template>

<script setup>
import Hearder from './components/Hearder.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import { ref, computed, onMounted } from 'vue'
import { useToast } from 'vue-toastification'

const transactions = ref([])
const toast = useToast()

// getting data from the local storage

onMounted(() => {
  const saveData = JSON.parse(localStorage.getItem('transactions'))
  if (saveData) {
    transactions.value = saveData
  }
})

// get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
})

// get income
const income = computed(() => {
  return transactions.value
    .filter((trans) => trans.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2)
})
//get expense
const expenses = computed(() => {
  return transactions.value
    .filter((trans) => trans.amount < 0)
    .reduce((acc, trans) => acc + trans.amount, 0)
})

//add to local storage
const handelSubmit = (transactionData) => {
  transactions.value.push({
    id: generateId(),
    text: transactionData.text,
    amount: transactionData.amount
  })

  saveDataToLocalStorage()
  toast.success('Transaction added.')
}

//delete transactions

const deleteTransaction = (id)=>{
transactions.value= transactions.value.filter((trans)=>trans.id !== id)

saveDataToLocalStorage();
toast.success('data has been deleted successfully')
}
// generate id
const generateId = () => {
  return Math.floor(Math.random() * 1000000)
}
//save data to the localstorage
const saveDataToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>
