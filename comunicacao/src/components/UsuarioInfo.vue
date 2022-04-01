<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{inverterNome()}}</strong></p>
        <p>{{idade}}</p>
        <button @click="reiniciarNome">Reiniciar o nome</button>
        <button @click="nomeFn">Alterar Nome Callback</button>
    </div>
</template>

<script>

import barramento from '@/barramento'

export default {
    props: {
        nome:{
         type:String,
         required: true
        },
         nomeFn: Function,
         idade:{
             type: Number,
             required:true
         },
         },
        methods:{
            inverterNome(){
                return this.nome.split('').reverse().join('')
            },
            reiniciarNome(){
                return this.nome = 'Pedro',
                this.$emit('nomeMudou', this.nome) // é possivel associar um evento a função com a notação $emit('nomedoEvento', valor)
            }
        },
        created(){
            barramento.quandoIdadeMudar(idade =>{
                 this.idade = idade
            })
        }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
