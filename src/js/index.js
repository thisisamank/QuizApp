let scoreCard=0;
let tags=[];
let correctAnswer;
generateTags();
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

function callThatApi(){
$.ajax({
  url:'https://opentdb.com/api.php?amount=10&type=multiple',
  success:loadIntoPage,
  error:(err)=> console.log(err) 
});
}

function loadIntoPage(fetchedJsonData){
  let i=0;
  // while(i<=10){
    setValues(fetchedJsonData.results[0]);
  //}
}

function removeBadParts(string) { 
  return string.replace(/(&quot\;)/g,"\"");
 }

function setValues(singleDataElement) {
  $('#question').text(removeBadParts(singleDataElement.question));
  correctAnswer=removeBadParts(singleDataElement.correct_answer);
  $(tags[0]).text(correctAnswer);
  $(tags[1]).text(removeBadParts(singleDataElement.incorrect_answers[0]));
  $(tags[2]).text(removeBadParts(singleDataElement.incorrect_answers[1]));
  $(tags[3]).text(removeBadParts(singleDataElement.incorrect_answers[2]));
  $('#score_value').text(scoreCard);
}
callThatApi();