$(document).ready(function() {

	var triviaIndex = 0;
	var correct = 0;
	var timer = 5;
	var numQuestions = triviaData.length;
	var intervalId;

	function runGame() {
		var triviaInfo = triviaData[triviaIndex];

		// Set interval
		intervalId = setInterval(decrement, 1000);

	    //  The decrement function.
	    function decrement() {

	     //  Decrease number by one.
	     timer--;


		// Display timer
		$('#show-timer').show();
		
		// Set question
		$('#trivia').html(triviaInfo.question);

		$('#option1').html(triviaInfo.answers[0]);
		$('#option2').html(triviaInfo.answers[1]);
		$('#option3').html(triviaInfo.answers[2]);
		$('#option4').html(triviaInfo.answers[3]);


		// Display question section
		$('#questions-section').show();
	}

}

	function setAnswer(optionIndex) {
		var triviaInfo = triviaData[triviaIndex];
		var answerResponse;

		$('#answer-section').show();
		$('#questions-section').hide();

		$('#answer').html(triviaInfo.answerDetail);
		$('#image-holder').html('<img ' + triviaInfo.image + ' />');

		// Check to see if the correct answer matches
		// this option
		if (triviaInfo.correctAnswer === optionIndex) {
			answerResponse = 'Correct!';
			correct++;
		} else {
			answerResponse = 'Incorrect!';
		}

		$('#answer-response').html(answerResponse);

		// set a timer to go to the next question automatically
		setTimeout(function() {
			$('#answer-section').hide();

			triviaIndex++;

			if (triviaIndex < numQuestions) {
				// keep playing
				runGame();
			}
			else {
				// game's over
				gameOver();
			}
		}, 3000);
	}

	function gameOver() {
		// display div that shows score counter
		// correct = correct
		// incorrect = numQuestions - correct
		console.log(correct);
		$("#correct").html(correct);
		$("#incorrect").html(numQuestions - correct);
	}

	$('#option1').click(function() {
		setAnswer(0);
	});
	$('#option2').click(function() {
		setAnswer(1);
	});
	$('#option3').click(function() {
		setAnswer(2);
	});
	$('#option4').click(function() {
		setAnswer(3);
	});


	$('#start').click(function() {
		runGame();
		$('#start').hide();
	});
});