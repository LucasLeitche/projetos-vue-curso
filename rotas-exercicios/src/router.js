import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio' // Importando os componentess que farão navegações
import Menu from './components/templates/Menu'
// import Usuario from './components/usuario/Usuario' // Importando os componentess que farão navegações
import MenuAlt from './components/templates/MenuAlt'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'
import menuInferior from './components/templates/MenuAlt'

const Usuario = () => import(/* webpackChunkName:"Usuario" */ './components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName:"Usuario" */ './components/usuario/UsuarioLista')
const UsuarioEditar = () => import(/* webpackChunkName:"Usuario" */ './components/usuario/UsuarioEditar')
const UsuarioDetalhe = () => import(/* webpackChunkName:"Usuario" */ './components/usuario/UsuarioDetalhe')

Vue.use(Router) //Permite usar o this.$router

export default new Router({
    // Onde serão definidas todas as configurações do vue-router
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        } else if (to.hash){
            return {selector: to.hash}
        } else{
            return {x:0, y:0}
        }
    },
    routes:[{ // Para ter acesso this.$route
        name: 'Inicio',
        path:'/', 
        // component: Inicio,
        components:{
            default: Inicio,
            menu: Menu
        }
    },
    {
        path:'/usuario', // Infromando que usuario recebera um id por parametro 
        // component: Usuario,
        components:{
            default: Usuario,
            menu: MenuAlt,
            menuInferior: menuInferior
        },
        props: true,
        children:[{path:'', component:UsuarioLista,
        beforeEnter: (to, from, next)=>{
            console.log(`Antes de entrar no componente`, to.path)
            next()
        }}, // Por padrão esse componente será carregado ao navegar ao usuario
        {path:':id', component:UsuarioDetalhe, props:true}, // Após /id
        {path:':id/editar', component:UsuarioEditar, props:true, name:'usuarioEditar'} // Após /id/editar
    ]
    },
    {
        path:'*',
        redirect:'/'
    }
] 
}) // exportação objeto que vem da importação do plugin do vue-router