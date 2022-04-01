<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <br>
      <p><strong>Codigo: </strong>{{id}}</p>
      <router-link :to="{name:'usuarioEditar', params: {id:id}, query:{completo:true, lingua:'pt-br'}, hash:'#rodape'}" 
      tag="button" h primario >Editar </router-link>
      <hr>
  </div>
</template>

<script>
export default {
props:['id']
}
</script>

<style>

</style>