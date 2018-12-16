<template functional>
   <div class="navbar-fixed">
      <nav>
         <div class="nav-wrapper">
            <div class="left">
               <a href="/" class="brand-logo"><img src="~Images/logo-tb.png" style="height: 64px" alt="TB logo" /></a>
            </div>
            <div class="social-links-navbar left hide-on-med-and-down">
               <a target="_blank" href="https://www.instagram.com/touchbelgium/">
                  <div class="icon-insta" data-icon="ei-sc-instagram" data-size="m"></div>
               </a>
               <a target="_blank" href="https://facebook.com/touchbelgium">
                  <div class="icon-fb" data-icon="ei-sc-facebook" data-size="m"></div>
               </a>
               <a target="_blank" href="https://twitter.com/touchbelgium">
                  <div class="icon-twitter" data-icon="ei-sc-twitter" data-size="m"></div>
               </a>
               <a target="_blank" href="https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT">
                  <div class="icon-yt" data-icon="ei-sc-youtube" data-size="m"></div>
               </a>
            </div>


            <ul id="events" class="dropdown-content">
               <li><a href="#!">Tournaments and results</a></li>
               <li><a href="#!">Calendar</a></li>
               <!-- <li class="divider"></li> -->
               <li><a href="#!">AGM</a></li>
            </ul>

            <ul id="get_involved" class="dropdown-content">
               <li><a href="#!">Where to play</a></li>
               <li><a href="#!">Referees</a></li>
               <li><a href="#!">Coaches</a></li>
               <li><a href="#!">National teams</a></li>
            </ul>

            <ul id="about" class="dropdown-content">
               <li><a href="#!">What is touch?</a></li>
               <li><a href="#!">Where to play</a></li>
               <li><a href="#!">Training/courses</a></li>
               <li><a href="#!">Rules and regulations</a></li>
            </ul>

            <ul id="tb" class="dropdown-content">
               <li><a href="#!">Members</a></li>
               <li><a href="#!">Committee</a></li>
               <li><a href="#!">Contact</a></li>
            </ul>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
               <li><a href="news">News</a></li>
               <li><a class="dropdown-trigger" href="#" data-target="events">Events</a></li>
               <li><a class="dropdown-trigger" href="#" data-target="get_involved">Get Involved</a></li>
               <li><a class="dropdown-trigger" href="#" data-target="about">About Touch</a></li>
               <li><a href="#">Sponsorship</a></li>
               <li><a class="dropdown-trigger" href="#" data-target="tb">Touch Belgium</a></li>
            </ul>

            <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><div data-icon="ei-navicon" data-size="m"></div></a>

            <!-- Contact us comes after in here but it is shown before the rest of the menu items (wanted)  -->
            <!-- <div id="contact-us" class="right hide-on-med-and-down">
                 <span>Contact us !</span>
                 </div> -->
         </div>
      </nav>
   </div>

</template>

<script>
</script>

<style scoped lang="scss">
 @import "custom-color-variables";

</style>
