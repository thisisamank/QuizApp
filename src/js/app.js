/**
 * TODO: add questions, error: sync,
 * 
 */

var quizController=new QuizController(questions);
console.log(" ==== "+questions+" ==== ")
var tags=[];
function generateTags(){
  let options=[1,2,3,4];
  let min=1; 
  let max=4;  
  let random =Math.floor(Math.random() * (+max - +min)) + +min;
  let correctOptionTag=`#option${random}`;
  tags.push(correctOptionTag);
  options.filter(value=>{
    if(value!==random) tags.push(`#option${value}`);
  });
}
function setQuestion(){
  generateTags();
  $( document ).ready(function() {
    for(let i=0;i<10;i++){
        let options=quizController.getQuestion().incorrect_answers;
        $('#question').text(quizController.getQuestion().question);
        $(tags[0]).text(quizController.getQuestion().correct_answer);
        $(tags[1]).text(options[0]);
        $(tags[2]).text(options[1]);
        $(tags[3]).text(options[2]);
        $('#score_value').text(quizController.getCurrentScore());
        checkOptions();
      }
    }
  );


}

function checkOptions() { 

  $(document).ready(function() {
    if(!quizController.isQuizOver()){
    $('.options').on('click',(event)=>{
    // if(quizController.selectedOption(event.target.innerText)){
    //   alert("Correct");
    // }else{
    //   alert("incorrect");
    // }
    quizController.selectedOption(event.target.innerText);
    setQuestion();
     console.log(`${event.target}  ${scoreCard}`);
   });
 }
 else{
   alert("Quiz Over!");
  }
});
}
setQuestion();