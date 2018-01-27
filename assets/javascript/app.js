// Global Variables


var correct = 0;
var incorrect = 0;

var timer = 3;

var intervalId;

var trivia; 

var initialize;
	// timeToGuess = questionLength;
	// gameLength = trivia.length;

 
//     $("button").attr("class", "btn-disabled");
    
// 	}
$(document).ready(function() {


		//button click starts game
      $("#start").on("click", function() {
      	
      	var trivia = jQuery.extend(true, {}, triviaData);
		console.log(trivia); 

		// Change class to hide start button
		$("#start").toggleClass('btn-primary btn-disabled');

//       	function hide() {
//     $("#start").attr("display", "hidden");
    
// }
		
      	// hide();

      	//  The run function sets an interval
    //  that runs the decrement function once a second.
    // initialize = run();


    	// For loop to iterate through each index of trivia array
    	// for (i = 0; i <= trivia.lenght; i++) {

      intervalId = setInterval(decrement, 1000);
    // }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      timer--;

      //  Show the number in the #show-timer tag.
      $("#show-timer").html("<h2>Time Remaining: " + timer + "</h2>");
      $("#trivia").html("<h2>" + trivia.question1 + "</h2>");
      $("#option1").html("<h2>" + trivia.answers1[0] + "</h2>");
      $("#option2").html("<h2>" + trivia.answers1[1] + "</h2>");
      $("#option3").html("<h2>" + trivia.answers1[2] + "</h2>");
      $("#option4").html("<h2>" + trivia.answers1[3] + "</h2>");


      //  Once number hits zero...
      if (timer === 0) {
      	stop();

        // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img " + trivia.image1 + ">");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
})

})


      	//  Execute the run function.
    	// run();
    
        //  Set the button alert's timeout to run three seconds after the function's called.
        // delayButtonAlert = setTimeout(function() {
        //   alert("Alert #2");
        // }, 3000);
    

 


    

// function timeUp() {

//   // in the element with an id of time-left add an h2 saying Time's Up!
//   // console log done
//   console.log("done");
//   console.log("time is up");

//   //  The following line will play the audio file we linked to above:
//   audio.play();
// }




//for loop cycles through questions

//first question with timer set to 25 seconds is created and pushed to html
// setTimeout(timeUp, 1000 * 25);

//conditional for correct, incorrect, and timeout guesses

//correct guess if creates and pushes correct answer with corresponding gif, moves to next question

//incorrect guess else if creates and pushes correct answer with corresponding gif, moves to next question

//timeout else creates and pushes correct answer with corresponding gif, moves to next question

// Score Tally at End of Game

//game ends
