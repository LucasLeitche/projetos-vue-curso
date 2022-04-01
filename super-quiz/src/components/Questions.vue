<template>
  <div id="questions" class="container-fluid">
      <div class="q-principal container-fluid mt-4">
        <h4 class="pb-3 pt-3 mb-4">{{question.text}}</h4>
          <ul class="q-ul" style="overflow:hidden">
            <li class="q-li" v-for="(answer, i) in question.answers" :key="i" @click="choseAnswer(i)">
                <span class="q-li-border">{{i+1}}</span>
                <span class="q-items-list"><strong>{{answer.text}}</strong></span>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        question:{
            type: Object,
            required: true
        }
    },
    methods:{
        choseAnswer(indice){
            const answerRight = this.question
            let rightOrRong = false
            if(answerRight.answers[indice].correct == false){
                rightOrRong = false
            } else {
                rightOrRong = true
            }
            return this.$emit('listenGetAnsewer', false), this.$emit('listenAnswer', rightOrRong)
    }
    }
}
</script>

<style>
*{
     font-family: 'Oswald', sans-serif;
}
    ul li{
       list-style: none;
       
    }  
    ul li a {
        text-decoration: none;
        text-decoration-color: none;
        
    }
     a{
        text-decoration:none;
    }
    .q-principal{
        background: white;
        width: 70%;
        height: 270px;
        border-radius: 20px;
        overflow:hidden;
        display: flex;
        flex-direction: column;
    }
    .q-principal h4{
        text-align: center;
        font-size:30px;
    }
    .q-ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .q-li{
        background: #97c066;
        width: 320px;
        height: 45px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 7px;
        margin-left:  0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0;
        margin-bottom: 30px;
        }
    .q-li-border{
        width: 60px;
        height: 45px;     
        padding-top:6px;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        text-align: left;
        background: #4c9940;
        align-content: center;
        text-align: center;
        color: white;
        font-weight: 400;
        font-size: 20px;
    }
    .q-items-list{
        width: 500px;
        text-align: center;
        font-size: 20px;
        font-weight: normal;
        font-weight:500;
    }
</style>