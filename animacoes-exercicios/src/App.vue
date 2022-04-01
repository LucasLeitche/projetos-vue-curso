<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Monstrar Mensagem</b-button>
		<transition name="fade"> <!-- Envolvendo o trecho de codigo no transition você consegue controlar a transição e animação relacionada a esse trecho de código  -->
		<b-alert variant="info" v-if="exibir" show>{{msg}}</b-alert>
		</transition>
		<transition name="slide" appear> <!-- Envolvendo o trecho de codigo no transition você consegue controlar a transição e animação relacionada a esse trecho de código  -->
			<b-alert variant="info" v-if="exibir" show>{{msg}}</b-alert>
		</transition>
<!--Classes animation.css-->
		<transition enter-active-class="animated bounce"
		leave-active-class="animate__heartBeat"> <!-- Envolvendo o trecho de codigo no transition você consegue controlar a transição e animação relacionada a esse trecho de código  -->
			<b-alert variant="info" v-if="exibir" show>{{msg}}</b-alert>
		</transition>

		<hr>
		<b-select v-model="tipoAnimation">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimation"> 
		<b-alert variant="info" v-if="exibir" show>{{msg}}</b-alert>
		</transition>

		<hr>

		<transition name="fade" mode="out-in"> <!-- Envolvendo o trecho de codigo no transition você consegue controlar a transição e animação relacionada a esse trecho de código  -->
			<b-alert variant="info" v-if="exibir" show key="info">{{msg}}</b-alert>
			<b-alert variant="warning" v-else show key="warning">{{msg}}</b-alert>
		</transition>

	<hr>
		<b-button @click="exibir2=!exibir2" variant="success" appear>Alternar</b-button>
		<transition
		:css="false"
		@before-enter="beforeEnter"
		@enter="enter"
		@before-leave="beforeLeave"
		@leave="leave">
			<div class="caixa" v-if="exibir2"></div>
		</transition>	
		
		<hr>
		<div class="d-flex row justify-content-around">
		<b-button variant="primary" @click="selecionado = 'Info'">Alternar Componente Info</b-button>
		<b-button variant="secundary" @click="selecionado = 'Alert'">Alternar Componente Alert</b-button>
		</div>
		<transition name="slide" mode="out-in" appear>
		<component :is="selecionado"></component>
		</transition>

		<hr>
		<div class="mb-3 p-3 d-flex column justify-content-around">
		<b-button @click="addAluno" >Adicioar Aluno</b-button>
		</div>
		<transition-group name="slide" appear tag="div">
		<b-list-group v-for="(aluno,i) in alunos" :key="aluno">
			<b-list-group-item class="my-2 " @click="removeAluno(i)">{{i+1}}: {{aluno}}</b-list-group-item>
		</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import Info from './Info.vue'
import Alert from './Alert.vue'
export default {
	components:{
		Info, Alert
	},
	data(){
		return{
			alunos:['Lucas', 'Luan', 'Aline', 'Marta'],
			msg: 'Uma mensagem de informação para usuário',
			exibir:false,
			exibir2:false,
			larguraBase:0,
			tipoAnimation:'',
			selecionado: 'info'
		}
	},
	methods:{
		addAluno(){
			const a = Math.random().toString(36).substr(2)
			return this.alunos.push(a)
		},
		removeAluno(indice){
			return this.alunos.splice(indice, 1)
		},
		animar(el, done, negativo){
			let contador = 1
			const temporizador = setInterval(()=>{ // A ideia do temporizador é que com ele seja modificado o valor na medida de tempo definida
				let novaLargura = this.larguraBase + (negativo ? -contador :contador ) * 10
				el.style.width = `${novaLargura}px`
				contador++
				if(contador > 30){
					clearInterval(temporizador)
				}
			},20)
			done()
			
		},
		beforeEnter(el){ // Vai receber o elemento no qual está animando
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px` // Importante para garantir que antes de entrar de fato na execução do evento os valores da largura sejam garantidos, pois sofreram mundanças no decorrer da aplicação
		},
		enter(el,done){ // Entrar tem um detalhe amais que além do elemento ele vai receber uma função que será chamada, quando a sua animação for concluida. O vue não tem como saber que a sua animaçã terminou se você não chamar o done
			this.animar(el,done,false)
		},
		// afterEnter(el){
		// 	console.log('afterEnter')
		// },
		// enterCancelled(){
		// 	console.log('enterCancelled')
		// },
		beforeLeave(el){
			this.larguraBase = 300, // Setando largura para 300
			el.style.width = `${this.larguraBase}px` // Garantindo que a div tenha o valor de this.larguraBase

		},
		leave(el, done){
			this.animar(el,done, true)
		},
		// afterLeave(el){
		// 	console.log('afterLeave')
		// },
		// leaveCancelled(){
		// 	console.log('leaveCancelled')
		// }

	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa{
	height:100px;
	width: 300px;
	margin: 30px auto;
	background-color:lightgreen;
}

@keyframes slide-in {
	from{ transform: translateX(40px);}	
	to{ transform: translateX(0);}
}

@keyframes slide-out {
	from{transform: translateX(0);}
	to {transform: translateX(40px);}
}

.slide-enter-active{
	animation: slide-in 2s ease;
}

.slide-leave-active{

	animation: slide-out 1s ease;
}

.slide-move{
	transition: transform 1s;
}
</style>
