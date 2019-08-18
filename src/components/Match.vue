<template>
   <b-card
     no-body
     class="my-4 match_card"
     header="Competition match"
     header-tag="header"
   >
      <b-row class="" no-gutters>
         <b-col class="match_info_left" cols="12" md="4">
            <p><span v-html="calendar_icon"></span> {{info.when | moment("dddd Do MMMM YYYY")}}</p>
            <p><span v-html="clock_icon"></span> {{info.when | moment("HH:mm")}}</p>
            <p><span v-html="law_icon"></span> Ref(s): {{info.refs}}</p>
            <p><span v-html="location_icon"></span> Pitch: {{info.pitch}}</p>
         </b-col>

         <b-col class="match_info_right" cols="12" md="8">
            <b-container fluid>
               <b-row>
                  <b-col cols="5">
                     <b-card
                       class="h5 m-3 text-center"
                       :class="home_outcome_class"
                       :header="info.home_team.name"
                     >
                        <b-img :src="info.home_team.logo" :alt="info.home_team.name" fluid></b-img>
                     </b-card>
                  </b-col>

                  <b-col class="d-flex justify-content-center" cols="2">
                     <div class="h5 align-self-center text-nowrap">{{info.home_touchdowns}} - {{info.away_touchdowns}}</div>
                  </b-col>

                  <b-col cols="5">
                     <b-card
                       class="h5 m-3 text-center"
                       :class="away_outcome_class"
                       :header="info.away_team.name"
                     >
                        <b-img :src="info.away_team.logo" :alt="info.home_team.name" fluid></b-img>
                     </b-card>
                  </b-col>
               </b-row>
            </b-container>
         </b-col>
      </b-row>

   </b-card>
</template>

<script>
 import octicons from "@primer/octicons";

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
     calendar_icon () {
       return octicons["calendar"].toSVG();
     },
     clock_icon () {
       return octicons["clock"].toSVG();
     },
     law_icon () {
       return octicons["law"].toSVG();
     },
     location_icon () {
       return octicons["location"].toSVG();
     },
     home_outcome_class () {
       if (this.info.home_touchdowns > this.info.away_touchdowns) {
         return "winner_card";
       } else if (this.info.home_touchdowns == this.info.away_touchdowns) {
         return "tie_card";
       } else {
         return "loser_card"
       }
     },
     away_outcome_class () {
       if (this.info.home_touchdowns < this.info.away_touchdowns) {
         return "winner_card";
       } else if (this.info.home_touchdowns == this.info.away_touchdowns) {
         return "tie_card";
       } else {
         return "loser_card"
       }
     }
   },
   mounted () {
     this.$root.$on("SIGlocale", () => {
       this.$forceUpdate();
     })
   }
 }
</script>

<style module lang="scss">
 @import "~Styles/custom-color-variables";

 .match_info_left {
   padding: 1em !important;/* Overrides the no-gutters setting */
   background: color("grey", "lighten-3");
 }
 .winner_card {
   box-shadow: 0px 0px 20px 2px color("green", "darken-1");
 }
 .loser_card {
   box-shadow: 0px 0px 20px 2px color("red", "darken-1");
 }
 .tie_card {
   box-shadow: 0px 0px 20px 2px color("teal", "lighten-2");
 }
</style>
