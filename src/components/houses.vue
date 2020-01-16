<template>
    <div  class="">
        <div  class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " uk-grid>
        <div class="uk-card-media-left uk-cover-container">
            <img src="" alt="" uk-cover>
            <canvas width="600" height="400"></canvas>
        </div>
        <div>
            <div  class="uk-card-body">
                <!--<p class="border" :style="{background:Beau.color}"></p>-->
                <!--<p>{{Beau.publish_date}}</p>-->

            </div>
        </div>
    </div>

        </div>



</template>

<script>
    import axios from 'axios'
    export default {
        name: "houses",
        data(){
          return {
              data:''
          }
        },


            // Crests(){
            //    return this.Beau.crest
            // },
            // test(){
            //    return atob(this.Crests)
            // }
        created(){
            fetch('https://sports.ncu.edu.jm/house-tally-results-data?token=21232f297a57a5a743894a0e4a801fc3').then(res => {
                return res.json();
            }).then(res => {
             this.data=res.data
                ;
            }).catch(function (error) {

                console.log(error);
            })



        }
    }
</script>

<style scoped>
.border{
    width: 50px;
    height: 50px;
    border: 1px solid black;
}
</style>