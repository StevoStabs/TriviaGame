$(document).ready(function() {

var rightAnswer = 0;
var wrongAnswer = 0;
var arrayCounter = 0;
var number = 15;

var questionsArray = [

	{
	  	question: "What's the closest planet to the sun?",
	 	choice1: "Jupiter",
	 	choice2: "Neptune",
	 	choiceCorrect: "Mercury"
	},

	{
		question: "What color is coffee?",
		choiceCorrect: "brown",
		choice1: "blue",
		choice2: "green"
	},

	{
		question: "What sport do the Yankees play?",
		choice1: "football",
		choice2: "basketball",
		choiceCorrect: "baseball"
	},

	{
		question: "What country is located north of the US?",
		choice1: "Peru",
		choice2: "Mexico",
		choiceCorrect: "Canada"
	},

	{
		question: "What is the 3rd letter of the alphabet?",
		choice1: "a",
		choice2: "b",
		choiceCorrect: "c"
	}
];

// SHOWS QUESTION AND MULTIPLE CHOICE ANSWERS AFTER YOU CLICK 'START' OR CLICK RADIO BUTTON
function showQuestion() {
	$('.question').html(questionsArray[arrayCounter].question);
	$('.choices').html("<li><input type='radio' name='optradio'>" + "<p>" + 
		questionsArray[arrayCounter].choice1 + "</p>" + "</li><li><input type='radio' name='optradio'>" + "<p>" + 
		questionsArray[arrayCounter].choice2 + "</p>" + "</li><li><input type='radio' name='optradio' value='correct'>"  + "<p>" + 
		questionsArray[arrayCounter].choiceCorrect + "</p>" + "</li>");
}

// SHOWS RESULT OF THE GAME AFTER ALL QUESTIONS ARE ANSWERED
function showResults() {
	var percent = rightAnswer / questionsArray.length * 100;
	var percentFixed = percent.toFixed(0);
	$('.question').hide();
	$('.choices').hide();
	$('.results').html("<p>Correct: " + rightAnswer + "</p><br>" + "<p>Incorrect: " + wrongAnswer + 
		"</p><br>" + "<p>Percentage Correct: " + percentFixed + "%</p>")
}

// STARTS TIMER
function run(){
      counter = setInterval(increment, 1000);
    }


function increment(){
      number--
      document.getElementById('timer').innerHTML = ('<h3>' + number + '</h3>')
      if (number === 0){
        // alert("the end");
   		stop();
   		$('#timer').hide();
   		showResults();
      }
    }

function stop(){
      clearInterval(counter);
    }

// BEGINS GAME WHEN START BUTTON IS CLICKED
$('.start').click(function() {
	// alert("test");
	run();
	showQuestion();
	$('.start').hide();
});


// CATCHED RADIO BUTTON CLICK AND DETERMINES IF THE ANSWER IS RIGHT OR WRONG AND KEEPS TALLY
$('.choices').on('change', function() {
   if($('input[name=optradio]:checked', '.choices').val() == 'correct') {
   	// alert("that's correct");
   	rightAnswer ++;
   } else {
   	// alert("wrong!");
   	wrongAnswer ++;
   }; 
   arrayCounter ++;

   if(arrayCounter == questionsArray.length) {
   		// alert("the end");
   		stop();
   		$('#timer').hide();
   		showResults();
   } 
   else {
   showQuestion();
	}
});




});