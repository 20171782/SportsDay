<template>
    <div >

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 9:3; animation: push">

            <ul class="uk-slideshow-items">
                <li class="uk-overlay uk-overlay-primary" :key="key" v-for="(item, key) in houses">
                    <img :src="item.img" alt="" uk-cover>
                    <div class="uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle"></div>
                    <div class="uk-position-top uk-overlay uk-overlay-hidden uk-text-center"><h1 class="uk-text-bold">{{data.completed_events_count}} Events Completed</h1></div>
                    <div class="uk-position-center uk-overlay uk-overlay-hidden uk-text-center"><h1 class="uk-text-bold">{{item.points}} Points</h1></div>
                    <div class="uk-position-bottom uk-overlay uk-overlay-hidden uk-text-center"><h1 class="uk-text-bold">{{data.pending_events_count}} Events Remains </h1></div>

                </li>

            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>


    </div>
</template>

<script>
    export default {
        name: "carousel",
        data(){
            return {
                data:'',
                houses:[],
                test:[]
            }
        },
        created(){
            let me = this;
            fetch('https://sports.ncu.edu.jm/house-tally-results-data?token=21232f297a57a5a743894a0e4a801fc3')
                .then(
                        function(response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }
                        // Examine the text in the response
                        response.json().then(function (data) {
                                me.data=data.data;
                                for(let key in data.data.tally){
                                    let mime_type = data.data.tally.Fletcher.mime_type;
                                    const img = data.data.tally[key].crest;
                                    me.houses.push({
                                        name: key,
                                        points: data.data.order[key],
                                        img:`data:${mime_type};base64,${img}`
                                    });
                                }});
                            }
                        )
                            .catch(function (err) {
                                console.log('Fetch Error :-S', err);
                            });


                     }

    }
</script>

<style scoped>

</style>