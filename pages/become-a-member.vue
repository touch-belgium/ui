<template>
   <div>
      <FixedTBLogo></FixedTBLogo>
      <b-container class="mt-5">
         <b-row>
            <b-col cols="12">
               <h2>Become a member</h2>
               <p class="text-justify">
                  Being a member of Touch Belgium gives you access to a
                  range of resources and support for your club, that will
                  help your players, coaches and referees to develop and
                  discover the sport, at both social and competitive
                  levels.
               </p>

               <p class="text-justify">
                  Establishing and helping a Touch section get off the
                  ground is a particularly important time for any
                  organization. Being a member of Touch Belgium provides
                  access to multiple communication channels that can help
                  attract and retain new players.
               </p>
               <p class="text-justify">
                  Touch Belgium organises a total of six tournaments
                  throughout the year open to all Touch Belgium members,
                  including social summer tournaments, and the National
                  Championships. In addition to the national tournaments,
                  clubs and players often travel outside of Belgium to
                  participate in tournaments run by other national
                  associations or their member clubs. Affiliation to your
                  National Touch Association (NTA) is a requirement to
                  participate in any tournament outside of Belgium.
               </p>
               <p class="text-justify">
                  The touch season runs all year round, with tournaments
                  in Europe generally held between February until
                  December, so there are plenty of opportunities to play!
               </p>
               <p class="lead">
                  Benefits of Touch Belgium membership include:
               </p>
               <ul>
                  <li>
                     Free Referee Theory Courses for all Levels (1-5),
                     and Level 1 assessment in Belgium.
                  </li>
                  <li>
                     Free Coaching Courses. Both FIT accredited (subject
                     to the availability of a required visiting instructor)
                     and local coaching improvement sessions.
                  </li>
                  <li>
                     Free Entry into the Belgian National Championships
                  </li>
                  <li>
                     Club representation and participation in the monthly
                     Touch Belgium meetings, where upcoming tournaments,
                     sport and club development are discussed.
                  </li>
                  <li>
                     Possibility for club members to represent Belgium if
                     selected to play for the Belgian National Teams
                     (e.g. the European Touch Championships, Junior Touch
                     Championships and the Touch World Cup).
                  </li>
               </ul>

               <p class="text-justify">
                  In addition to the above benefits, the Touch Belgium
                  Committee is available to help new clubs with coaching
                  assistance and existing clubs with any ad-hoc needs
                  that arise. Our principal aim is to ensure the
                  continued growth and development of the sport in
                  Belgium.
               </p>
               <p class="text-justify">
                  The annual membership cost for Touch Belgium is
                  &euro;300. This registers the club with Touch Belgium
                  and covers the first 15 registered club players. Each
                  additional player, beyond the 15, costs &euro;20 per
                  player. Players may register as an independent player
                  for &euro;20 per year. Independent players are not
                  allowed to partake in the national championships.
               </p>
               <b-card
                 header-bg-variant="warning"
                 class="mb-3"
               >
                  <template slot="header">
                     <span class="mr-2" v-html="info_icon"></span> Please note
                  </template>
                  <b-card-text>
                     Membership does not provide Player Insurance. Clubs
                     would need to organize this separately via the VRB
                     Touch License or private insurance providers. This
                     is a separate process from registering with Touch
                     Belgium.
                  </b-card-text>
               </b-card>
               <p class="text-justify">
                  Would you like to know more about becoming a member of
                  Touch Belgium? Email <a href="mailto:president@touch-belgium.be">president@touch-belgium.be</a> to find out more.
               </p>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
 import octicons from "@primer/octicons";

 import FixedTBLogo from "../components/FixedTBLogo.vue";

 export default {
   data () {
     return {

     }
   },
   methods: {

   },
   async mounted () {

   },
   computed: {
     info_icon () {
       return octicons["info"].toSVG();
     },
   },
   components: { FixedTBLogo }
 }
</script>

<style module lang="scss">
</style>
