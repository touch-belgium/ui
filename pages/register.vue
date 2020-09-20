<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Player registration form</h2>
            <p class="text-justify">
               Touch Belgium is the official National Touch
               Association (NTA) of Belgium. Touch Belgium is
               registered with the Federation of Internation Touch
               (FIT) and the European Federation of Touch (EFT). All
               players that wish to partake in Touch tournaments
               hosted by FIT associated member clubs and National
               Associations, must be registered with their local NTA.
            </p>
            <p class="text-justify">
               <span class="font-weight-bold">
                  By clicking the submit button below you hereby
                  consent to Touch Belgium (Official NTA of Belgium)
                  storing and using the above information for
                  activities related to your registration and
                  participation in Touch Belgium events and
                  activities.
               </span>
               This information will not be shared with other
               individuals or associations outside of Touch Belgium,
               without your explicit consent.
            </p>
            <b-form @submit="on_submit" class="mb-4">
               <div class="form-group form-row">
                  <div class="col">
                     <label for="season">Season</label>
                     <b-form-input type="text" id="season" v-model="season" class="form-control" placeholder="YYYY/YYYY" maxlength="20" aria-describedby="input-live-help"></b-form-input>
                     <b-form-text id="input-live-help">
                        The season starts on September 1st.
                     </b-form-text>
                  </div>
                  <div class="col">
                     <label for="first_name">First name</label>
                     <b-form-input type="text" id="first_name" v-model="first_name" class="form-control" placeholder="First name" required maxlength="49"></b-form-input>
                  </div>
                  <div class="col">
                     <label for="family_name">Family name</label>
                     <b-form-input type="text" id="family_name" v-model="family_name" class="form-control" placeholder="Family name" required maxlength="50"></b-form-input>
                  </div>
               </div>
               <div class="form-group">
                  <label for="email_input">Email address</label>
                  <b-form-input type="email" class="form-control" input="email_input" v-model="email_address" aria-describedby="emailHelp" placeholder="Enter email" required maxlength="100"></b-form-input>
               </div>
               <div class="form-group">
                  <label for="club">Touch club</label>
                  <b-form-select class="form-control" id="club" v-model="touch_club">
                     <option>Other</option>
                     <option v-for="club in belgian_clubs">{{club.name}}</option>
                  </b-form-select>
               </div>
               <div class="form-group">
                  <label for="dob">Date of birth</label>
                  <b-form-datepicker id="dob" v-model="dob" class="form-control mb-2" initial-date="2000-01-01" :date-disabled-fn="disabled_dates" :required="true"></b-form-datepicker>
               </div>
               <p class="lead">
                  <u>Media consent</u>
               </p>
               <p class="text-justify">
                  Throughout the year, Touch Belgium runs various events,
                  including (but not limited to): Touch Tournaments,
                  Social Events, Training Courses, Touch Promotional
                  Activities During these events photos and/or videos may
                  be taken to help in the promotion of Touch and Touch
                  Belgium.
               </p>

               <div class="form-check">
                  <b-form-checkbox class="form-check-input" id="media_consent" v-model="media_consent">
                     I hereby consent to Touch Belgium using images /
                     videos that may contain my likeness for
                     promotional or marketing activities.

                     <p class="text-justify">
                        <span class="font-weight-bold">Please note:</span> Failure
                        to provide the above consent may prohibit
                        participation in these events.
                     </p>
                  </b-form-checkbox>
               </div>
               <div v-show="under18" role="tablist">
                  <b-card no-body class="mb-3">
                     <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-1 variant="warning">
                           For players under the age of 18, please
                           also complete the following:
                        </b-button>
                     </b-card-header>
                     <b-collapse visible id="accordion-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                           <b-card-text>
                              I,
                              <b-form-input class="d-inline-block w-25 form-control"
                                            type="text"
                                            v-model="guardian_name"
                                            placeholder="Legal guardian name"
                                            :required="under18"
                                            maxlength="100"
                              ></b-form-input> ,
                              the legal guardian of <b>{{first_name}} {{family_name}}</b>, hereby
                              provide my consent for the
                              aforementioned to be registered with
                              Touch Belgium.
                           </b-card-text>
                           <b-card-text>
                              Legal guardian contact email:
                              <b-form-input class="d-inline-block w-25 form-control"
                                            type="email"
                                            v-model="guardian_email"
                                            placeholder="Email address"
                                            :required="under18"
                              ></b-form-input>

                           </b-card-text>
                        </b-card-body>
                     </b-collapse>
                  </b-card>
               </div>
               <b-alert
                 :show="info_alert_countdown"
                 dismissible
                 variant="info"
                 @dismissed="info_alert_countdown=0"
               >
                  <span>Registration form submitted !</span>
               </b-alert>
               <b-alert
                 :show="error_alert"
                 dismissible
                 variant="danger"
               >
                  <span>{{error}}</span>
               </b-alert>
               <button type="submit"
                       class="btn btn-primary"
                       :disabled="unfinished_form">
                  Submit
               </button>
            </b-form>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import { mapGetters, mapState, mapMutations } from "vuex";
 import { mapFields } from 'vuex-map-fields';
 import moment from "moment"

 export default {
   async asyncData({ store, error }) {
     try {
       await store.dispatch("clubs/fetch_belgian_clubs");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {
       info_alert_countdown: false,
       error_alert: false,
       error: ""
       /* en: en,
        * nl: nl,
        * fr: fr */
     }
   },
   head () {
     return {
       title: "Register - Touch Belgium"
     }
   },
   methods: {
     async on_submit (evt) {
       try {
         evt.preventDefault();
         await this.$store.dispatch("register/post_form");
         evt.target.reset();
         this.info_alert_countdown = 10;
         this.error_alert = false
       } catch (e) {
         this.error_alert = true;
         /* Just get the first error, user will resend until there are
            no more server-side errors */
         this.error = e.response.data[Object.keys(e.response.data)[0]][0];
       }
     },
     disabled_dates (ymd, date) {
       return moment().diff(moment(date)) < 0;
     }
   },
   mounted () {

   },
   computed: {
     ...mapGetters("register", [
       "under18",
       "unfinished_form"
     ]),
     ...mapFields("register", [
       "season",
       "first_name",
       "family_name",
       "email_address",
       "touch_club",
       "dob",
       "media_consent",
       "guardian_name",
       "guardian_email"
     ]),
     ...mapState("clubs", [
       "belgian_clubs"
     ])
   },
   components: {

   }
 }
</script>

<style scoped lang="scss">
</style>
