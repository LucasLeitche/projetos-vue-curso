<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-quando:click="acao">executar</button>
		<p v-quando:mouseover="mouseMove"
			v-quando:mouseleave="mouseLeave"
		>Teste mouse event!</p>
	</div>
</template>

<script>
export default {
	directives:{
		quando:{
			bind(el,binding){
			// 	el.onClick = function(e){
			// 		binding.value()
			// 	}
			// }

			// Como sei que o valor passado será uma função, não preciso realizar nenhum tipo de teste no valor // Será adicionado diretamente como para metro parar ser disparado com o EvetListener
			const tipo = binding.arg
			const fn = binding.value

			el.addEventListener(tipo, fn) // Adiciona um observer para o evento passando primeiro o evento que deseja observar e depois a função que deseja aplicar
		}
		}
	},
	methods:{
		acao(){
			alert('Ação executada')
			console.log('botão clicado')
		},
		mouseMove(){
			console.log('Ining')
		},
		mouseLeave(){
			console.log('Outing')
		}
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
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
