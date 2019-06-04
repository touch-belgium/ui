<template>
   <div class="app-wrapper">
      <footer></footer>
      <navbar></navbar>
      <router-view></router-view>
   </div>
</template>

<script>
 import Navbar from './components/Navbar.vue';
 import Footer from './components/Footer.vue';

 export default {
   name: 'App',
   components: { Navbar, Footer },
 }
</script>

<style></style>
