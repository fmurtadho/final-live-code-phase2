import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin : false,
    currentuser : '',
    allVideos : '',
    likedvideos : [],
    trending : ''
  },
  mutations: {
    mutlogin(state,payload){
      state.islogin = payload
    },
    mutuser(state,payload){
      state.currentuser = payload
    },
    mutAllVideos(state,payload){
      state.allVideos = payload
    },
    like(state,payload){
      let current = state.likedvideos
      let unique = true

      for(let i = 0 ; i < current.length ; i ++){
        if(current[i] === payload){
          unique = false
        }
      }
      if(unique === true){
        current.push(payload)
        state.likedvideos = current
      }

      let output = []

      if(unique === false){
        for(let i = 0 ; i < current.length ; i ++){
          if(current[i] !== payload){
            output.push(current[i])
          }
        }
        state.likedvideos = output
      }
    }
  },
  actions: {
    login(state,payload){
      state.commit('login',payload)
    },
    getAllVideos(state,payload){
      
      let params = {
        'maxResults': '5',
        'part': 'snippet',
        'q': '',
        'type': 'video',
        'key': 'AIzaSyAZw1ibK6njKrV26kFOU8V8AB5hHkMccbY'
      }

      axios.get('https://www.googleapis.com/youtube/v3/search', {params})
      .then((response)=>{
        state.commit('mutAllVideos',response.data.items)
      })
      .catch((err)=>{
        console.log('error in getting all videos',err)
      })
    }
  }
})
