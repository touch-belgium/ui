<template>
   <b-card
     class="my-3 match_card"
   >
      <template v-slot:header>
         <b-row>
            <b-col cols="12" sm="8">
               <span>{{ $moment(info.when).format("dddd Do MMMM YYYY") }}</span>
            </b-col>
            <b-col cols="12" sm="4">
               <span class="float-sm-right">{{ $moment(info.when).format("HH:mm") }}</span>
            </b-col>
         </b-row>
      </template>
      <b-badge v-show="false" variant="danger">LIVE</b-badge>
      <b-row no-gutters>
         <b-col cols="12" class="mb-3">
            <b-row class="mb-3">
               <b-col cols="10">
                  <div class="team">
                     <b-img class="team-logo" :src="info.home_team.logo" :alt="info.home_team.name" fluid></b-img>
                     <span :class="home_outcome_class">{{info.home_team.name}}</span>
                  </div>
               </b-col>
               <b-col cols="2">
                  <b-badge class="score-badge">{{info.home_touchdowns}}</b-badge>
               </b-col>
            </b-row>
            <b-row>
               <b-col cols="10">
                  <div class="team">
                     <b-img class="team-logo" :src="info.away_team.logo" :alt="info.away_team.name" fluid></b-img>
                     <span :class="away_outcome_class">{{info.away_team.name}}</span>
                  </div>
               </b-col>
               <b-col cols="2">
                  <b-badge class="score-badge">{{info.away_touchdowns}}</b-badge>
               </b-col>
            </b-row>
            <b-row v-if="info.invitational_match" class="mt-3">
               <b-col cols="12">
                  <span><font-awesome-icon icon="envelope" /> Invitational/friendly match</span>
               </b-col>
            </b-row>
         </b-col>
      </b-row>
      <hr />
      <b-row>
         <b-col cols="12" sm="8">
            <span><font-awesome-icon icon="gavel" /> Ref(s): {{info.refs}}</span>
         </b-col>
         <b-col cols="12" sm="4">
            <span class="float-sm-right"><font-awesome-icon icon="directions" /> Pitch: {{info.pitch}}</span>
         </b-col>
      </b-row>
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
     home_outcome_class () {
       if (this.info.home_touchdowns > this.info.away_touchdowns) {
         return "winner";
       } else if (this.info.home_touchdowns == this.info.away_touchdowns) {
         return "tie";
       } else {
         return "loser"
       }
     },
     away_outcome_class () {
       if (this.info.home_touchdowns < this.info.away_touchdowns) {
         return "winner";
       } else if (this.info.home_touchdowns == this.info.away_touchdowns) {
         return "tie";
       } else {
         return "loser"
       }
     }
   },
   mounted () {
     /* this.$root.$on("SIGlocale", () => {
      *   this.$forceUpdate();
      * }) */
   }
 }
</script>

<style scoped lang="scss">
 .team {
   font-weight: bold;
   font-size: 1.3rem;
   height: 100%;
 }
 .team-logo {
   max-width: 2.5rem;
   margin-right: 1rem;
 }
 .winner {
   color: green;
 }
 .loser {
   color: red;
 }
 .tie {

 }
 .score-badge {
   float: right;
   font-size: 1.2em;
 }
</style>
