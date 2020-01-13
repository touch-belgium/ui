<template>
   <b-container fluid class="p-0 mt-4">
      <b-carousel
        id=""
        fade
        v-model="slide"
        :interval="4000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
         <b-carousel-slide class="banner_container"
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
     console.log("yaaa");
     console.log(this.picture);
   },
   computed: {

   }
 }
</script>

<style module lang="scss">
</style>
