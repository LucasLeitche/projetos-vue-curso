export default{
    namespaced:true,
    state:{ // Objeto que representa o estado centralizado pelo vuex // Tudo que colocar dentro desse objeto representa o estado central (como se fosse um data)
        quantidade: 0,
        preco: 0
    },
    mutations:{
        adicionarQuantidade(state, payload){
            return state.quantidade = payload
        },
        adicionarPreco(state,payload){
            return state.preco = payload 
        }
    }
}