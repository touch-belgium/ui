<template>
   <b-container class="mt-5">
      <FixedTBLogo></FixedTBLogo>
      <b-row>
         <b-col cols="12" lg="9">
            <h1 id="referees">Coaching</h1>
            <p class="text-justify">
               Becoming a coach or assistant coach is a very
               rewarding way to give back to the sport. You don't
               have to stop playing to become a coach - as a player
               and a coach, you can benefit from learning how to
               explain the technique of Touch to others, all the
               time enhancing your own vision and understanding of
               the game.
            </p>

            <p class="text-justify">
               The coaching community in Belgium is a growing
               network of people, resources and ideas, working
               together to improve Touch in Belgium. From club
               level to the national youth, open and senior teams,
               our coaches are a committed group of individuals
               driven by passion for the sport and a desire to
               teach others how to play.
            </p>

            <p class="text-justify">
               Have a look at the information below or contact
               <a href="mailto:coaching@touch-belgium.be">coaching@touch-belgium.be</a> if you would like to help
               others learn how to play Touch!
            </p>

            <h3 id="coaching-pathway">Coaching pathway</h3>

            <p class="text-justify">
               There are numerous opportunities to learn to coach
               or assistant coach at all levels of Belgian
               touch. The coaching pathway involves three levels of
               accreditation: <b>Introductory</b>, <b>Intermediate</b> and
               <b>Advanced</b>.
            </p>

            <b-card no-body class="mb-3">
               <b-tabs card>
                  <b-tab title="Introductory" active>
                     <b-card-text>
                        <b>Introductory</b> level coaches help to
                        foster a love of the game through the
                        teaching of basic skills, and encouraging
                        participation, whatever the level. The
                        focus of the coach at this stage is to
                        ensure enjoyment of the game.
                     </b-card-text>
                  </b-tab>
                  <b-tab title="Intermediate">
                     <b-card-text>
                        An <b>Intermediate</b> level coach looks to
                        achieve better competition results through
                        improved knowledge of individual and team
                        skill development.
                     </b-card-text>
                  </b-tab>
                  <b-tab title="Advanced">
                     <b-card-text>
                        An <b>Advanced</b> Coach is a coach who is
                        dedicated to maximizing the potential of
                        all team players and directed towards
                        competition success at the elite level. The
                        Advanced Coach has a long-term interest in
                        the technical coaching arm, including
                        aspects of technical coaching, mentoring,
                        policy development and self-development.
                     </b-card-text>
                  </b-tab>
               </b-tabs>
            </b-card>

            <h3 id="coaching-courses">Coaching courses</h3>

            <p class="text-justify">
               Touch Belgium actively helps individuals to become
               qualified coaches within the FIT framework by
               organizing theory and practical courses with FIT
               qualified presenters. Coaching courses are available
               free of charge for all Touch Belgium members.
            </p>

            <p class="text-justify">
               In addition to the FIT qualified framework, Touch
               Belgium also offers <em>'Coach the Coaches'</em>
               sessions. These are short, targeted workshops aimed
               at answering any coaching questions you may have,
               and working through different coaching scenarios to
               provide ideas and inspiration. To find out more
               about <em>Coach the Coaches</em>, email
               <a href="mailto:coaching@touch-belgium.be">coaching@touch-belgium.be</a>
            </p>

            <h5 id="upcoming-courses">Upcoming coaching courses</h5>

            <p class="text-justify">
               The Federation of International Touch is currently
               revising its coaching courses, from Beginners
               through to Advanced Level. New coaching courses will
               be circulated to all Touch Belgium members and
               updated on this page when available.
            </p>

            <b-list-group class="mb-3">
               <b-list-group-item variant="warning">No upcoming events to show</b-list-group-item>
            </b-list-group>

            <p class="text-justify">
               For all upcoming training courses, please see the <router-link :to="{ name: 'calendar' }">calendar</router-link>.
            </p>

            <p class="text-justify">
               If you would like to find out when the next coaching
               course opportunity is, email
               <a href="coaching@touch-belgium.be">coaching@touch-belgium.be</a>.
            </p>

            <div v-show="false">
               <h3 id="referee-resources">Resources</h3>

               <p class="text-justify lead font-italic">
                  In this section, you can find links or information
                  to useful resources that you will need as a coach.
               </p>

               <b-list-group class="mb-3">
                  <b-list-group-item v-for="doc in coaching_files" :key="doc.title">
                     <a :href="doc.file">{{doc.title}}</a>
                  </b-list-group-item>
               </b-list-group>

               <b-card
                 header-bg-variant="info"
                 header-text-variant="white"
               >
                  <template slot="header">
                     <span class="mr-2" v-html="info_icon"></span> Tip !
                  </template>
                  <b-card-text>
                     The coaching community in Belgium exists to help
                     all coaches grow and develop. The <a href="https://www.facebook.com/groups/443114846439576/" target="_blank"> Touch
                     Belgium Facebook page</a> for coaches is a forum to ask
                     questions, exchange ideas and share resources.
                  </b-card-text>
               </b-card>

               <h3 id="tb-coaches" class="mt-4">Touch Belgium FIT qualified coaches</h3>
               <b-row>
                  <b-col>
                     <p class="text-justify">Phil, Karla, etc</p>
                  </b-col>
               </b-row>
            </div>
         </b-col>

         <b-col class="d-none d-lg-inline" cols="0" lg="3">
            <b-navbar v-b-scrollspy="{ element: 'body', offset: 120 }" class="sticky-top flex-column">
               <b-navbar-brand href="#">Navigation</b-navbar-brand>
               <b-nav pills class="flex-column">
                  <b-nav-item to="#referees">Coaching</b-nav-item>
                  <b-nav-item to="#coaching-pathway">Coaching pathway</b-nav-item>
                  <b-nav-item to="#coaching-courses">Coaching courses</b-nav-item>
                  <b-nav pills class="flex-column">
                     <b-nav-item class="ml-3 my-1" to="#upcoming-courses">Upcoming courses</b-nav-item>
                  </b-nav>
                  <b-nav-item v-show="false" to="#coaching-resources">Resources</b-nav-item>
                  <b-nav-item v-show="false" to="#tb-coaches">Touch Belgium coaches</b-nav-item>
               </b-nav>
            </b-navbar>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import FixedTBLogo from "../components/FixedTBLogo.vue";

 import octicons from "@primer/octicons";
 import { mapGetters, mapState } from "vuex";

 export default {
   data () {
     return {

     }
   },
   methods: {

   },
   mounted () {
     /* try {
      *   this.$Progress.start();
      *   await this.$store.dispatch("members/fetch_coaches")
      *   await this.$store.dispatch("files/fetch_files");
      *   this.$Progress.finish();
      * } catch (e) {
      *   this.error = true;
      *   this.$Progress.fail();
      * } */
   },
   computed: {
     info_icon () {
       return octicons["info"].toSVG( { "class": "white_icon" } );
     },
     ...mapGetters("files", [
       "coaching_files"
     ])
   },
   components: { FixedTBLogo }
 }
</script>

<style scoped lang="scss">
 @import "~assets/css/custom-bootstrap-variables";

 .sticky-top {
   top: $nav-link-height + 4rem;
 }
</style>
