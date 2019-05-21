/**
 * TODO: add questions, error: sync,
 * getting ID's through js or jquery
 */
var quiz=new QuizController(questions);
console.log(" ==== "+questions+" ==== ")
var el=document.getElementById('#question');
el.text=quiz.getQuestion().questions;
$('#question').html(quiz.getQuestion().questions);