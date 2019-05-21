class QuizController{
  constructor(questions){
    this.questions=questions;
    this.questionIndex=0;
    this.score=0;
  }
  
  getQuestion(){
    console.log(this.questions[this.questionIndex]);
    return this.questions[this.questionIndex];
  }

  isQuizOver(){
    return this.questions.length===this.questionIndex;
  }

  selectedOption(answer){
    if(this.getQuestion.isCorrectAnswer(answer)){
      this.scoreCard++;
    }
    this.questionIndex++;
  }

}