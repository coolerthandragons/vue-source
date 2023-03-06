<script setup>
import {reactive } from 'vue'

let index1 = 0

const photoArray = [
    {
        src: "dragon_eye.jpg",
        name: "Dragon Eye",
        photographer: "Erik Karits",
        photographer_url: "https://www.pexels.com/@erik-karits-2093459/",
    },
    {
        src: "dragon_lights.jpg",
        name: "Dragon Lights",
        photographer: "Eva Bronzini",
        photographer_url: "https://www.pexels.com/@eva-bronzini/",
    },
    {
        src: "dragon_cuties.jpg",
        name: "Dragon Cuties",
        photographer: "Sebastiaan Stam",
        photographer_url: "https://www.pexels.com/@sebastiaan9977/",
    },
    {
        src: "dragon_statue.jpg",
        name: "Dragon Statue",
        photographer: "Suraphat Nuea-on",
        photographer_url: "https://www.pexels.com/@suraphat/",
    },
    {
        src: "dragon_fire.jpg",
        name: "Dragon Fire",
        photographer: "Сергей Христинич",
        photographer_url: "https://www.pexels.com/@82664875/",
    },
    {
        src: "dragon_love.jpg",
        name: "Dragon Love",
        photographer: "Pavel Georgiev",
        photographer_url: "https://www.pexels.com/@pavel-georgiev-941244/",
    },
    {
        src: "dragon_incense.jpg",
        name: "Dragon Incense",
        photographer: "Rachel Claire",
        photographer_url: "https://www.pexels.com/@rachel-claire/",
    },
    {
        src: "dragon_on_bank.jpg",
        name: "Dragon On Bank",
        photographer: "Craig Adderley",
        photographer_url: "https://www.pexels.com/@thatguycraig000/",
    },

]

const photo1 = reactive ({
    name: "",
    photographer: "",
    photographer_url: "",
    url: "",

})

function prevImage1() {
    if (index1 != 0) {
        index1--
        loadImage1()
    }
}

function nextImage1() {
    if (index1 < 7) {
        index1++
        loadImage1()
    }
}

function loadImage1() {
    photo1.title = photoArray[index1].name
    photo1.photographer = photoArray[index1].photographer
    photo1.photographer_url = photoArray[index1].photographer_url
    photo1.url = photoArray[index1].src
}
</script>

<template>
    <div class="slideshow">
        <div class="photo">
            <img :src="photo1.url">
            <h3>{{ photo1.title }} </h3>
            <br>
            <a :href="photo1.photographer_url" target="_blank"> {{ photo1.photographer }} </a>
        </div>
        <button class="prev" @click="prevImage1()" :disabled="index1==0?true:false">Previous</button>
        <button class="next" @click="nextImage1()" :disabled="index1==7?true:false">Next</button>
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