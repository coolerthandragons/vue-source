<script setup>
import * as EmailValidator from 'email-validator'
import { ref, watch } from 'vue'
import { onMounted, onUpdated } from 'vue'
const usernameRef = ref(null)
const username = ref('')
const password = ref('')
const password2 = ref('')
const email = ref('')
const phone = ref('')
let profilePic = ref()
const disabled = ref(true)
const validUsername = ref(false)
const validPassword = ref(false)
const validEmail = ref(false)
const validPhone = ref(false)
const passwordsMatch = ref(false)
const usernameErrorRef = ref(null)
const passwordErrorRef = ref(null)
const password2ErrorRef = ref(null)
const emailErrorRef = ref(null)
const phoneErrorRef = ref(null)
// watch element ref - similar to onMounted - not watching value of input
// for some reason disabled when ref function is installed 
let count = 0
watch(usernameRef, () => {
    console.log('watching usernameRef')
    console.log(usernameRef.value)
    console.log(count++)
    usernameRef.value.value = "rmcgregor"
})
// called when anything in component changes - including onMounted
// if used in input element, must have v-model set
function componentUpdate(elm) {
    console.log("something changed changed")
    console.log(elm.value)
    console.log(passwordErrorRef.value)
    if (passwordErrorRef.value != null && elm.value.length > 0) {
        validPassword.value = (elm.value.length >= 8)
        passwordErrorRef.value.innerHTML = (validPassword.value) ?
            "&nbsp;" : "Minimum length: 8 characters"
    }
}
//watch v-model input.value ref (called when string changes)
watch(username, () => {
    console.log("username changed")
    validUsername.value = (username.value.length >= 4)
    usernameErrorRef.value.innerHTML = (validUsername.value) ?
        "&nbsp;" : "Minimum length: 4 characters"
    usernameRef.value.setAttribute("data", "hello")
})
// watch array of refs
watch([password, password2], () => {
    console.log("password changed")
    passwordsMatch.value = (password.value === password2.value)
    password2ErrorRef.value.innerHTML = (passwordsMatch.value || password2.value.length == 0) ?
        "&nbsp;" : "Passwords do not match"
})

watch(phone, () => {
    console.log("phone changed")
    validPhone.value = (phone.value.length >= 10)
    phoneErrorRef.value.innerHTML = (validPhone.value) ?
        "&nbsp;" : "Not a valid phone number"
})

watch(email, () => {
    console.log("email changed")
    validEmail.value =  EmailValidator.validate(email.value)
    phoneErrorRef.value.innerHTML = (validEmail.value) ?
        "&nbsp;" : "Not a valid email address"
        
})

// watch array of refs
watch([validUsername, validPassword, passwordsMatch, validEmail, validPhone], async () => {
    disabled.value = !(validUsername.value && validPassword.value && passwordsMatch.value && validEmail.value && validPhone)
    console.log(disabled.value)
    if (!disabled.value) usernameRef.value.value = ''
})
function submit() {
    let mssg = username.value + ", " + password.value + ", " + phone.value + ", " + email.value
    console.log(mssg)
}
onMounted(() => {
    usernameRef.value.focus();
})
onUpdated(() => {
    //console.log(usernameRef.value.value)
})
function loadPreviewImg(event) {
    let reader = new FileReader()

    reader.onloadend = function () {
        let img = document.querySelector("#preview-img")
        img.src = reader.result;
    }

    reader.readAsDataURL(event.target.files[0])
}
</script>


<template>
    <div class="container">
        <form class="rounded border border-primary border-2 border-opacity-25 py-3 px-5">
            <fieldset class="d-flex flex-column">
                <legend>Create Account</legend>

                <div class="form-floating mb-2">
                    <label for="username" class="form-label">Username: </label>
                    <input ref="usernameRef" v-model="username" id="username" type="text" class="form-control" />
                    <small ref="usernameErrorRef" class="text-danger">&nbsp</small>
                </div>

                <div class="form-floating mb-2">
                    <label for="password" class="form-label">Password: </label>
                    <input :ref="componentUpdate" v-model="password" id="password" type="password"
                        class="form-control" />
                    <small ref="passwordErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <label for="password2" class="form-label">Reenter password: </label>
                    <input v-model="password2" id="password2" type="password" class="form-control" />
                    <small ref="password2ErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <label for="email" class="form-label">Email: </label>
                    <input v-model="email" id="email" type="email" class="form-control" />
                    <small ref="emailErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <label for="phone" class="form-label">Phone: </label>
                    <input v-model="phone" id="phone" type="phone" class="form-control" />
                    <small ref="phoneErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <label for="profilePic" class="form-label">Profile Picture: </label>
                    <input v-on:change="profilePic" id="profilePic" type="file" class="form-control"
                        accept="image/png, impage/jpeg" @change="loadPreviewImg" />
                </div>

                <div>
                    <button @click="submit" class="btn btn-primary" type="button"
                        v-bind:disabled="disabled">Create</button>
                </div>
            </fieldset>
        </form>
        <br>
        <h4>Profile Picture Preview: </h4>
        <img id="preview-img">
    </div>

</template>
<style>
#preview-img{
    width: 10%
}
</style>