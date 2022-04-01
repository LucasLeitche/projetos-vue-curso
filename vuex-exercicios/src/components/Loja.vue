<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    
    data() {
        return {
            sequencia: 1,
            
        }
    },
    methods: {
        ...mapActions('carrinho', /*referenciando o nome do modulo*/[ // Quando precisar inserir mapMutations dentro de methods é possivel utilziar o spreed
            'adicionarProduto'
        ]),
        adicionar() {
            const produto = {
                id: this.$store.state.carrinho.produtos.length+1,
                nome: `Produto ${this.$store.state.carrinho.produtos.length+1}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line
            //this.$store.state.produtos.push(produto)
            //this.$store.commit('adicionarProduto', produto) // Setando valor // Quem irá alterar o state será a mutation definida dentro de storage
            this.adicionarProduto(produto)
            // this.$store.carrinho.dispatch('adicionarProduto', produto)
    }
    },
    computed:{
        quantidade(){
            return this.$store.state.parametros.quantidade
        },
        preco(){
            return this.$store.state.parametros.preco
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
