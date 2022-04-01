<template>
<div>
  <ul>
      <li v-for="fruta in frutas " :key="fruta">{{fruta}}</li>
  </ul>

  <input type="text" v-model="fruta" @keydown.enter.tab="add"> 
  </div>
</template>

<script>
import frutasMixins from './futasmixins'
export default {
    mixins: [frutasMixins]
}
</script>

<style>

</style>