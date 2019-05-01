<template>
   <v-chip @click="add_tag" @input="remove_tag" :close="this.close"><v-avatar :class="color">{{letter}}</v-avatar>{{ this.word }}</v-chip>
</template>

<script>
 export default {
   props: ['word', 'close'],
   methods: {
     add_tag () {
       this.$parent.$emit('add_tag', this.word);
     },
     remove_tag () {
       this.$parent.$emit('remove_tag', this.word);
     }
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
   },
 }

</script>

<style scoped lang="scss">
 @import "custom-color-variables";
</style>
