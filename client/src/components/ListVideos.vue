<template>
    <div class="col-xl-7">
          <div class="mt-4">

            <!-- Search Form -->
            <form>
              <div class="input-group mb-3">
                <input v-model="input_search"
                  type="text"
                  class="form-control"
                  placeholder="Search videos across YouTube..."
                  aria-label="Search videos across YouTube..."
                  aria-describedby="go-button-addon"
                  auto-complete="off"
                  autofocus>
                <div class="input-group-append">
                  <button @click="search()"
                    class="btn btn-outline-secondary"
                    type="button"
                    id="go-button-addon">
                    Go!
                  </button>
                </div>
              </div>
            </form>

            <!-- Video List looping-->
            <div v-for="(video, index) in allVideos" :key="index">
              <ul class="list-unstyled">
                <a class="video-link" >
                  <li class="media my-4">
                    <img class="mr-3" v-bind:src="video.snippet.thumbnails.default.url" alt="Thumbnail">
                    <div class="media-body">
                      <h5 class="mt-0 mb-1">{{video.snippet.title}}</h5>
                      {{video.snippet.description}}
                      <br/>
                      <button class="btn btn-sm btn-primary" v-if="islogin===true" @click="like(video.snippet)">Like this Video!</button>
                    </div>
                  </li>
                </a>
              </ul>
            </div>
            <!-- video list -->

          </div>
        </div>
</template>

<script>
export default {
  name : 'listvideos',
  computed : {
    allVideos(){
      return this.$store.state.allVideos
    },
    islogin(){
      return this.$store.state.islogin
    }
  },
  data(){
    return {
      input_search : ''
    }
  },
  methods : {
    getAllVideos(){
      return this.$store.dispatch('getAllVideos')
    },
    search(){
      let params = {
        'maxResults': '5',
        'part': 'snippet',
        'q': this.input_search,
        'type': 'video',
        'key': 'AIzaSyAZw1ibK6njKrV26kFOU8V8AB5hHkMccbY'
      }

      axios.get('https://www.googleapis.com/youtube/v3/search', {params})
      .then((response)=>{
        this.$store.commit('mutAllVideos',response.data.items)
      })
      .catch((err)=>{
        console.log('error in getting all videos',err)
      })
    },
    like(video){
      this.$store.commit('like',video)
    },
    showDesc(){
      console.log(showDesc)
    }
  },
  created(){
    this.getAllVideos()
  }
}
</script>

<style>

</style>
