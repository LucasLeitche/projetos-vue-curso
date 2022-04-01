<template>
  <div class="usuario-editar">
      <h3>Usuario Editar</h3>
      <p><strong>Codigo </strong>{{id}}/ {{$route.params.id}}</p>
      <p><strong>Completo: </strong>{{$route.query.completo ? 'Sim' : 'Não'}}</p>
      <p><strong>Completo: </strong>{{$route.query.lingua}}</p>
      <button @click="confirmar = true">Confirmar</button>
      <div id="rodape">
        Cuso Vue
      </div>

  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next){
    console.log('Navengando mais internamente ainda')
    next()
  },
    props:['id'],
    data(){
      return{
        confirmou: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirmou){
        next()
      }else{
        if(confirm('deseja sair?')){
          next()
        } else{
          next(false)
        }
      }
        
    }
}
</script>

<style>
  #rodape{
    margin-top:1000px;
  }
</style>