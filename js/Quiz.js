//@ts-check
import {Question} from './Questions.js'

export class Quiz {
    //indice
    questionIndex = 0
    score = 0
    //funcion
    constructor(questions){
        this.questions = questions;
    }
    //metodo
    //pregunta
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }
    //termina la encuesta
    isEnded(){
        return this.questions.length === this.questionIndex
    }

    //respuesta
    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }

}

