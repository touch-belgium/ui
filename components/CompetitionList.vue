<template>
   <b-list-group>
      <b-list-group-item
        v-for="comp in competitions"
        :key="comp.id"
        :to="{ path: comp.router }"
      >
         <h5>{{ comp.name }}</h5>
         <p>{{ comp.short_description }}</p>
         <small class="d-block">Start: {{ $moment(comp.start_date).fromNow() }}</small>
         <small class="d-block">End: {{ $moment(comp.end_date).fromNow() }}</small>
      </b-list-group-item>
   </b-list-group>
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
