//@ts-check
import {questions} from './data/questions.js';
import { Quiz } from './js/Quiz.js';
import {QuestRender} from './js/QuestRender.js';
//console.log(questions[0].correctAnswer('let'));

const page = (quiz, questRender) => {
   if( quiz.isEnded()) {
    //console.log(quiz.score);
    questRender.showScores(quiz.score);
   }else {
     
    questRender.showQuestion(quiz.getQuestionIndex().text);
    //console.log(quiz.getQuestionIndex().choices)
    questRender. showChoices(quiz.getQuestionIndex().choices, (currentchoice) => {
        quiz.guess(currentchoice);
        page(quiz,questRender);
    }); 
    questRender.showProgress(quiz.questionIndex + 1, quiz.questions.length);
   }
};

function main (){
    const quiz = new Quiz(questions);
    const questRender = new QuestRender();
    
   
    page(quiz, questRender)

        
}

main();

