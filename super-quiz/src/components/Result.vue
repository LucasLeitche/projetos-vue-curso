<template>
    <div id="result" class="container-fluid">
        <div class="r-principal-right container-fluid mt-4" v-if="setAnswer">
            <h1 class="pt-3">Resposta Certa! :)</h1>
            <b-button @click="questionChose">Proxima pergunta</b-button>
        </div>
    <div class="r-principal-wrong container-fluid mt-4" v-else>
            <h1 class="pt-3">Resposta Errada! :)</h1>
            <b-button @click="questionChose">Proxima pergunta</b-button>
        </div>
  </div>
</template>

<script>

export default {
    props:{
        setAnswer:{
            type:Boolean,
            required:true
        },
    questions:{
        type:Array
    }
    },
    methods:{
        nextQuestion(){
                let rotate = Math.floor(Math.random()*10+1)
                if (rotate > 6){
                    rotate = 0
                }
                return this.$emit('newcurrentQuestion',rotate)
        },
        questionChose(){
            const answer = true
            let returnOfAnswer = this.setAnswer
            if(returnOfAnswer == true){
            
            let rotate = Math.floor(Math.random()*this.questions.length-1)
                if (rotate > 6){
                    rotate = rotate - rotate + 1
                } 
                if (rotate == rotate){
                    rotate++
                }

                return  this.$emit('newcurrentQuestion',rotate),this.$emit('returnToInicial', answer ), console.log(rotate)
                } else{
            return this.$emit('returnToInicial', answer )}
            }
    }}
</script>

<style>
     /*ANSWER RIGHT*/
 .r-principal-right{
        background: #97c066;
        width: 70%;
        height: 270px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }
.r-principal-right h1{
    color:#4c8246!important;
    font-size: 50px;
    font-weight: 600;

}

.r-principal-right h1{
    align-content: center;
}
.r-principal-right button{
    width: 150px;
    align-self: center;
}

/* ANSWER WRONG */
 .r-principal-wrong{
        background: #dd5d59;
        width: 70%;
        height: 270px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }
.r-principal-wrong h1{
    color:#ae3322!important;
    font-size: 50px;
    font-weight: 600;
}

.r-principal-wrong h1{
    align-content: center;
}
.r-principal-wrong button{
    width: 150px;
    align-self: center;
}

</style>