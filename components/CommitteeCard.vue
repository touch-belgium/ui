<template>
   <b-col cols="12" md="4" lg="3" class="mb-4">
      <b-card no-body class="shadow overflow-hidden" style="height: 100%;"
              :header="person.committee_position">
         <div class="pic_square" v-show="false">
            <b-card-img top :src="person.picture" class="rounded-circle p-3 ref_pic"></b-card-img>
         </div>
         <b-card-body>
            <p class="h6">{{person.name}}</p>
            <b-card-text>
               <p><a :href="`mailto:${person.email}`">{{person.email}}</a></p>
            </b-card-text>
         </b-card-body>
      </b-card>
   </b-col>
</template>

<script>

 export default {
   props: ["person"],
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
 .pic_square {
   width: 100%;
   height: 0;
   padding-bottom: 100%;
   opacity: 1;
   background: white;
   position: relative;
 }

 .ref_pic {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
 }
</style>
