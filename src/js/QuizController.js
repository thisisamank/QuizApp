class QuizController{
  constructor(questions){
    this.questions=questions;
    this.questionIndex=0;
    this.score=0;
  }
  
  getQuestion(){
    return this.questions[this.questionIndex];
  }

  isQuizOver(){
    return this.questions.length===this.questionIndex;
  }

  selectedOption(answer){
    console.log("Called");
    
    let correct=false;
    if(this.getQuestion().isCorrectAnswer(answer)){
      correct=true;
      this.score+=10;
    }
    this.questionIndex++;
    return correct;
  }

  getCurrentScore(){
    return this.score;
  }
}