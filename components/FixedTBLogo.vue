<template>
   <b-img class="fixed_logo" src="~assets/img/logo-medium.png"></b-img>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   methods: {

   },
   async mounted () {

   },
   computed: {

   }
 }
</script>

<style scoped lang="scss">
 .fixed_logo {
   position: fixed;
   top: 50%;
   left: 50%;
   -webkit-transform: translate(-50%, -50%);
   -ms-transform: translate(-50%, -50%);
   transform: translate(-50%, -50%);
   height: 40vh;
   opacity: 0.1;
   z-index: -100;
 }
</style>
