<template>
   <b-card
     border-variant="dark"
     header-border-variant="dark"
   >
      <template v-slot:header>
         <p class="h4">Upcoming events</p>
      </template>
      <b-list-group>
         <b-list-group-item
           v-if="!competitions.length"
         >
            No upcoming events in the near future.
         </b-list-group-item>
         <b-list-group-item
           v-for="comp in competitions"
           :key="comp.id"
           :to="{ path: comp.router }"
         >
            <p class="h5">{{ comp.name }}</p>
            <p>{{ comp.short_description }}</p>
            <small class="d-block">Starts: {{ $moment(comp.start_date).fromNow() }}</small>
         </b-list-group-item>
      </b-list-group>
   </b-card>
</template>

<script>
 export default {
   props: ["competitions"],
   data () {
     return {

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
