<script setup>

import One from './components/One.vue'
import Two from './components/Two.vue'
import Three from './components/Three.vue'
import Four from './components/Four.vue'
import Five from './components/Five.vue'
import Six from './components/Six.vue'
</script>

<template>
<main class="grid-container">
  <One class="one"></One>
  <Two class="two"></Two>
  <Three class="three"></Three>
  <Four class="four"></Four>
  <Five class="five"></Five>
  <Six class="six"></Six>
</main>
</template>

<style>
main {
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
h1 {
  align-content: center;
  text-align: center;
  padding: 5%;
}
</style>
