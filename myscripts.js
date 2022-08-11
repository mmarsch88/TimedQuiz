
window.onload = function() {
    document.getElementById("content").style.display="none";
};

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("Time's Up.")
        }
    }, 1000);
}

window.onclick= function () {
    var fiveMinutes = 60 * 5,
        display = document.getElementById("time");
    startTimer(fiveMinutes, display); showContent();
}

function showContent() {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}



/*
function nextQuestion() {

}


Array (questions)
Array (answers)






~Quiz Questions~

What is HTML?
-A Home Security System. (correct: false)
-Computer hardware.      (correct: false)
-An array.               (correct: false)
-A Markup Language.      (correct: true)

What does CSS stand for?
-Common System Source   (correct: false)
-Cascading Style Sheets (correct: true)
-Color Source Selection (correct: false)
-Change System Style    (correct: false)

Which attribute can link a .js document to an HTML project?
-src (correct: true)
-rel (correct: false)
-url (correct: false)
-txt (correct: false)



function showResults() {

}



*save score*
*/








  
  
  

  
  
  
    
  
  





  




  

