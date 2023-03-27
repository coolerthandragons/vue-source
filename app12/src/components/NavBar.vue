<script>
import {RouterLink} from 'vue-router'

</script>

<template>
    <nav>
        <RouterLink to="/index.html">Home </RouterLink>
        <div class="dropdown">
            <button class="dropbtn">Items</button>
        <div class="dropdown-content">
          <a><RouterLink to="/items">Items</RouterLink></a>
            <a><RouterLink to="/items/paper">Paper</RouterLink></a>
            <a><RouterLink to="/items/plate">Plate</RouterLink></a>
            <a><RouterLink to="/items/lace">Lace</RouterLink></a>
            <a><RouterLink to="/items/mirror">Mirror</RouterLink></a>
        </div>
      </div>
    </nav>

</template>
<style>
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>