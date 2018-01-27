// Global Variables


var correct = 0;
var incorrect = 0;

var timer = 5;

var intervalId;

var trivia; 

var initialize;
	

var result;

var displayImage;

 
$(document).ready(function() {


		//button click starts game
      $("#start").on("click", function() {
      	
      	var trivia = jQuery.extend(true, {}, triviaData);
		console.log(trivia); 

		// Change class to hide start button
		$("#start").toggleClass('btn-primary btn-disabled');


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
      $("#trivia").html("<h4>" + trivia.question1 + "</h4>");
      $("#option1").html("<h4>" + trivia.answers1[0] + "</h4>");
      $("#option2").html("<h4>" + trivia.answers1[1] + "</h4>");
      $("#option3").html("<h4>" + trivia.answers1[2] + "</h4>");
      $("#option4").html("<h4>" + trivia.answers1[3] + "</h4>");

      // // Hover method when mouse hovers over an answer
      // $("p").hover(function(){
      //   $(this).css("background-color", "turquoise");
        

      //  Once timer hits zero...
      if (timer === 0) {
      	
      	//  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);

      	stop();
    
    }

      	// setTimeout(displayImage, 5000);

      	$(".questions").empty();
	// 
		$("#answer").html("<h2>" + trivia.answerDetail1 + "</h2>");

	
        // TODO: Show the loading gif in the "image-holder" div.
  		$("#image-holder").html("<img " + trivia.image1 + ">");
  		incorrect++;

  	}

    };
 //    	$("#option1").on("click", function() {
 //    		$(".questions").empty();
	// // 
	// 	$("#answer").html("<h2>" + trivia.answerDetail1 + "</h2>");


 //        // TODO: Show the loading gif in the "image-holder" div.
 //  		$("#image-holder").html("<img " + trivia.image1 + ">");
      

 //  		correct ++

      // })

//  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);

      	stop();
    
    }
})

});


 
      


    





//for loop cycles through questions

//first question with timer set to 25 seconds is created and pushed to html
// setTimeout(timeUp, 1000 * 25);

// setTimeout(displayImage, 5000);

//conditional for correct, incorrect, and timeout guesses

//correct guess if creates and pushes correct answer with corresponding gif, moves to next question

//incorrect guess else if creates and pushes correct answer with corresponding gif, moves to next question

//timeout else creates and pushes correct answer with corresponding gif, moves to next question

// Score Tally at End of Game

//game ends
