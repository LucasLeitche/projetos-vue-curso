<template>
    <div class="usuario-lista">
        <h3>Lista de usuarios</h3>
            <ul class="lista">
                <router-link to="usuario/1" class="item-lista" tag="li">Usuário 1</router-link>
                <router-link to="usuario/2" class="item-lista" tag="li">Usuário 2</router-link>
                <router-link to="usuario/3" class="item-lista" tag="li">Usuário 3</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
button:hover{
    cursor: pointer;
}
</style>