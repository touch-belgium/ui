<template functional>
   <div class="landing-wrapper">
      <!-- <video poster="" id="bgvid" playsinline autoplay muted loop>
           <source src="~Videos/splash.webm" type="video/webm">
           <source src="~Videos/splash.mp4" type="video/mp4">
           </video> -->
      <p>Some text in the body</p>
   </div>
</template>

<script></script>

<style scoped lang="scss">
 /* @import "custom-color-variables";
    @import "custom-variables"; */

 $small-and-down: 600px;
 $medium-and-up: 1000px;
 $tb-red: red;

 $navbar-height-mobile: 80px;
 $navbar-height: 90px;

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
   @media (min-width: #{$small-and-down}) {
     top: 20vh;
   }
   @media (min-width: #{$medium-and-up}) {
     top: 30vh;
   }

   h2 {
     font-family: 'GlacialIndifference-Bold' !important;
   }
   .v-btn.tb-red {
     margin: 4vw;
     background-color: $tb-red;
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
   @media (min-width: #{$small-and-down}) {
     margin-top: calc(100vh - #{$navbar-height-mobile});
   }
   @media (min-width: #{$medium-and-up}) {
     margin-top: calc(100vh - #{$navbar-height});
   }
   .container:first-child {
     padding-top: 3em;
   }
 }


</style>
