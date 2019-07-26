<template>
   <b-card
     class="my-4"
     header="featured"
     header-tag="header"
     footer="asdfasdf"
     title="Match"
   >
      <b-card-text>
         {{info.home_team.name}} vs {{info.away_team.name}}
      </b-card-text>

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
