<template>
   <b-container fluid class="p-0 mt-4">
      <b-carousel
        no-hover-pause
        fade
        v-model="slide"
        :interval="4000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
         <b-carousel-slide v-if="picture" class="banner_container"
                           :img-src="picture"
         ></b-carousel-slide>
      </b-carousel>
   </b-container>
</template>

<script>
 import { mapGetters } from "vuex";

 export default {
   props: ["picture"],
   data () {
     return {
       slide: 0
     }
   },
   methods: {
     onSlideStart(slide) {
       this.sliding = true
     },
     onSlideEnd(slide) {
       this.sliding = false
     }
   },
   mounted () {

   },
   computed: {

   }
 }
</script>

<style scoped lang="scss">
 .banner_container {
   height: 25vw;
   @include media-breakpoint-down(md) {
     height: 30vw;
   }
 }
</style>
