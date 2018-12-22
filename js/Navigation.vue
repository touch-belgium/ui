<template>
</template>

<script>
 export default {
   data: () => ({
     social_links: [
       {
         url: "https://www.instagram.com/touchbelgium/",
         cls: "icon-insta",
         icon: "ei-sc-instagram"

       },
       {
         url: "https://facebook.com/touchbelgium",
         cls: "icon-fb",
         icon: "ei-sc-facebook"

       },
       {
         url: "https://twitter.com/touchbelgium",
         cls: "icon-twitter",
         icon: "ei-sc-twitter"

       },
       {
         url: "https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT",
         cls: "icon-yt",
         icon: "ei-sc-youtube"

       },
     ],
     sections: [
       {
         name: "News",
         url: {name: "news"},
         subsections: []
       },
       {
         name: "Events",
         subsections: [
           {
             name: "Tournaments and results",
             url: "/competitions"
           },
           {
             name: "Calendar",
             url: "/template"
           },
           {
             name: "AGM",
             url: "/template"
           }
         ]
       },
       {
         name: "Get Involved",
         subsections: [
           {
             name: "Where to play",
             url: "/template"
           },
           {
             name: "Referees",
             url: "/template"
           },
           {
             name: "Coaches",
             url: "/template"
           },
           {
             name: "National teams",
             url: "/template"
           }
         ]
       },
       {
         name: "About touch",
         subsections: [
           {
             name: "What is touch ?",
             url: "/template"
           },
           {
             name: "Where to play ?",
             url: "/template"
           },
           {
             name: "Training/courses",
             url: "/template"
           },
           {
             name: "Rules and regulations",
             url: "/template"
           }
         ]
       },
       {
         name: "Sponsorship",
         url: {name: "sponsorship"},
         subsections: []
       },
       {
         name: "Touch Belgium",
         subsections: [
           {
             name: "Members",
             url: "/template"
           },
           {
             name: "Committee",
             url: "/template"
           },
           {
             name: "Contact",
             url: "/template"
           },
         ]
       },
     ],
     langs: ['EN', 'FR', 'NL']
   })
 }
</script>

<style>
</style>
