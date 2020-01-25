<template>
   <b-card
     border-variant="primary"
     header="Primary"
     header-bg-variant="primary"
     header-text-variant="white"
   >
      <template v-slot:header>
         <p class="h4">Ongoing events</p>
      </template>
      <b-list-group>
         <b-list-group-item
           v-for="comp in competitions"
           :key="comp.id"
           :to="{ path: comp.router }"
         >
            <p class="h5">{{ comp.name }}</p>
            <p>{{ comp.short_description }}</p>
            <small class="d-block">Started: {{ $moment(comp.start_date).fromNow() }}</small>
            <small class="d-block">Ends: {{ $moment(comp.end_date).fromNow() }}</small>
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
