<template>
  <div class="name">
    <Rotulo nome="Nome">
        <input type="text"  @input="alterarNome" :value="value.nome">
    </Rotulo>
    <Rotulo nome="Sobrenome">
        <input type="text"  @input="alterarSobrenome" :value="value.sobrenome">
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo.vue'
export default {
   props:{
        value:{
            type:Boolean,
            required: true
        }
    },
  components:{Rotulo},
  methods:{
      alterarNome(event){
          this.$emit('input', {nome: event.target.value,
           sobrenome: this.value.nome})
      },
       alterarSobrenome(event){
          this.$emit('input', {nome: this.value.nome,
           sobrenome: event.targer.value})
      }
  }
}
</script>
<style>
.N-input{
    flex: 1;
    font-size: 1.4rem;
    outline: none;
    border: 1px solid #DDD;
    padding: 5px 10px;
    border: 1px solid rgba(175, 170, 170, 0.623);
    width: 600px;
    height: 25px;
    border-radius: 5px;
    text-align: left;
}
</style>