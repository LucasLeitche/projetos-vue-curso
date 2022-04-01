import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router' // Importado o arquivo router
Vue.config.productionTip = false


new Vue({
  router, // definido a instacia router dentor da instancia vue
  render: h => h(App),
}).$mount('#app')
