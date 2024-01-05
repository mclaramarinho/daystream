<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import getAuthCookie from './utils/cookies';
</script>

<template>
  
  <!-- <header>
    
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      
  </header> -->

  <RouterView />
</template>

<script lang="ts">
export default {
}
</script>