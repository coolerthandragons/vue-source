<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue'
</script>
<template>
  <nav>
    <NavBar></NavBar>
  </nav>
  <RouterView />
</template>