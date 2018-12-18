<template functional>
   <v-chip>{{ props.word }}</v-chip>
</template>

<script>
 export default {
   props: ['word'],
 }
</script>

<style scoped lang="scss">
 @import "custom-color-variables";
</style>
