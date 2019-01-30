<template>
   <v-card color="grey lighten-3" :elevation="elevation">
      <v-layout>
         <v-flex class="grey lighten-4" xs12 md3>
            <v-card-text>
               <v-layout align-center justify-start>
                  <v-flex shrink><v-icon class="mr-2">event</v-icon></v-flex>
                  <v-flex><span>{{info.when | moment("dddd Do MMMM YYYY")}}</span></v-flex grow>
               </v-layout>
               <v-layout align-center justify-start>
                  <v-flex shrink><v-icon class="mr-2">access_time</v-icon></v-flex>
                  <v-flex><span>{{info.when | moment("HH:mm")}}</span></v-flex grow>
               </v-layout>
            </v-card-text>
         </v-flex>
         <v-flex class="text-xs-center match" :class="bg_colour" xs12 md9>
            <v-card-text>
               <v-layout justify-space-around>
                  <v-flex>
                     <v-img class="team_logo" :src="info.home_team.logo"></v-img>
                  </v-flex>
                  <v-flex>
                     <h3 class="headline">
                        <span>{{info.home_team.name}}</span> vs <span>{{info.away_team.name}}</span>
                     </h3>

                     <h2 class="mt-4 mb-4">
                        <span>{{info.home_touchdowns}}</span> - <span>{{info.away_touchdowns}}</span>
                     </h2>
                  </v-flex>
                  <v-flex>
                     <v-img class="team_logo" :src="info.away_team.logo"></v-img>
                  </v-flex>
               </v-layout>
            </v-card-text>
         </v-flex>
      </v-layout>
   </v-card>

   <!-- <span>match at {{ info.when | moment("dddd, MMMM Do YYYY") }}</span> -->
</template>

<script>
 export default {
   props: ['info'],
   data () {
     return {

     }
   },
   methods: {
     done () {
       return !(this.info.home_touchdowns == null || this.info.away_touchdowns == null);
     }
   },
   computed: {
     elevation () {
       return this.done() ? 4 : 10;
     },
     bg_colour () {
       let cls = "grey lighten-4"
       if (this.info.home_touchdowns > this.info.away_touchdowns) {
         cls = "home_win"
       } else if (this.info.home_touchdowns < this.info.away_touchdowns) {
         cls = "away_win"
       } else if (this.done() && this.info.home_touchdowns == this.info.away_touchdowns) {
         cls = "tie"
       }
       return cls
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
 @import "custom-color-variables";

 .away_win {
   background: linear-gradient(90deg, $defeat 20%, $victory 80%);
 }
 .home_win {
   background: linear-gradient(90deg, $victory 20%, $defeat 80%);
 }
 .tie {
   background-color: $tie;
 }
 .match span {
   display: inline-block;
   width: 40%;
   text-align: left;
 }
 .match span:first-of-type {
   text-align:right
 }
 .team_logo {
   height: 6em;
 }
</style>
