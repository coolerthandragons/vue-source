<template>
    <h1>Welcome to the Unbirthday Party!</h1>
    <canvas ref="bjsCanvas" width="1000" height="800"></canvas>
</template>
  
<script>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "./scenes/MyFirstScene";

export default {
    name: "BabylonScene",
    setup() {
        const bjsCanvas = ref(null);

        onMounted(() => {
            if (bjsCanvas.value) {
                createScene(bjsCanvas.value);
            }
        });

        return {
            bjsCanvas,
        };
    },
};
</script>