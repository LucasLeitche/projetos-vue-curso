<template>
  <div class="Usuario">
      <h2>Usuário</h2>
      <br>
      <router-view name="menuAlternativo"/>
      <router-view />
      <button sucesso v-text="'Voltar'" 
      @click="irPara"></button>
      <br>
  </div>
</template>

<script>


export default {
    methods:{
    irPara(){
      this.$router.push({name:'Inicio'})
    }
  }
}
</script>

<style>

</style>