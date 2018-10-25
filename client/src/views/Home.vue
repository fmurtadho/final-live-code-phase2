<template>
  <div class="home">
    <br>
    <h3>WELCOME TO VUETUBE !</h3>

    <!-- Content -->
    <div class="container-fluid">
      <div class="row">

        <!-- list video -->
        <list-videos></list-videos>

        <!-- player and detail   -->
        <player-and-detail></player-and-detail>
      
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListVideos from '@/components/ListVideos.vue'
import PlayerAndDetail from '@/components/PlayerAndDetail.vue'

export default {
  name: 'home',
  components: {
    ListVideos,
    PlayerAndDetail
  },
  methods : {
    test(){
      axios({
        method : 'GET',
        url :'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId={channel_id}&maxResults=5&key={app_key}'
        
      })
    }

  }
  
}
</script>

AIzaSyAZw1ibK6njKrV26kFOU8V8AB5hHkMccbY
