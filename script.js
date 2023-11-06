// Define quiz data in JSON format
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
      answer: "Leonardo Da Vinci"
    }
    // Add more questions here...
  ];
  
  const questionElement = document.querySelector(".question");
  const optionButtons = document.querySelectorAll(".option");
  const resultElement = document.querySelector(".result");
  const nextButton = document.querySelector(".next-button");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.style.display = "none";
      resultElement.innerText = "";
      loadQuestion();
  }
  
  function loadQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      questionElement.innerText = currentQuestion.question;
  
      for (let i = 0; i < currentQuestion.options.length; i++) {
          optionButtons[i].innerText = currentQuestion.options[i];
          optionButtons[i].addEventListener("click", () => checkAnswer(currentQuestion.options[i]));
      }
  }
  
  function checkAnswer(selectedOption) {
      const currentQuestion = quizData[currentQuestionIndex];
      if (selectedOption === currentQuestion.answer) {
          score++;
          resultElement.innerText = "Correct!";
      } else {
          resultElement.innerText = "Wrong!";
      }
  
      for (let button of optionButtons) {
          button.disabled = true;
      }
  
      nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
          loadQuestion();
          resultElement.innerText = "";
          nextButton.style.display = "none";
          for (let button of optionButtons) {
              button.disabled = false;
          }
      } else {
          displayResults();
      }
  });
  
  function displayResults() {
      questionElement.innerText = `Your Score: ${score} out of ${quizData.length}`;
      for (let button of optionButtons) {
          button.style.display = "none";
      }
      nextButton.style.display = "none";
  }
  
  // Start the quiz
  startQuiz();
  