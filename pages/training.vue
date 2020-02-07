<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Training and courses</h2>
            <p class="text-justify">
               Would you like to become a qualified Touch referee or
               learn more about the rules of the game? Are you
               interested in a possible coaching pathway, or
               opportunities to teach the sport to others?
            </p>

            <p class="text-justify">
               There are so many ways to become involved in Touch both
               on and off the field. Check out the different courses
               below to find out more, or look at the <nuxt-link :to="{ name: 'calendar' }">calendar</nuxt-link> to
               find out when the next course will take place.
            </p>
         </b-col>
      </b-row>
      <b-row>
         <b-col>
            <h3>Referee courses</h3>
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
            </b-list-group>

            <h3>Coaching courses</h3>

            <b-list-group class="mb-3">
               <b-list-group-item variant="warning">No upcoming events to show</b-list-group-item>
            </b-list-group>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 export default {
   async asyncData() {

   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "Training and Courses - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {

   }
 }
</script>

<style scoped lang="scss">
</style>
