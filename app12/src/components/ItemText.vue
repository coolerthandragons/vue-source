<script setup>
import Heading from './Heading.vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import json from '../assets/items.json'

console.log(json)
const route = useRoute()
let label = undefined
let description = undefined 
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
    description = item.description
  }
})

</script>

<template>
    <div id="view">
  <Heading :label="label"/>
  <div>
    <div v-if="label">
      {{ description }}
    </div>
    <div v-else>
      Item not found...
    </div>
  </div>
  </div>
    
</template>