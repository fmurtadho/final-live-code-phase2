<template>
    <div>
        <h3>Liked Videos</h3>
        <!-- Video List looping-->
        <ul>
            <div v-for="(video, index) in liked" :key="index">
                <li>{{video.title}}</li>
            </div>
        </ul>
        <!-- video list -->
    </div>
</template>

<script>
export default {
    name : 'liked_videos',
    computed : {
        liked(){
            return this.$store.state.likedvideos
        }
    },
    created(){
        console.log('di dalam like')
    }
}
</script>

<style>

</style>
