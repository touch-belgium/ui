<template functional>
   <div class="landing-wrapper">
      <video poster="" id="bgvid" playsinline autoplay muted loop>
         <source src="~Videos/splash.mp4" type="video/mp4">
         <source src="~Videos/splash.webm" type="video/webm">
      </video>

      <!-- <h2 class="center-align">Six players, six touches, one team !</h2> -->
      <v-layout align-center justify-center row wrap class="viewport-header">
         <v-flex xs12 align-self-center>
            <h2 class="display-3">Ready to take on the challenge ?</h2>
         </v-flex>
         <v-flex xs12 md2>
            <v-btn large color="tb_red" dark to="/template">What is touch</v-btn>
         </v-flex>
         <v-flex xs12 md2>
            <v-btn large color="tb_red" dark to="/template">Where to play</v-btn>
         </v-flex>
      </v-layout>

      <div class="landing-body">
         <blog-landing post-number="6"></blog-landing>
         <!-- <a href="{% url 'news' %}" class="center-align">See all news</a> -->
         <calendar></calendar>
      </div>
   </div>
</template>

<script>


</script>

<style scoped lang="scss">
 @import "custom-color-variables";
 @import "custom-variables";

 .landing-wrapper {
   background: inherit;
 }

 @font-face {
   font-family: 'GlacialIndifference-Bold';
   /* Relative paths since sass-loader cannot resolve URL */
   src: url('~Fonts/GlacialIndifference-Bold.ttf') format('truetype'),
   url('~Fonts/GlacialIndifference-Bold.otf') format('opentype');
 }

 #bgvid {
   z-index: 0;
 }

 .viewport-header {
   width: 100%;
   z-index: 1;
   color: white;
   position: fixed;
   text-align: center;
   @media #{$small-and-down} {
     top: 20vh;                  /*offset with top edge*/
   }
   @media #{$medium-and-up} {
     top: 30vh;                  /*offset with top edge*/
   }
   h2 {
     font-family: 'GlacialIndifference-Bold' !important;
   }
   .v-btn {
     margin: 4vw;
   }
 }

 video {
   min-width: 100%;
   min-height: 100%;
   position: fixed;
   bottom: 0;
   z-index: 0;
   left: 50%;
   transform: translate(-50%, 0);
 }


 .landing-body {
   background: #fff;
   z-index: 1;
   position: relative;
   @media #{$small-and-down} {
     margin-top: calc(100vh - #{$navbar-height-mobile});
   }
   @media #{$medium-and-up} {
     margin-top: calc(100vh - #{$navbar-height});
   }
   .container:first-child {
     padding-top: 3em;
   }
 }


</style>
