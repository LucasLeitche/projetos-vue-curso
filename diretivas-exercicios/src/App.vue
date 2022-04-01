<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Sou uma diretiva'"></p>
		<p  v-html="'Sou uma diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'lightblue'" >Usando diretiva personalizada</p>
		<p v-destaque:fundo="'green'" >Usando diretiva personalizada</p>
		<hr>
		<p v-destaque-local:fundo.atrasar="'lightblue'" >Usando diretiva personalizada</p>
		<p v-destaque-local:fundo.alternar="{cor1:'green', cor2:'red', atraso:2000, intervalo:200}" >Usando diretiva personalizada</p>
		<!-- <p v-teste:argumnto.modi1.modi2.modi3="'valor'"></p> // Quando você tem : o que vem após é o argumento // Depois do argumento você pode ter o valor // E você também pode passar os modificadores -->
	</div>
</template>

<script>
export default {
	directives:{
		'destaque-local':{
			bind(el, binding){
				const aplicarCor = cor =>{
					if(binding.arg === 'fundo'){
						el.style.backgroundColor= cor
						el.style.color = 'black'
					} else{
						el.style.color= binding.value
					}
				}

		let atraso = 0
		if (binding.modifiers['atrasar']) atraso = binding.atraso.value
		
		const cor1 = binding.cor1.value // atribuido valor do obj
		let cor2 = binding.cor2.value // atribuido valor do obj
		let corAtual = cor1

		setTimeout(()=>{
			if (binding.modifiers['alternar']) {
			setInterval(()=>{
				corAtual = corAtual === cor1 ? cor1 : cor2
				aplicarCor(corAtual)
			},binding.intervalo.value) // atribuido valor do obj
		}else{
			aplicarCor(binding.value)
		}
			
		}, binding.intervalo.value)
		}
	},
	data(){
		return{
			cor:'red'
		}
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
</style>
