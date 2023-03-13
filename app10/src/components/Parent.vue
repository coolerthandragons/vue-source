<script setup>
import { reactive, ref } from 'vue'
import Child from './Child.vue'
import Card from './Card.vue'
const username1 = ref('Enter username here')
const name1 = ref ('Enter name here')
let cards = reactive([])
function userAndNameChanged() {
  cards.push({
    username: username1.value,
    name: name1.value
  })
}
</script>
<template>
<Child 
  v-model:username="username1"
  v-model:name="name1"
  @userAndNameChanged ="userAndNameChanged"
/>

<div class="card" v-for="card in cards">
    <span>{{ card }}</span>
</div>
</template>
