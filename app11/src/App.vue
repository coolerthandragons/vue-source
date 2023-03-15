<script>
import ComponentOne from './components/ComponentOne.vue'
export default {
  components: {
    ComponentOne
  },
  provide: {
    name: 'Rachel'
  }
}
</script>

<template>
  <h1> Top most level app </h1>
  <ComponentOne></ComponentOne>
</template>