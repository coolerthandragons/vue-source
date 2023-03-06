<script setup>
    import {ref} from 'vue'
    const title = ref("Cosplay")
    const imagesrc = ref("cosplaying.jpg")
    const imagealt = ref("cosplaying with fiance")
    function changePic(){
        if (imagesrc.value === "cosplaying.jpg") {
            title.value = "Golfing with Family" 
            imagesrc.value = "north_carolina.jpg"
            imagealt.value  = "family playing golf in North Carolina"
        }
        else {
            title.value = "Cosplaying with Fiance" 
            imagesrc.value = "cosplaying.jpg"
            imagealt.value ="cosplaying with fiance"
        }
    }

</script>

<template>
    <div id="component1">
    <div>
    <h1 id="title"> {{title}}</h1>
    <img :src="imagesrc" :alt="imagealt">
    <br>
    <button @click="changePic">Change Picture</button>
</div>
</div>
</template>

<style>
#component1 {
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  #title{
    font-size: 4vh;
  }
  img {
    display: inline-block;
    width: 50%;
  }

</style>