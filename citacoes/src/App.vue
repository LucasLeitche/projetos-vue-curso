<template>
	<div id="app">
		
			<component :is=componente />

		<button @click="component = component = 'Citacoes'">Citacoes</button>
		<button @click="component = component = 'Sobre'">Sobre</button>
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	data(){
		return {
			componente:'Citacoes'
		}
	},
	components: { Citacoes, Sobre },
	activated(){
		console.log('App foi ativado')
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>