<script setup>
    import {ref} from 'vue'
    const paragraph1 = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Congue nisi vitae suscipit tellus mauris. Id ornare arcu odio ut sem nulla. Venenatis tellus in metus vulputate. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Sit amet facilisis magna etiam tempor orci. In metus vulputate eu scelerisque felis imperdiet proin fermentum.")
    const paragraph2 = ref("Gravida in fermentum et sollicitudin ac orci phasellus. Elementum tempus egestas sed sed risus pretium quam vulputate. In fermentum posuere urna nec tincidunt praesent semper. Tempor id eu nisl nunc mi. Tristique sollicitudin nibh sit amet.")
    const paragraph3 = ref("Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Quis auctor elit sed vulputate mi. Placerat in egestas erat imperdiet. Massa sapien faucibus et molestie ac. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Odio ut enim blandit volutpat maecenas.")
    const font = ref("sans-serif")
    function changeFont() {
        font.value = (font.value == "sans-serif") ? "monospace" : "sans-serif"
    }
</script>

<template>
    <p :class="font">{{ paragraph1 }}</p>
    <p :class="font">{{ paragraph2 }}</p>
    <p :class="font">{{ paragraph3 }}</p>
    <button v-on:click="changeFont()">Change Font</button>

</template>

<style>
.sans-serif {
    font-family: 'Times New Roman', Times, serif
}
.monospace {
    font-family: 'Courier New', Courier, monospace
}

</style>