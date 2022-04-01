<template>
  <div id="app">
    <v-header/>
  </div>
</template>

<script>

import header from './components/header.vue'




export default {
  components:{
    'v-header': header
  },
  data(){
    return{
      title:'Olá Mundo',
        vazioCls: true
    }
  }
  } 
</script>

<style>
#app {
  
}
</style>
