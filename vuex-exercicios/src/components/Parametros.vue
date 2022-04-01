<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                 <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>

export default {
  computed:{
    quantidade:{
        get(){ // Para consultar valor no state no store
            this.$store.state.quantidade
        },
        set(valor){ // Para setar novo valor no store
            this.$store.commit('adicionarQuantidade', valor) // Está no raiz então não tem problema de acessar diretamente pelo store
        }
    },
    preco:{
        get(){
            this.$store.state.quantidade
        },
        set(valor){
            this.$store.commit('adicionarPreco', valor)
        }
    }
  }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
