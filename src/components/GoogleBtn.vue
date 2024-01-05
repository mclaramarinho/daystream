<template>
  <v-btn :href="href" :onmouseup="() => login()" class="google-btn">
    <span class="google-icon"><v-icon icon="mdi-google" size='2.5vh' color="var(--dark-blue)" /></span>
    Authorize with Google
  </v-btn>
</template>


<script lang="ts">
export default{
  props: {
    href: {type: String, required: true}
  },
  
  created(){
        
    },
    data(){
      return{
      }
    },
    
    methods:{
      login() : void{
        this.$emit('loginAttempt');
      }
    },
    emits: ['loginAttempt']
}
</script>

<style scoped>
.google-icon{
    padding: 1vw;
}
.google-btn{
  font-size: 1.1rem;
}
</style>