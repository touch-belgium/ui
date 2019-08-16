<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12" lg="8">
            <div id="scrollspy" style="position:relative; overflow-y: auto">
               <h2 id="referees">Referees</h2>
               <p class="text-justify">
                  You don’t have to be a player to enjoy
                  Touch. Becoming a qualified Touch referee allows you
                  to master the rules of the game and ensure that
                  matches are played to the highest standards of
                  respect and fair play.
               </p>

               <p class="text-justify">
                  We are very proud of our referees that represent
                  Belgium at the highest levels of European
                  competition including the European Touch
                  Championships.
               </p>

               <p class="text-justify">
                  Refereeing allows you to take an active part in club
                  and international tournaments from both a sporting
                  and social perspective. To help master the required
                  signals, our team of referees has created a video
                  demonstrating how to perform each signal, included
                  as part of our <router-link to="#referee-resources">Resources section</router-link> below.
               </p>

               <p class="text-justify">
                  Take a look at the information below or <a href="mailto:referee@touch-belgium.be">contact our
                  National Director of Referees</a> if you are up for
                  the challenge!
               </p>

               <h5 id="referee-pathway" style="">Referee Pathway</h5>
               <p class="text-justify">
                  Learning to referee in Belgium allows individuals to
                  grow and hone their skills from social tournaments up
                  to international competitions.
               </p>

               <p class="text-justify">
                  There are five levels of referee qualification:
                  Level 1 (entry level) through to Level 5 (World Cup
                  level). The requirements and assessment processes
                  can be found on the European Touch Federation
                  website
               </p>

               <h5 id="referee-courses">Referee courses</h5>

               <p class="text-justify">
                  To become a qualified referee, there is a practical
                  certification required for all levels, and a theory
                  certification required for Levels 1-3.
               </p>

               <p class="text-justify">
                  Level 1 and 2 theory and practical assessments are
                  available in Belgium. To become qualified as a Level 3
                  referee upwards, travel to other tournaments is
                  required. Touch Belgium offers free referee training
                  courses for all Touch Belgium members up to Level 2
                  included, and travel and course subsidies for Level 3
                  upwards.
               </p>

               <p class="text-justify">
                  Upcoming courses:
               </p>

               <p class="text-justify">
                  [insert a list of upcoming referee theory and practical courses]
               </p>

               <p class="text-justify">
                  For all upcoming training courses, please see the calendar.
               </p>

               <p class="text-justify">
                  If you would like to find out when the next theory
                  or practical assessment opportunity is, please email
                  <a href="mailto:refereetraining@touch-belgium.be">refereetraining@touch-belgium.be</a>.
               </p>

               <h2 id="referee-resources">Resources</h2>

               <p class="text-justify lead font-italic">
                  In this section, you can find links or information
                  to useful resources that you will need as a referee.
               </p>

               <p class="text-justify">
                  Separate document
               </p>

               <p class="text-justify">
                  Separate document
               </p>

               <iframe width="560" height="315" src="https://www.youtube.com/embed/c5wNEgVDyBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

               <p class="text-justify">
                  Referee kit shop
               </p>

               <p class="text-justify">
                  For any questions relating to referee resource
                  material, email <a href="mailto:referee@touch-belgium.be">referee@touch-belgium.be</a>.
               </p>

               <b-card
                 header-bg-variant="info"
                 header-text-variant="white"
               >
                  <template slot="header">
                     <span class="mr-2" v-html="info_icon"></span> Tip !
                  </template>
                  <b-card-text>
                     The <a href="https://www.facebook.com/groups/241062646335242/" target="_blank">Touch Belgium Referees Facebook page</a>
                     is an open community resource where referees can ask
                     questions from fellow referees, share knowledge,
                     expertise and resources.
                  </b-card-text>
               </b-card>


               <h2 id="tb-referees" class="mt-4">Touch Belgium Referees</h2>
               <p class="text-justify">Phil, Karla, etc</p>

            </div>
         </b-col>

         <b-col class="d-none d-lg-inline" cols="0" lg="4">
            <b-navbar v-b-scrollspy="120" class="position-fixed flex-column">
               <b-navbar-brand href="#">Navigation</b-navbar-brand>
               <b-nav pills class="flex-column">
                  <b-nav-item to="#referees">Referees</b-nav-item>
                  <b-nav pills class="flex-column">
                     <b-nav-item class="ml-3 my-1" to="#referee-pathway">Referee Pathway</b-nav-item>
                     <b-nav-item class="ml-3 my-1" to="#referee-courses">Referee Courses</b-nav-item>
                  </b-nav>
                  <b-nav-item to="#referee-resources">Resources</b-nav-item>
                  <b-nav-item to="#tb-referees">Touch Belgium referees</b-nav-item>
               </b-nav>
            </b-navbar>
         </b-col>


      </b-row>
   </b-container>
</template>

<script>
 import octicons from "@primer/octicons";

 export default {
   data () {
     return {
       config: {
         element: 'body',
         offset: -100,
         method: 'auto',
         throttle: 100
       }
     }
   },
   methods: {

   },
   async mounted () {

   },
   computed: {
     info_icon () {
       return octicons["info"].toSVG( { "class": "white_icon" } );
     }
   }
 }
</script>

<style module lang="scss">
 .white_icon {
   fill: white;
 }
</style>
