<template>
   <div class="landing-wrapper">
      <header>
         <div class="overlay"></div>
         <video poster="" id="bgvid" playsinline autoplay muted loop>
            <source src="~Videos/splash.webm" type="video/webm">
            <source src="~Videos/splash.mp4" type="video/mp4">
         </video>

         <b-container class="h-100">
            <div class="d-flex h-100 text-center align-items-center">
               <div class="w-100 text-white">
                  <h1 class="display-5 mb-5">Ready to take on the challenge ?</h1>
                  <b-row class="justify-content-center">
                     <b-col xs="12" md="3" class="mb-5">
                        <b-button size="lg" variant="danger">What is touch</b-button>
                     </b-col>
                     <b-col xs="12" md="3">
                        <b-button size="lg" variant="danger">Where to play</b-button>
                     </b-col>
                  </b-row>
               </div>
            </div>
         </b-container>
      </header>

      <section class="mt-5">
         <b-container>
            <b-row>
               <b-col xs="12">
                  <h2 class="display-4">News</h2>
               </b-col>
            </b-row>
            <b-row>
               <b-col sm="12" md="9">
                  <blog-landing></blog-landing>
               </b-col>
               <b-col sm="12" md="3">
                  <Timeline id="touchbelgium" sourceType="profile" :options="{ tweetLimit: '4', 'data-height': '300' }">
                     <b-spinner variant="primary" label="Spinning"></b-spinner>
                  </Timeline>
               </b-col>
            </b-row>
         </b-container>
      </section>

      <section>
         <b-container>
            <b-row>
               <b-col xs="12">
                  <h2 class="display-4">Calendar</h2>
               </b-col>
            </b-row>
         </b-container>
      </section>
   </div>
</template>

<script>
 import { Timeline } from "vue-tweet-embed";
 import BlogLanding from "../components/BlogLanding.vue";

 export default {
   data () {

   },
   components: {
     Timeline, BlogLanding,
   },
 }
</script>

<style scoped lang="scss">
 @import "~Styles/custom-color-variables";

 @font-face {
   font-family: 'GlacialIndifference-Bold';
   /* Relative paths since sass-loader cannot resolve URL */
   src: url('~Fonts/GlacialIndifference-Bold.ttf') format('truetype'),
   url('~Fonts/GlacialIndifference-Bold.otf') format('opentype');
 }

 header {
   position: relative;
   background-color: black;
   height: 75vh;
   min-height: 25rem;
   width: 100%;
   overflow: hidden;
 }

 header video {
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

 header .container {
   position: relative;
   z-index: 2;
   font-family: 'GlacialIndifference-Bold';
 }

 header .overlay {
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   z-index: 1;
 }

 @media (pointer: coarse) and (hover: none) {
   header video {
     display: none;
   }
 }

</style>
