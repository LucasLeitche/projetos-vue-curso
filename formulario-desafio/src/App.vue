<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<div >
					<Name v-model="nomeCompleto"/>
					<Rotulo nome="Email">
						<input type="email" v-model.trim.lazy="email">
					</Rotulo><Rotulo nome="Senha">
						<input type="password" v-model.trim.lazy="senha">
					</Rotulo>
					<Rotulo nome="Armazenar dados?" class="R-radio">
						<span><input type="Radio" value="Sim" v-model="dados">Sim</span>
						<span><input type="Radio" value="Não" v-model="dados">Não</span>
					</Rotulo>
					<button @click.prevent="enviado = !enviado">Submit</button>
				</div>
				</form>
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome e sobrenome">
						<span>{{`${nomeCompleto.nome} ${nomeCompleto.sobrenome}`}}</span>
					</Rotulo>
						<span>{{email}}</span>
					<Rotulo nome="Email">
						<span>{{email}}</span>
					</Rotulo><Rotulo nome="Senha">
						<span>{{senha}}</span>
					</Rotulo>
					<Rotulo nome="Armazenar dados?" class="R-radio">
						<span>{{dados}}</span>
					</Rotulo>
					
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Name from './components/Name.vue'

export default {
	name: 'app',
	components: { Rotulo, Name },
	data:function(){
		return{
			nomeCompleto:{
				nome:'',
				sobrenome:''
			},
			email:'',
			senha:'',
			dados: false,
			nomeP:'1',
			sobrenomeP:'',
			enviado: false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app .painel button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}

</style>
