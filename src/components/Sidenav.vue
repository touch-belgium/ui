<template>
   <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
      <v-list dense class="pt-0">
         <template v-for="section in sections">
            <v-list-group v-if="section.subsections.length">
               <v-list-tile slot="activator">
                  <v-list-tile-content>
                     <v-list-tile-title>{{ section.name }}</v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>


               <router-link
                 :to="sub.url"
                 tag="v-list-tile"
                 v-for="sub in section.subsections"
                 :key="sub.name"
               >
                  {{sub.name}}
               </router-link>
            </v-list-group>
               <router-link tag="v-list-tile" v-else :to="section.url">{{section.name}}</router-link>
         </template>
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
