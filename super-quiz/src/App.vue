<template>
  <div id="app" class="container-fluid">
    <h1 class="display-4 mt-5">Super Quiz</h1>
    <transition name="flip" key="teste" mode="out-in" appear>
    <Questions :question="questions[currentQuestion]" v-if="questionMode" @listenAnswer="getAnswer = $event" @listenGetAnsewer=" questionMode = $event" />
    <Result v-else :setAnswer="getAnswer" @returnToInicial="questionMode = $event" @newcurrentQuestion="currentQuestion=$event" :question="$event"/>
    </transition>
  </div>
</template>

<script>
import Questions from './components/Questions.vue'
import Result from './components/Result.vue'
import questions from './questions'
export default {
 components:{
   Questions,
   Result
 },
 data(){
   return{
     questions,
     currentQuestion: 0, // Definido para passado como indice do array ser gerado de forma randomica
     questionMode: true,
     getAnswer: false
   }
 }
 
}
</script>

<style>
*{
  box-sizing: border-box;
   font-family: 'Oswald', sans-serif;
}
body {
  background: #373B44;  /* fall back for old browsers */
  background: -webkit-linear-gradient(to right, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
a{
  text-decoration:none;
}
#app h1{
  color: white;
  text-align: center;
}
@keyframes flip-out {
  from{transform: rotateY(0deg);}
  to {transform: rotateY(90deg);}
}

@keyframes flip-in {
  from{transform: rotateY(90deg);}
  to{transform: rotateY(0deg)}
}


.flip-enter-active{
  animation: flip-in 0.5s ease;
}

.flip-leave-active{
  animation: flip-out 0.5s ease;
}
</style>
