<template>
   <div class="page-footer">
      <p>asdf</p>
   </div>
</template>

<script>
 export default {
   name: 'Footer',
 }
</script>

<style lang="scss">
 /* @import "custom-color-variables"; */

 $tb-black-light: black;
 $tb-black: black;

 .page-footer {
   background: $tb-black-light;
   z-index: 2;
   position: relative;
   .v-list {
     background: $tb-black-light;
     a {
       color: white;
       text-decoration: none;
     }
   }
   .footer-copyright {
     background: $tb-black;
     min-height: 50px;
     color: color("grey", "lighten-4");
     .container {
       padding: 5px;
       span {
         a {
           text-decoration: none;
           color: color("grey", "lighten-4");
           div.icon.icon--ei-sc-github {
             fill: color("grey", "lighten-4");
           }
         }
       }
     }
   }
 }
</style>
