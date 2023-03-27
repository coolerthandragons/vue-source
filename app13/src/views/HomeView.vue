<script setup>
import { useUserStore } from '@/stores/user'
const store = useUserStore()
</script>

<template>
  <h1>Home</h1>
  <main>
    <h3>Welcome, {{store.firstName }}! </h3>
    <p>User: {{ store.firstName }} {{ store.lastName }}</p>
    <p>Street: {{ store.street }}</p>
    <p>City: {{ store.city }}</p>
    <p>State: {{ store.state }}</p>
    <p>Zip: {{ store.zip }}</p>
  </main>
</template>