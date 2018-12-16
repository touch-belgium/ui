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
 .landing-wrapper {
   background: inherit;
 }

</style>
