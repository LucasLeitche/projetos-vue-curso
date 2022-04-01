<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<transition enter-active-class="animated fadeIn"  mode="out-in" appear>
		<router-view name="menu"/>
		</transition>
		<transition enter-active-class="animated slideInLeft" leave-active-class="animeted slideOutRight" mode="out-in" appear>
		<router-view/>
		</transition>
		 <router-view name="menuInferior"/>
	</div>
</template>

<script>
import Menu from './components/templates/Menu.vue'
export default {
	components:{Menu}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
