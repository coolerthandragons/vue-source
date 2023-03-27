<script>
import Home from './views/Home.vue'
import NavBar from '../src/components/NavBar.vue'
export default {
  components: {
    Home
    }
}
</script>

<template>
  <nav>
    <NavBar></NavBar>
</nav>
  <main>
    <RouterView />
</main>
</template>