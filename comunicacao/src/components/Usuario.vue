<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é: <strong>{{nome}}</strong></p>
        <p>{{idade}}</p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
            :nome="nome"
             @nomeMudou="nome = $event"
            :nomeFn ="reiniciarNome"
            :idade="idade"/> <!--O valor do $event é o segundo paramentro informado na função criada com $emit-->
            <app-usuario-editar
            :idade="idade" 
            :idadeFn="alterarIdadeCallback"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'
import barramento from '@/barramento'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome:'Pedro',
            idade: 22
        }
    },
    methods:{
        alterarNome(){
            this.nome = 'Ana'
        },
        reiniciarNome(){
            this.nome = 'Pedro'
        },
        alterarIdadeCallback(){
            this.idade = 43
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
