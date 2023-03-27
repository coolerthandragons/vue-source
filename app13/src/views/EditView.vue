<script setup>
import { useUserStore } from '../stores/user.js'

const store = useUserStore()

function submit() {
    console.log(store)
    let firstName = store.firstName
    let lastName = store.lastName
    let street = store.street
    let city = store.city
    let state = store.state
    let zip = store.zip
    console.log(firstName, lastName, street, city, state, zip)
    return { firstName, lastName, street, city, state, zip }
}

</script>
<template>
    <main>
        <h1>Edit</h1>
        <br>
        <fieldset>
            <label for="firstName lastName">Name </label>
            <input type="text" id="firstName" v-model="store.firstName" required>
            <input type="text" id="lastName" v-model="store.lastName" required>
            <br>
            <label id="address"> Address </label>
            <input type="text" id="street" v-model="store.street">
            <input type="text" id="city" v-model="store.city" required>
            <input type="text" id="city" v-model="store.state" required>
            <input type="text" id="zip" v-model="store.zip" required>
            <input type="submit" id="submit" @click="submit" value="Submit">
        </fieldset>
    </main>
</template>