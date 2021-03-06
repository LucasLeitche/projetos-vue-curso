import stocks from '@/data/stocks'
export default{
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state,payload){
            state.stocks = payload 
        },
        randomizeStocks(state){
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() -0.45))
            });
        }
    },
    actions:{
        buyStock({commit},order ){
            commit('buyStock',order)
        },
        initStocks({commit}){
            commit('setStocks', stocks) // Setando stocks para o commit
        },
        randomizeStocks({commit}){
            return commit('randomizeStocks')
        }
    },
    getters:{
        stocks(state){
            return state.stocks // geter responsavel por obter todas as ações cadastradas dentro do meu estado
        }
    }
}