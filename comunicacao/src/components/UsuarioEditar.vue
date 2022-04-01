<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>{{idade}}</p>
        <button @click="alterarIdade">Alterar idade</button> 
        <button @click="idadeFn">Alterar idade com callback</button>
    
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props:{
        idade:{
            type:Number,
            required:true
        },
        idadeFn:{
            type:Function
        }
    },
    methods:{
        alterarIdade(){
            this.idade = 33
            barramento.alterarIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
