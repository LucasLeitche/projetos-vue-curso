<template>
    <div class="citacao">
       <slot name="autor"></slot>
       <slot name="texto"></slot>
       <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    props:{
        citacoes:{
            type: String
        }
    },
    data(){
        return{
            numero:0
        }
    },
     computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
},
    activated(){
        console.log('Citação singular está ativado')
    },
    deactivated(){
        console.log('Citação singular está ativado')
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
