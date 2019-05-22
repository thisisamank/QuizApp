
var questions=[];

function callThatApi(){
  $.ajax({
    url:'https://opentdb.com/api.php?amount=10&type=multiple',
    async: false,
    success:loadJsonFromApi,
    error:(err)=> console.log(err)
  });
  }

function removeBadParts(string) {
  return JSON.stringify(string).replace(/(&quot\;)/g,"\"");
  }
  
function loadJsonFromApi(fetchedJsonData){
  
  for (let element of fetchedJsonData.results) {
    let ques=removeBadParts(element.question);
    // let correct_answer=removeBadParts(element.correct_answer);
    // let incorrect_answers=new Array(removeBadParts(element.incorrect_answers));
    let correct_answer=element.correct_answer;
    let incorrect_answers=element.incorrect_answers;
    //let questionObject=new Question(ques,correct_answer,incorrect_answers);
    questions.push(new Question(ques,correct_answer,incorrect_answers));
  }

}
callThatApi();