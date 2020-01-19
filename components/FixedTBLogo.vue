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
   mounted () {

   },
   computed: {

   }
 }
</script>

<style scoped lang="scss">
 @import "~assets/css/custom-bootstrap-variables";
 @import "~bootstrap/scss/mixins";

 .fixed_logo {
   position: fixed;
   top: 50%;
   left: 50%;
   -webkit-transform: translate(-50%, -50%);
   -ms-transform: translate(-50%, -50%);
   transform: translate(-50%, -50%);
   width: 80vw;
   opacity: 0.05;
   z-index: -100;
   @include media-breakpoint-up(sm) {
     width: 60vw;
   }
 }
</style>
