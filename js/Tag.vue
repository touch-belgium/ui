<template>
   <v-chip><v-avatar :class="color">{{letter}}</v-avatar>{{ this.word }}</v-chip>
</template>

<script>
 import colors from 'vuetify/es5/util/colors';
 export default {
   props: ['word'],
   mounted () {
     console.log(this.color_list);
   },
   computed: {
     letter () {
       return this.word.charAt(0).toUpperCase();
     },
     color_list () {
       return Object.keys(colors).map(x => x.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`));
     },
     color () {
       return this.color_list[this.letter.charCodeAt(0) % Object.keys(colors).length];
     },
   }
 }

</script>

<style scoped lang="scss">
 @import "custom-color-variables";
</style>
