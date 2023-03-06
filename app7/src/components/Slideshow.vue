<script setup>
import { createClient } from 'pexels'
import { ref, reactive } from 'vue'
import { watch } from 'vue'
import { onMounted } from 'vue'

let index = 0

//code for pexels

const client = createClient('b2MHchcEWT80INa4M2ULnTbWF0l1M60oyZBN3vXRQp110rtXJjWqqQH7')
const collection = reactive({
    media: {},
})

const photo = reactive({
    name: "",
    photographer: "",
    photorgrapher_url: "",
    url: "",
})

async function getCollection() {
    let result = await client.collections.all({ per_page: 1 })
    const id = result.collections[0].id
    result = await client.collections.media({ id, type: 'photos', per_page: 8 })
    collection.media = result.media
}

async function loadImage() {
    photo.title = collection.media[index].alt
    photo.photographer = collection.media[index].photographer
    photo.photographer_url = collection.media[index].photographer_url
    photo.url = collection.media[index].src.tiny
}

function prevImage() {
    if (index != 0) {
        index--
        loadImage()
    }
}

function nextImage() {
    if (index < 7) {
        index++
        loadImage()
    }
}

watch(collection, () => {
    console.log("collection changed")

    if (collection.media.length > 0) {
        loadImage()
    }
})

onMounted(() => {
    console.log("onmounted")
    getCollection()
})

</script>

<template>
    <div class="slideshow">
        <div class="photo">
            <img :src="photo.url">
            <h3>{{ photo.title }} </h3>
            <br>
            <a :href="photo.photographer_url" target="_blank"> {{ photo.photographer }} </a>
        </div>
        <button class="prev" @click="prevImage()" :disabled="index==0?true:false">Previous</button>
        <button class="next" @click="nextImage()" :disabled="index==7?true:false">Next</button>
    </div>

</template>

<style>
.slideshow {
    max-width: 60%;
    position: relative;
    margin: auto;
    background-color: lavender;
    text-align: center;
    border-radius: 10%;
}

.prev {
    cursor: pointer;
    position: absolute;
    top: 70%;
    right: 78%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: black;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    opacity: 0.5;
    border-radius: 10%;
}

.next {
    cursor: pointer;
    position: absolute;
    top: 70%;
    left: 85%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: black;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    opacity: 0.5;
    border-radius: 10%;
}

img {
    width: 100%;
    height: auto;
    border-radius: 10%;
}
.prev:disabled{
    cursor: not-allowed;
}
.next:disabled{
    cursor: not-allowed;
}
</style>