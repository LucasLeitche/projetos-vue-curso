<template>
    <nav class="menu">
        <ul> <!--dentro do to é informado o valor do path onde ele precisa carregar-->
            <router-link to="/" tag="li" 
            active-class="active" exact><a>Home</a></router-link> <!--Com o active você pode definir uma classe active para quando o link for ativado(ou clicado) utilizando a propriedade exact, pode evitar problemas caso haja um to com alguma semelhança, então irá aplicar a classe active em todos so elementos com semelhanças-->
            <router-link to="/usuario" tag="li" active-class="active"><a>User</a></router-link>
        </ul>
    </nav>
</template>

<script>

export default {

    }

</script>

<style>

</style>