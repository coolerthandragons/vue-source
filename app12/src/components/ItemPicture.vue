<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import json from '../assets/items.json'
const route = useRoute()
// various properties on the route object
let label = undefined
let src = undefined 
setLabel()
// watch for params changes
watch(() => route.path, () => { console.log("path changed") })
// watch for params.id changes
watch(() => route.params.id, setLabel)
function setLabel() {
  console.log("params changed")
  console.log(route.params)
  let id = route.params.id
  let itemName = id ? `${id.charAt(0).toUpperCase()}${id.slice(1)}` : ''
  label = id ? `${route.name} ${itemName}` : route.name
}

json.forEach((item) =>{
  console.log(item)
  if(item.name == label){
    src = item.src
    console.log(src)
  }
})
</script>

<template>
    <img :src="src">
</template>
<style> 
img {
    width: 400px
}
</style>