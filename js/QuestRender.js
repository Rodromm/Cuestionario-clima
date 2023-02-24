export class QuestRender {
    constructor(){ }
    //preguntas
    showQuestion(text){
        const questionTitle = document.getElementById('questions')
        questionTitle.innerText = text;
        //console.log(showQuestion);
    }
    //opciones
    showChoices(choices, callback){
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = ""
            for (let i = 0; i < choices.length; i++){
              const button = document.createElement("button"); //boton
              button.innerText = choices[i];
              button.className = 'button'
              button.addEventListener('click', () => callback(choices[i]));

              choicesContainer.append(button);
              //console.log(showChoices)
            }
    }

    //puntacion
    showScores(score) {
        const quizEndHtml = `<h1> Resultado </h1>
        <h2> Tu Puntuación: ${score}</h2>`

        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHtml;
    }

    showProgress(currentIndex, total){
        const element = document.getElementById('progress')
        element.innerHTML = `Preguntas ${currentIndex} of ${total}`; 
        //console.
    }
}