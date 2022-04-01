export default {
    namespaced:true,
    state:{ // Objeto que representa o estado centralizado pelo vuex // Tudo que colocar dentro desse objeto representa o estado central (como se fosse um data)
        produtos: [],
    },
    getters: {
        valorTotal(state) {
           return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations:{
        adicionarProduto(state, payload){
            return state.produtos.push(payload)
        }
    },
    actions:{
        adicionarProduto({commit}, payload){
            setTimeout(()=>{
                return commit('adicionarProduto', payload) // o commit passará a ser feito pela action
            },500)
        }
    }
}