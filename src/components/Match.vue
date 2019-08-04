<template>
   <b-card
     class="my-4"
     header="featured"
     header-tag="header"
     footer="asdfasdf"
   >
      <b-row no-gutters>
         <b-col cols="6">

         </b-col>
         <b-col cols="6">
            <b-row>
               <b-col cols="6">
                     {{info.home_team.name}} vs


               </b-col>

               <b-col cols="6">
                  {{info.away_team.name}}
               </b-col>
            </b-row>

         </b-col>
      </b-row>

   </b-card>
</template>

<script>
 export default {
   /* The content is passed as props so that this component does not
      need to do any external requests */
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
     console.log(this.info);
     this.$root.$on("SIGlocale", () => {
       this.$forceUpdate();
     })
   }
 }
</script>

<style module lang="scss">
</style>
