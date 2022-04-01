export default{
    computed:{
		espacoPorVirgula(){
			return this.frase.replace( /\s/g, ',')
		},
		contaPalavra(){
			return this.frase.split(' ').map(p=> `${p} (${p.length})`).join('')
		}
	},
	data(){
		return{
			frase:'Lucas Leite Neves'
		}
	}
}