
    var correct =0;
$(document).ready(function() {

    console.log("hello");

    // time for counter
    var timeleft = 30;

    //set interval function
    var downloadTimer = setInterval(function(){
        // decrement time by 1 second and display 
        --timeleft;
      $("#time-left").html(timeleft);
      //once time reaches 0 stop timer and clear interval
      //check game score
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        game();
      }
    },1000); 


});

function game(){

        //check each radio button and determine if the answer was correct
        if($("#my-form1 input[type='radio']:checked").val() === "1995"){
            correct++;
        }
        if($("#my-form2 input[type='radio']:checked").val() === "80"){
            correct++;
        }
        if($("#my-form3 input[type='radio']:checked").val() === "Mick"){
            correct++;
        }

        //display correct answers to user

        $("#correct").html(correct);

}