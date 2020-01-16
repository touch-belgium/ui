<template>
   <header>
      <div class="overlay"></div>
      <video id="bgvid" playsinline autoplay muted loop>
         <source src="~assets/video/out-x265-2pass.mp4" type="video/H265">
         <source src="~assets/video/out-vp9-2pass.webm" type="video/webm">
         <source src="~assets/video/out-2pass.mp4" type="video/mp4">
      </video>

      <b-container class="h-100">
         <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
               <b-row class="mb-5">
                  <b-col cols=12>
                     <span class="display-4 creo-font">Ready to take on the challenge ?</span>
                  </b-col>
               </b-row>
               <b-row class="justify-content-center mt-5">
                  <b-col xs="12" md="3" class="mb-5">
                     <b-button :to="{ name: 'what' }" size="lg" variant="danger" class="overlay-button">What is Touch ?</b-button>
                  </b-col>
                  <b-col xs="12" md="3">
                     <b-button :to="{ name: 'where' }" size="lg" variant="danger" class="overlay-button">Where to play ?</b-button>
                  </b-col>
               </b-row>
            </div>
         </div>
      </b-container>
   </header>

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
 @import "~assets/css/custom-color-variables";

 header {
   position: relative;
   background-color: black;
   height: 75vh;
   min-height: 25rem;
   width: 100%;
   overflow: hidden;
   .container {
     position: relative;
     z-index: 2;
   }
   video {
     position: absolute;
     top: 50%;
     left: 50%;
     min-width: 100%;
     min-height: 100%;
     width: auto;
     height: auto;
     z-index: 0;
     -ms-transform: translateX(-50%) translateY(-50%);
     -moz-transform: translateX(-50%) translateY(-50%);
     -webkit-transform: translateX(-50%) translateY(-50%);
     transform: translateX(-50%) translateY(-50%);
   }
   .overlay {
     position: absolute;
     top: 0;
     left: 0;
     height: 100%;
     width: 100%;
     z-index: 1;
   }
   .overlay-button {
     font-weight: 500;
   }
 }
</style>
