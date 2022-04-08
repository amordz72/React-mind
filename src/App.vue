<script setup>
 
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container">
    <Navbar> </Navbar>
  
    <notifications />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top:50px;*/
}

* {
  box-sizing: border-box !important;
}
 
</style>
