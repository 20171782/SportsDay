<template>
  <div class="home">
    <cor></cor>
    <houses></houses>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  components: {

  },
  data(){
   return{
     data:''
   }
  },

  created(){
    fetch('https://sports.ncu.edu.jm/house-tally-results-data?token=21232f297a57a5a743894a0e4a801fc3').then(res => {
      return res.json();
    }).then(res => {
      // console.log(res.data)
      ;
    }).catch(function (error) {

              console.log(error);
            })

  }
}
</script>
