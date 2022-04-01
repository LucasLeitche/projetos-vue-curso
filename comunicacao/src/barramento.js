import Vue from "vue";

export default new Vue({
    methods:{
        alterarIdade(idade){
            return this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})