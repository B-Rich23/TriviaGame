// Global Variables


var correct = 0;
var incorrect = 0;

var timer = 5;

var intervalId;

var trivia = ["1.What is the highest grossing movie of all-time?", "2. From 2000-2010, which NBA team won the most championships?", "3. Who holds the Guinness record for best selling album of all-time?", "4. Who was the highest paid actor in 2017?",]

// function hide() {
//     $("button").attr("class", "btn-disabled");
    
// 	}

//  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      timer--;

      //  Show the number in the #show-number tag.
      $("#show-timer").html("<h2>" + timer + "</h2>");
      $("#trivia").html("<h2>" + trivia[0] + "</h2>");


      //  Once number hits zero...
      if (timer === 0) {
      	stop();

        // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='assets/images/avatar.gif' width='800px' height='400px'/>");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    

// function timeUp() {

//   // in the element with an id of time-left add an h2 saying Time's Up!
//   // console log done
//   console.log("done");
//   console.log("time is up");

//   //  The following line will play the audio file we linked to above:
//   audio.play();
// }


//button click starts game
//  Start on click.
      $("#start").on("click", function() {

//       	function hide() {
//     $("#start").attr("display", "hidden");
    
// }

      	// hide();
      	//  Execute the run function.
    	run();
    
        //  Set the button alert's timeout to run three seconds after the function's called.
        // delayButtonAlert = setTimeout(function() {
        //   alert("Alert #2");
        // }, 3000);
      });

//for loop cycles through questions

//first question with timer set to 25 seconds is created and pushed to html
// setTimeout(timeUp, 1000 * 25);

//conditional for correct, incorrect, and timeout guesses

//correct guess if creates and pushes correct answer with corresponding gif, moves to next question

//incorrect guess else if creates and pushes correct answer with corresponding gif, moves to next question

//timeout else creates and pushes correct answer with corresponding gif, moves to next question

// Score Tally at End of Game

//game ends
