export class Question {
    //propiedades
    constructor(text, choices, answer) {
       this.text = text;//pregunta
       this.choices = choices;//opciones[]
       this.answer = answer;//respuesta
    }
    //metodo
    correctAnswer(choice) {
       return choice === this.answer;
    }
}


//pruebas
/*const question = new Question()
const question2 = new Question()

console.log(question.correctAnswer());
console.log(question2.correctAnswer());*/