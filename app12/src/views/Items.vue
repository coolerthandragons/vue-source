<script setup>
import { RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'
</script>
<template>
    <nav>
        <NavBar></NavBar>
        <br>
        <SearchBar></SearchBar>
    </nav>
    <main>
        <h1>Items</h1>
        <ul>
            <li>
                <RouterLink to="/items/paper">Paper</RouterLink>
            </li>
            <li>
                <RouterLink to="/items/plate">Plate</RouterLink>
            </li>
            <li>
                <RouterLink to="/items/lace">Lace</RouterLink>
            </li>
        <li>
            <RouterLink to="/items/mirror">Mirror</RouterLink>
        </li>
    </ul>
</main></template>
<style></style>