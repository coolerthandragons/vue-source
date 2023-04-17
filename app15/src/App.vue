<script setup>
import { ref } from 'vue'
import { shuffle as _shuffle } from 'lodash-es'

const show = ref(false)
const play = ref(false)
const show1 = ref(false)
const play1 = ref(false)
const getInitialItems = () => ['to', 'meet', 'you', '!']
const items = ref(getInitialItems())

function reset() {
    items.value = getInitialItems()
}

function shuffle() {
    items.value = _shuffle(items.value)
}
</script>

<template>
    <button @click="show = !show">Click ME First!</button>
    <Transition>
        <p v-if="show">Helloooo</p>
    </Transition>
    <br>
    <button @click="play = !play">Click Me Next!</button>
    <Transition name="slide-fade">
        <p v-if="play">I'm</p>
    </Transition>
    <br>
    <button @click="show1 = !show1">Click Me Third!</button>
    <Transition name="bounce">
        <p v-if="show1" style="text-align: left;">
            E X C I T E D
        </p>
    </Transition>
    <br>
    <button @click="play1 = !play1">Click Me Fourth!</button>
    <TransitionGroup tag="ul" name="fade" class="container">
        <button v-if="play1" @click="reset">reset</button>
        <button v-if="play1" @click="shuffle">shuffle</button>
        <div v-if="play1" style="text-align:left">
            <div v-for="item in items" class="item" :key="item">
            {{ item }}
    </div>
    </div>
    </TransitionGroup>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.container {
    position: relative;
    padding: 0;
}

.item {
    width: 100%;
    height: 30px;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
    position: absolute;
}
</style>