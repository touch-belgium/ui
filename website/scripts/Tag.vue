<template functional>
   <div class="chip">{{ props.word }}</div>
</template>

<script>
 export default {
   props: ['word'],
 }
</script>

<style scoped lang="scss">
 @import "custom-color-variables";
</style>
