<template>
    <div class="fullscreen-splash">
        <div class="logo-container">
            <img class="logo-img" src="../assets/DayStream-logo.png" alt="">
            <v-progress-linear v-if="isLoading" indeterminate></v-progress-linear>
            <google-btn :href="authBtnURL" v-if="showLoginBtn" @loginAttempt="()=>authenticate()"></google-btn>
            <h1 v-if="!isLoading && !showLoginBtn">logged in</h1>
        </div>
    </div>
</template>



<script lang="ts">
import GoogleBtn from '@/components/GoogleBtn.vue';
import getAuthCookies from '@/utils/cookies';
import generateAuthUrl from "@/http/authentication";
export default {
    name: 'SplashScreen',
    components: {
    GoogleBtn,
},
    data(){
        return{
            isLoading: false,
            showLoginBtn: true,
            authBtnURL: "",
            authCookies: getAuthCookies()
        }
    },
    created(){
        generateAuthUrl().then(r => this.authBtnURL = r || "");
    },
    mounted(){
        console.log(getAuthCookies())
    },
    methods: {
        authenticate(){
        }
    },
}

</script>

<style scoped>
.fullscreen-splash{
    height: 100vh;
  background-color: #FFF2CE;
}
.logo-container{
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    justify-content: center;
    text-align: center;
    align-items: center;
}
.logo-img{
    width: 80vw;
}
.v-progress-linear--active{
    max-width: 70vw !important;
}
</style>
