<template>
  <img v-if="img" :src="img" alt="bg">
  <div class="gb-dark"></div>
  <div class="indecision-container">
      <h1>Indecision</h1>
      <input
      type="text"
      placeholder="Hazme una pregunta"
      v-model="question">    
      <p>Recuerda terminar con un signo de interrogación ( ? )</p>

    <div v-if="isValidQuestion">
        <h2 >{{ question }}</h2>
        <h1> {{ answer }} </h1>
    </div>

  </div>

</template>

<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Pensando...'

            let { answer, image } = await fetch('https://yesno.wtf/api')
                .then( r => r.json() )

            // answer === 'yes' ? answer = 'Si!' 
            // : answer === 'no' ? answer = 'No!' : 
            // answer === 'maybe' ? answer = 'Tal vez' : answer = answer
            const answers = {
                yes:'Si!',
                no:'No!',
                maybe:'Tal vez'
            }

            answer = answers[answer]

            this.answer = answer
            
            this.img = image
        }
    },
    watch: {
        question( value, oldValue ){

            this.isValidQuestion = false

            console.log({ value })

            if ( !value.includes('?')) return

            this.isValidQuestion = true

            this.getAnswer()
            // TODO: Realizar petición http
        }
    }
}
</script>

<style >
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>