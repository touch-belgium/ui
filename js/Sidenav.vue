<template>
   <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
      <v-list dense class="pt-0">
         <v-list-tile
           v-for="section in sections"
           :key="section.title"
           @click=""
         >
            <!-- <v-list-tile-action>
                 <v-icon>{{ item.icon }}</v-icon>
                 </v-list-tile-action> -->

            <v-list-tile-content>
               <v-list-tile-title>{{ section.name }}</v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>
      </v-list>
   </v-navigation-drawer>
</template>

<script>
 import Navigation from './Navigation.vue';

 export default {
   extends: Navigation,
   data () {
     return {
       drawer: false
     }
   },
   mounted () {
     this.$root.$on('SIGdrawer', () => {
       this.drawer = !this.drawer;
     })
   }
 }
</script>

<style module lang="scss">

</style>
