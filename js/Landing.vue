<template functional>
   <div class="landing-wrapper">
      <video poster="" id="bgvid" playsinline autoplay muted loop>
         <source src="~Videos/splash.mp4" type="video/mp4">
         <source src="~Videos/splash.webm" type="video/webm">
      </video>

      <div class="viewport-header valign-wrapper">
         <!-- <h2 class="center-align">Six players, six touches, one team !</h2> -->
         <h2 class="center-align">Ready to take on the challenge ?</h2>
         <a class="waves-effect waves-light btn-large">What is touch</a>
         <a class="waves-effect waves-light btn-large">Where to play</a>
      </div>

      <div class="landing-body">
         <div class="container">
            <div class="row">
               <h2>🏉 Latest news</h2>
            </div>
         </div>
         <blog-landing post-number="6"></blog-landing>
         <!-- <a href="{% url 'news' %}" class="center-align">See all news</a> -->
         <div class="container">
            <div class="row">
               <h2>📅 Events</h2>
            </div>
         </div>
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
   z-index: 1;
 }

 .viewport-header {
   z-index: 2;
   justify-content: center;
   flex-flow: row wrap;
   align-items: center;
   align-content: center;
   width: 100%;
   color: white;
   position: fixed;
   @media #{$small-and-down} {
     top: 20vh;                  /*offset with top edge*/
   }
   @media #{$medium-and-up} {
     top: 30vh;                  /*offset with top edge*/
   }
   h2 {
     font-family: 'GlacialIndifference-Bold';
     order: 1;
     flex-basis: 100%;
   }
   .btn-large {
     margin: 4vw;
     order: 2;
   }
 }

 video {
   min-width: 100%;
   min-height: 100%;
   position: fixed;
   bottom: 0;
   z-index: -1;
   left: 50%;
   transform: translate(-50%, 0);
 }


 .landing-body {
   background: inherit;
   z-index: 2;
   position: relative;
   width: 100%;
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
