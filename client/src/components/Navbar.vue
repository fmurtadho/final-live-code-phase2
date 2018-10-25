<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Vuetube</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <!-- use .active on .nav-item if you want to highlight current link -->
                        <li class="nav-item">
                            <!-- <a href="JavaScript:Void(0);" >
                                Trending
                            </a> -->
                            <router-link class="nav-link" :to="`/`">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a href="JavaScript:Void(0);" >
                                Trending
                            </a> -->
                            <router-link class="nav-link" :to="`/trending`">Trending</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a href="JavaScript:Void(0);" class="nav-link">
                                Liked Videos <span class="badge badge-info">13</span>
                            </a> -->
                            <router-link class="nav-link" :to="`/liked`">Liked Videos</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <button class="btn btn-danger" v-if="islogin===false" data-toggle="modal" data-target="#exampleModalCenter">Login</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-danger" v-if="islogin===true" @click="signout()">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Email<br>
                    <input type="text" v-model="login_email"><br>
                    Password<br>
                    <input type="password" v-model="login_password">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="signin()" >Login</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Navbar',
    data(){
        return {
            islogin :false,

            login_email : '',
            login_password : ''
        }
    },
    methods : {
        signin(){
            let self = this
            
            let data = {
                email : self.login_email,
                password : self.login_password
            }

            axios({
                method : 'POST',
                url : 'http://localhost:3000/users/signin',
                data
            })
            .then((response)=>{
                console.log(response)

                self.login_email = ''
                self.login_password = ''

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('currentuser', response.data.userId)

                this.islogin = true
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        signout(){
            localStorage.removeItem('token')
            localStorage.removeItem('currentuser')

            this.islogin = false
        },
        checkToken(){
            let token = localStorage.getItem('token')
            if(token){
                self.islogin = true
            }
        }
    },
    mounted(){
        this.checkToken()
    }
}
</script>

<style>

</style>
