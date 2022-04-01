<template>
   <div class="caixa verde">
       <slot/>
   </div>
</template>

<script>
export default {
    created(){
        console.log('Criado componente verde')
    },
    activated(){
        console.log('Ativado Componente verde')
    }
}
</script>

<style scoped>

</style>
