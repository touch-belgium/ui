<template>
   <div class="app">
      <navbar></navbar>
      <router-view></router-view>
   </div>
</template>

<script>
 import Navbar from './Navbar.vue';
 import Footer from './Footer.vue';

 export default {
   name: 'App',
   components: { Navbar, Footer },
 }
</script>

<style>
 body {
   color: red;
 }
</style>
