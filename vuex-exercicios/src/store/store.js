import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './carrinho'
import parametros from './parametros'

Vue.use(Vuex)

export default new Vuex.Store({ // Store é uma função que está dentro do vuex
    modules:{
        carrinho, parametros
    }
})