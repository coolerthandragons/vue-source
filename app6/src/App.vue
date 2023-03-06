<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: {
    first: "",
    last: ""
  },
  email: "",
  model: "",
  size: "",
  quantity: 1,
  date: "01/02/3000",
  address: {
    street: "",
    secondStreet: "",
    city: "",
    zip: ""
  }

})

function submit() {
  console.log("User data: ")
  let userObj = { ...user }
  console.log(userObj)
  let jsonString = JSON.stringify(user)
  console.log(jsonString)
  let jsonObject = JSON.parse(jsonString)
  console.log(jsonObject)
}
</script>

<template>
  <fieldset>
    <header>
      <h1>Order Form</h1>
      <p>Please fill in your information and we'll be sending your order in no time!</p>
    </header>

    <body>
      <label for="firstName lastName">Name </label>
      <input type="text" id="firstName" v-model="user.name.first" required>
      <input type="text" id="lastName" v-model="user.name.last" required>
      <br>
      <label for="email">Email </label>
      <input type="email" id="email" v-model="user.email"  required>
      <br>
      <label for="t-shirt model">T-Shirt Model </label>
      <label id="green" for="green">
        <input type="radio" id="green" name="t-shirt" v-model="user.model" required>
        <img src="/green.jpg" alt="green t=shirt">
      </label>
      <label id="yellow" for="yellow">
        <input type="radio" id="yellow" name="t-shirt" v-model="user.model" required>
        <img src="/yellow.jpg" alt="yellow t-shirt">
      </label>
      <label id="blue" for="blue">
        <input type="radio" id="blue" name="t-shirt" v-model="user.model" required>
        <img src="/blue.jpg" alt="blue t-shirt">
      </label>
      <br>
      <label for="size">Size </label>
      <select name="size" id="size" v-model="user.size" required>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
      </select>
      <br>
      <label for="quantity">Quantity </label>
      <input type="number" id="quantity" min="1" max="100" v-model="user.quantity"  required>
      <br>
      <label for="deliveryDate">Delivery Date </label>
      <input type="date" id="deliveryDate" min="2023-02-04" max="2136-12-31" v-model="date" required>
      <label id="address" >Delivery Address </label>
        <input type="text" id="street" v-model="user.address.street" placeholder="Street Address" required>
        <input type="text" id="secondStreet" v-model="user.address.secondStreet" placeholder="Street Address Line 2">
        <input type="text" id="city" v-model="user.address.city" placeholder="City" required>
        <input type="text" id="zip" v-model="user.address.zip" placeholder="Zipcode" required>
      <br>
      <input type="submit" id="submit" @click="submit" value="Purchase">
    </body>
    <br>
  </fieldset>

</template>

<style>
fieldset {
  background-color: white;
  border-radius: 5%;
}

header {
  background-color: rgb(69, 186, 69);
  color: white;

}

body {
  background-color: white;
  color: black;
  display: grid;
  grid-template-columns: 25% 15% 15% 15% 15%;
  grid-template-rows: 5% 5% 20% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%;
  column-gap: 2%;
  row-gap: 2%;
}

input {
  grid-column-start: 2;
  grid-column-end: 5;

}

label {
  grid-column: 1;
}

#submit {
  grid-column: 5;
  grid-row: 12;
  background-color: rgb(69, 186, 69);
}

#submit:active{
  background-color: lightgreen;
}

#deliveryDate {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row: 6
}
#address {
  grid-column: 1;
  grid-row: 7;
  background-color: gray;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 7;
  grid-row-end: 11;
}
#street {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row: 7;
  
}

#secondStreet {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row: 8;
}

#city {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row: 9;
}
#zip {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row: 10;
}

#firstName {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 1;
}

#lastName {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row: 1;
}

#blue {
  grid-column: 2;
  grid-row: 3;
}

#yellow {
  grid-column: 3;
  grid-row: 3;
}

#green {
  grid-column: 4;
  grid-row: 3;
}

img {
  height: 80%;
}

#size {
  grid-column-start: 2;
  grid-column-end: 5;
}
</style>