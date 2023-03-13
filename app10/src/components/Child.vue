<script setup>
import { computed } from 'vue'
const props = defineProps(['username', 'name'])
const emit = defineEmits(['update:username', 'update:name'])
const userValue = computed({
  get() {return props.username},
  set(arg){emit('update:username', arg)}
})
const nameValue = computed({
  get() {return props.name},
  set(arg){emit('update:name', arg)}
})
</script>
<template>
  <form>
    <fieldset class="childcard">
        <div>
            <label for="username" class="form-label" > Username</label>
            <input id="username" v-model="userValue" type="text"/>
        </div>

        <div>
            <label for="name" class="form-label">Name</label>
            <input v-model="nameValue" id="name" type="text"/>
        </div>
        <div>
            <button @click="$emit('userAndNameChanged')" type="button">Submit</button>
        </div>
    </fieldset>
  </form>
    <br>
</template>
<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: salmon;
}

.center {
  align-items: center;
  justify-content: center;
}

.childcard {
  background-color: white;
  width: 250px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 5px;
  border-radius: 10px;  /* Safari 4.0 - 8.0 */
}
.childcard h1,
.childcard h2,
.childcard h3,
.childcard h4,
.childcard h5 {
  margin: 0px;
  padding: 0px 0px 15px 0px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 30px;
  color: #282828;
}
.childcard hr {
  display: block;
  border: none;
  height: 3px;
  background-color: salmon;
  margin: 0px;
  /* custom */
}
.childcard p {
  margin: 15px 0px 0px 0px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 100;
  letter-spacing: -0.25px;
  line-height: 1.25;
  font-size: 16px;
  word-break: break-all;
  word-wrap: pre-wrap;
  color: #282828;
}
.childcard button {
  border: none;
  background-color: salmon;
  width: 50%;
  margin: 10px auto;
  padding: 10px 30px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  text-transform: uppercase;
}
</style>