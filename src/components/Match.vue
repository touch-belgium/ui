<template>
   <b-card
     header="featured"
     header-tag="header"
     footer="asdfasdf"
     title="Match"
   >
      <b-card-text>
         main stuff
      </b-card-text>

   </b-card>
</template>

<script>
 export default {
   props: ['info'],
   data () {
     return {

     }
   },
   methods: {
   },
   computed: {
   },
   mounted () {
     this.$root.$on("SIGlocale", () => {
       this.$forceUpdate();
     })
   }
 }
</script>

<style module lang="scss">
</style>
