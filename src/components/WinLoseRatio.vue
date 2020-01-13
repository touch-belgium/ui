<script>
 import { Doughnut } from 'vue-chartjs'

 export default {
   extends: Doughnut,
   props: ["won", "lost", "tied"],
   mounted () {
     this.renderChart({
       datasets: [{
         data: [this.won, this.lost, this.tied],
         backgroundColor: ["#82F40C", "#E9485C", "#F9BD22"]
       }],

       // These labels appear in the legend and in the tooltips when hovering different arcs
       labels: [
         'Won',
         'Lost',
         'Tied'
       ]
     }, {
       responsive: true,
       maintainAspectRatio: false
     })
   }
 }
</script>

<style>
</style>
