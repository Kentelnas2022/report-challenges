const questions = [
    {
        question: "Which of the following is a key reason for implementing strong cybersecurity measures?",
        answers: {
            a: "To improve internet speed",
            b: "To prevent unauthorized access and data breaches",
            c: "To increase social media engagement",
            d: "To simplify user interfaces"
        },
        correct: "b"
    },
    {
        question: "What is one consequence of the digital divide?",
        answers: {
            a: "Increased access to technology for everyone",
            b: "Limited educational opportunities for underprivileged communities",
            c: "Higher quality of internet services",
            d: "More social media platforms"
        },
        correct: "b"
    },
    {
        question: "Which of the following is a common practice for protecting user privacy?",
        answers: {
            a: "Using weak passwords",
            b: "Regularly updating software and applications",
            c: "Ignoring privacy settings on social media",
            d: "Sharing personal information with strangers"
        },
        correct: "b"
    },
    {
        question: "What is the main focus of GDPR?",
        answers: {
            a: "Promoting online shopping",
            b: "Protecting personal data and privacy in the European Union",
            c: "Enhancing video game development",
            d: "Improving cloud storage solutions"
        },
        correct: "b"
    },
    {
        question: "Which of the following best describes ethical hacking?",
        answers: {
            a: "Hacking into systems without permission",
            b: "Testing systems for vulnerabilities with authorization",
            c: "Hacking for personal gain",
            d: "Hacking to steal data"
        },
        correct: "b"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("quiz");
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div>
            ${Object.entries(currentQuestion.answers).map(([key, value]) =>
                `<label>
                    <input type="radio" name="answer" value="${key}"> ${value}
                </label><br>`
            ).join('')}
        </div>
    `;
}

document.getElementById("submit").addEventListener("click", function () {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedbackElement = document.getElementById("result");

    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correct) {
            score++;
            feedbackElement.innerHTML = `<span style="color: green;">Correct!</span> You answered correctly.`;
        } else {
            feedbackElement.innerHTML = `<span style="color: red;">Incorrect!</span> The correct answer was ${questions[currentQuestionIndex].correct}.`;
        }
        currentQuestionIndex++;
        setTimeout(() => {
            feedbackElement.innerHTML = ""; // Clear feedback
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                document.getElementById("quiz").style.display = "none";
                document.getElementById("result").innerHTML += `<br>Your final score: ${score} out of ${questions.length}`;
                document.getElementById("submit").style.display = "none";
            }
        }, 2000); // Feedback lasts for 2 seconds
    } else {
        alert("Please select an answer before submitting.");
    }
});

// Load the first question
loadQuestion();
