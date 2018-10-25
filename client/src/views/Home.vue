<template>
  <div class="home">
    <br>
    <!-- Content -->
    <div class="container-fluid">
      <div class="row">

        <!-- list video -->
        <list-videos></list-videos>

        <!-- player and detail   -->
        <!-- <player-and-detail></player-and-detail> -->
      
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

  }
}
</script>
