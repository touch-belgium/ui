<template>
   <div>
      <carousel :pictures="banner_pictures_of('referees')"></carousel>
      <b-container class="mt-3">
         <b-row>
            <b-col cols="12" lg="9">
               <h1 id="referees">Referees</h1>
               <p class="text-justify">
                  Becoming a qualified Touch referee allows you to
                  master the rules of the game and ensure that matches
                  are played to the highest standards of respect and
                  fair play. Playing and refereeing are very
                  complementary, being both a player and a referee
                  helps your understanding of the sport and improves
                  your skill level.
               </p>

               <p class="text-justify">
                  We are very proud of our referees that represent
                  Belgium at the highest levels of competition
                  including the European Touch Championships.
               </p>

               <p class="text-justify">
                  Refereeing allows you to take an active part in club
                  and international tournaments from both a sporting
                  and social perspective.

                  <!-- To help master the required signals, our team of
                       referees has created a video demonstrating how to
                       perform each signal, included as part of our <nuxt-link to="#referee-resources">Resources section</nuxt-link> below. -->
               </p>

               <p class="text-justify">
                  Take a look at the information below or <a href="mailto:referee@touch-belgium.be">contact
                  our National Director of Referees</a> if you are up for
                  the challenge!
               </p>

               <h3 id="referee-pathway">Referee pathway</h3>

               <p class="text-justify">
                  Learning to referee in Belgium allows individuals to
                  grow and hone their skills from social tournaments up
                  to international competitions.
               </p>

               <p class="text-justify">
                  There are five levels of referee qualification:
                  <b>Level 1</b> (entry level) through to <b>Level 5</b>
                  (World Cup level).
               </p>


               <ul class="list-unstyled">
                  <b-media tag="li">
                     <template v-slot:aside>
                        <b-img fluid-grow src="~assets/img/l1badge.png" width="100" alt="Level 1 badge"></b-img>
                     </template>
                     <p class="mt-0 mb-1 h5">Level 1</p>
                     <p class="mb-0">
                        At Level 1, referees are able to watch over a
                        game, including counting the touches and
                        awarding touchdowns. A basic level of
                        communication to players and decision-making
                        is required.
                     </p>
                  </b-media>

                  <b-media tag="li" class="mt-4">
                     <template v-slot:aside>
                        <b-img fluid-grow src="~assets/img/l2badge.png" width="100" alt="Level 2 badge"></b-img>
                     </template>

                     <p class="mt-0 mb-1 h5">Level 2</p>
                     <p class="mb-0">
                        At Level 2, referees improve the game by their
                        presence, helping players to avoid penalties
                        and bringing order to games. You need to have
                        held a Level 1 badge for 3 months in order to
                        obtain an upgrade to Level 2.
                     </p>
                  </b-media>

                  <b-media tag="li" class="mt-4">
                     <template v-slot:aside>
                        <b-img fluid-grow src="~assets/img/l3badge.png" width="100" alt="Level 3 badge"></b-img>
                     </template>

                     <p class="mt-0 mb-1 h5">Level 3</p>
                     <p class="mb-0">
                        At level 3, referees create a positive
                        environment to play. They help the game to
                        flow by using consistent communication with
                        players, making timely decisions and
                        anticipating the play. You must hold a Touch
                        Europe Level 2 badge or equivalent to attend a
                        Level 3 course.
                     </p>
                  </b-media>
                  <b-media tag="li" class="mt-4">
                     <template v-slot:aside>
                        <b-img fluid-grow src="~assets/img/l4badge.png" width="100" alt="Level 4 badge"></b-img>
                     </template>

                     <p class="mt-0 mb-1 h5">Level 4</p>
                     <p class="mb-0">
                        At level 4, referees help to raise the level
                        of a game. They deal with challenging
                        situations clearly and quickly, and keep the
                        game moving whilst maintaining
                        consistency. You must hold a recognized Touch
                        Europe Level 3 badge or equivalent for one
                        year to obtain a Level 4 upgrade.
                     </p>
                  </b-media>
                  <b-media tag="li" class="mt-4">
                     <template v-slot:aside>
                        <b-img fluid-grow src="~assets/img/l5badge.png" width="100" alt="Level 5 badge"></b-img>
                     </template>

                     <p class="mt-0 mb-1 h5">Level 5</p>
                     <p class="mb-0">
                        At Level 5, referees enable continuous play
                        and maintain control throughout, including the
                        use of penalties as a last resort. They
                        actively choose an approach to referee a game
                        based on their experience, and current
                        circumstances to reach an outcome. They
                        anticipate several possible next options in
                        play.
                     </p>
                  </b-media>
               </ul>

               <p class="text-justify">
                  The requirements and assessment processes
                  can be found on the <a href="http://www.toucheurope.org/wp-content/uploads/2019/05/Referee-Accreditation-System-Policy-4-May-2019.pdf" target="_blank">European
                  Touch Federation website</a>
               </p>

               <h3 id="referee-courses">Referee courses</h3>

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

               <!-- <h4 id="upcoming-courses">Upcoming referee courses</h4>

                    <b-list-group class="mb-3">
                    <b-list-group-item>
                    <h5>Level 1 English</h5>
                    <p><b>Course Date:</b> Saturday 8th February </p>
                    <p><b>Duration:</b> Full day</p>
                    <p><b>Location:</b> TBC (Probably in Flanders)</p>
                    <p><b>Cost:</b> Free for Touch Belgium Members</p>
                    <p><b>Language:</b> English</p>
                    <p><b>Course presenter:</b> Phil Holliday</p>
                    <p><b>Registration:</b> Please follow the following link
                    and fill in your details on Sheet 1 to register. <a class="long-link" href="https://docs.google.com/spreadsheets/d/11qSOhwU5k5qnN5FDASw3LfIN6NbeBVlhTFZMXUJD1dE" target="_blank">https://docs.google.com/spreadsheets/d/11qSOhwU5k5qnN5FDASw3LfIN6NbeBVlhTFZMXUJD1dE</a></p>
                    </b-list-group-item>
                    <b-list-group-item>
                    <h5>Level 1 French</h5>
                    <p><b>Course Date:</b> Saturday 22nd February</p>
                    <p><b>Duration:</b> Full day</p>
                    <p><b>Location:</b> Boitsfort Rugby Club, Avenue de la Foresterie 2, 1170, Brussels</p>
                    <p><b>Cost:</b> Free for Touch Belgium Members</p>
                    <p><b>Language:</b> French</p>
                    <p><b>Course presenter:</b> Stéphanie Horeau</p>
                    <p><b>Registration:</b> Please follow the following link
                    and fill in your details on Sheet 2 to register. <a class="long-link" href="https://docs.google.com/spreadsheets/d/11qSOhwU5k5qnN5FDASw3LfIN6NbeBVlhTFZMXUJD1dE/edit#gid=426014182" target="_blank">https://docs.google.com/spreadsheets/d/11qSOhwU5k5qnN5FDASw3LfIN6NbeBVlhTFZMXUJD1dE</a></p>
                    </b-list-group-item>
                    </b-list-group> -->

               <p class="text-justify">
                  For all upcoming training courses, please see the <nuxt-link :to="{ name: 'calendar' }">calendar</nuxt-link>.
               </p>

               <p class="text-justify">
                  If you would like to find out when the next theory
                  or practical assessment opportunity is, please email
                  <a href="mailto:refereetraining@touch-belgium.be">refereetraining@touch-belgium.be</a>.
               </p>

               <h3 id="referee-resources">Resources</h3>

               <p class="text-justify lead font-italic">
                  In this section, you can find links or information
                  to useful resources that you will need as a referee.
               </p>

               <p>Documents:</p>
               <b-list-group class="mb-3">
                  <b-list-group-item v-if="!referee_files.length" variant="warning">
                     No documents to show.
                  </b-list-group-item>
                  <b-list-group-item v-for="doc in referee_files" :key="doc.title">
                     <a target="_blank" :href="doc.file">{{doc.title}}</a>
                  </b-list-group-item>
               </b-list-group>

               <p v-if="referee_links.length">Links:</p>
               <b-list-group v-if="referee_links.length" class="mb-3">
                  <b-list-group-item v-for="link in referee_links" :key="link.title">
                     <a target="_blank" :href="link.link">{{link.title}}</a>
                  </b-list-group-item>
               </b-list-group>

               <p class="lead text-justify">Referee signals video made by Sebastien Chassande (Touch France):</p>

               <b-embed
                 type="iframe"
                 src="https://www.youtube.com/embed/c5wNEgVDyBc"
               >
               </b-embed>

               <p class="lead text-justify mt-5">Touch Belgium's FIT V5 rules presentation (EN):</p>

               <b-embed
                 type="iframe"
                 src="https://www.youtube.com/embed/CWtEfLaPpYc"
               >
               </b-embed>


               <p class="text-justify mt-4">
                  For any questions relating to referee resource
                  material, email <a href="mailto:referee@touch-belgium.be">referee@touch-belgium.be</a>.
               </p>

               <b-card
                 header-bg-variant="info"
                 header-text-variant="white"
               >
                  <template slot="header">
                     <font-awesome-icon icon="info-circle" /> Tip !
                  </template>
                  <b-card-text>
                     The <a href="https://www.facebook.com/groups/241062646335242/" target="_blank">Touch Belgium Referees Facebook page</a>
                     is an open community resource where referees can ask
                     questions from fellow referees, share knowledge,
                     expertise and resources.
                  </b-card-text>
               </b-card>


               <h3 id="tb-referees" class="my-4">Touch Belgium referees</h3>

               <b-row>
                  <b-col cols="12" md="6" lg="4" class="mb-4" v-for="ref in referee_board" :key="ref.name">
                     <b-card no-body class="overflow-hidden" style="height: 100%;">
                        <div class="ref_pic_square">
                           <b-card-img top :src="ref.picture" class="rounded-circle p-3 ref_pic"></b-card-img>
                        </div>
                        <b-card-body>
                           <p class="h4">{{ ref.name }}</p>
                           <b-card-text>
                              <p><b>Level: {{ref.referee_level}}</b></p>
                              <p v-if="ref.team">Club: {{ref.team}}</p>

                              <b-modal centered :id="ref.name" :title="ref.name" hide-footer>
                                 <p class="my-2">{{ref.referee_text}}</p>
                                 <b-button class="mt-3" block @click="$bvModal.hide(ref.name)">Close</b-button>
                              </b-modal>
                              <b-button @click="$bvModal.show(ref.name)" variant="outline-primary">More</b-button>

                           </b-card-text>
                        </b-card-body>
                     </b-card>
                  </b-col>
               </b-row>

               <b-button class="my-4" v-b-toggle.belgium-refs variant="primary" v-show="false">Show/hide all Touch Belgium referees</b-button>
               <b-collapse id="belgium-refs" class="mt-4" v-show="false">
                  <b-row>
                     <b-col cols="12" md="4" lg="3" class="mb-4" v-for="ref in normal_refs" :key="ref.name">
                        <b-card no-body class="overflow-hidden" style="height: 100%;">
                           <div class="ref_pic_square">
                              <b-card-img top :src="ref.picture" class="rounded-circle p-3 ref_pic"></b-card-img>
                           </div>
                           <b-card-body>
                              <p class="h6">{{ref.name}}</p>
                              <b-card-text>
                                 <p><b>Level: {{ref.referee_level}}</b></p>
                                 <p>Club: {{ref.team}}</p>
                              </b-card-text>
                           </b-card-body>
                        </b-card>
                     </b-col>
                  </b-row>
               </b-collapse>
            </b-col>

            <b-col class="d-none d-lg-inline" cols="0" lg="3">
               <b-navbar v-b-scrollspy="{ element: 'body', offset: 120 }" class="sticky-top flex-column">
                  <b-navbar-brand>Navigation</b-navbar-brand>
                  <b-nav pills class="flex-column">
                     <b-nav-item to="#referees">Referees</b-nav-item>
                     <b-nav-item to="#referee-pathway">Referee pathway</b-nav-item>
                     <b-nav-item to="#referee-courses">Referee courses</b-nav-item>
                     <b-nav pills class="flex-column">
                        <b-nav-item class="ml-3 my-1" to="#upcoming-courses">Upcoming courses</b-nav-item>
                     </b-nav>
                     <b-nav-item to="#referee-resources">Resources</b-nav-item>
                     <b-nav-item to="#tb-referees">Touch Belgium referees</b-nav-item>
                  </b-nav>
               </b-navbar>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
 import { mapGetters } from "vuex";

 export default {
   async fetch () {
     const { store } = this.$nuxt.context;
     await store.dispatch("banner_pictures/fetch_banner_pictures");
     await store.dispatch("members/fetch_referees");
     await store.dispatch("files/fetch_files");
     await store.dispatch("links/fetch_links");
   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "Referees - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapGetters("banner_pictures", [
       "banner_pictures_of"
     ]),
     ...mapGetters("files", [
       "referee_files"
     ]),
     ...mapGetters("links", [
       "referee_links"
     ]),
     ...mapGetters("members", [
       "referee_board",
       "normal_refs"
     ])
   }
 }
</script>

<style scoped lang="scss">
 .long-link {

 }

 .sticky-top {
   top: $nav-link-height + 4rem;
 }

 .ref_pic_square {
   width: 100%;
   height: 0;
   padding-bottom: 100%;
   opacity: 1;
   background: white;
   position: relative;
 }

 .ref_pic {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
 }
</style>
