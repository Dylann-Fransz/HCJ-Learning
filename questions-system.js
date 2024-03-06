// QUESTION

const question_text = document.querySelector(".question-text");
const question_amount = document.querySelector(".question-amount");
const question_info = document.querySelector(".question-info");
const question_answer = document.querySelector(".question-answer");
const question_submit = document.querySelector(".question-submit");

var current_question_num = 1;
var correct_questions = 0

var finished = false;

// CONNECTIONS

question_answer.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
      question_submit.click();
  }
});
  
// FETCHING

fetch('./questions.json')
  .then((res) => {
    return res.json();
  })
  .then((json) => {

    const total_questions = json.length

    var random_index = Math.floor(Math.random() * total_questions)
    var random_question = json[random_index]

    question_text.innerHTML = "Question " + current_question_num + ": " + random_question.question

    question_amount.innerHTML = "Question " + current_question_num + " of " + total_questions

    question_info.innerHTML = random_question.info
    
    console.log("Questions loaded")

    question_submit.addEventListener("click", function(){

      if (!finished){

        current_question_num += 1

        if (question_answer.value.toLowerCase().includes(random_question.answer.toLowerCase())){

          console.log("Correct, moving onto next question")
          correct_questions += 1

        } else {

          console.log("Incorrect, moving onto next question")

        }

        if (current_question_num > total_questions){

          finished = true
          
          console.log("Finished, displaying results")

          question_amount.innerHTML = "Finished"

          question_text.innerHTML = "You got " + correct_questions + " out of " + total_questions + " correct!"

          question_text.style.color = "green"

          question_submit.innerHTML = "Restart"
          question_submit.style.width = "100%"

          question_answer.classList.add("hide")

          if (correct_questions == total_questions){

            question_info.innerHTML = "Good job! You got all the questions correct!"

          } else if(correct_questions < total_questions && correct_questions != 0){

            question_info.innerHTML = "Almost there! Try again."

          } else if (correct_questions == 0){

            question_info.innerHTML = "Try again."

          }

        } else {

          random_index = Math.floor(Math.random() * total_questions)
          random_question = json[random_index]

          question_text.innerHTML = "Question " + current_question_num + ": " + random_question.question

          question_amount.innerHTML = "Question " + current_question_num + " of " + total_questions

          question_info.innerHTML = random_question.info

        }

        question_answer.value = ""

        
      } else {

        finished = false
        current_question_num = 1

        location.reload()
        
      }
      
    });

  });