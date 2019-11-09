const initialData = [
    { question: "2 + 2 =", answer: "4" },
    { question: "1 + 1 =", answer: "2" },
    { question: "Hoe gaat get?", answer: "How are you?" },
    { question: "komkommer", answer: "cucumber" },
    { question: "konijn", answer: "rabbit" },
    { question: "Ik heet Ksenia", answer: "My name is Ksenia" }
]
displayRandomCard();

function displayRandomCard() {
    const randomCardNumber = Math.floor(Math.random() * Object.keys(initialData).length);
    const randomCard = initialData[randomCardNumber];
    const question = document.createElement('p');
    question.id = "question";
    question.innerHTML = randomCard.question;
    const answer = document.createElement('p');
    answer.id = "answer";
    answer.classList.add("invisible");
    answer.innerHTML = randomCard.answer;
    document.getElementById("question-part").appendChild(question);
    document.getElementById("answer-part").appendChild(answer);

}

function showAnswer() {
    const answer = document.getElementById("answer");
    answer.classList.remove("invisible");
}

function nextCard() {
    clearCard();
    displayRandomCard();
}

function clearCard() {
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');
    question.remove();
    answer.remove();
}

function submitNewCard() {
    // gather data
    const inputFieldQuestion = document.getElementById('new-question');
    const newQuestion = inputFieldQuestion.value;
    const inputFieldAnswer = document.getElementById('new-answer');
    const newAnswer = inputFieldAnswer.value;
    //validation
    if (doesNotPassAllValidations(newQuestion, newAnswer)) {
        return null
    }
    initialData.push({ "question": newQuestion, "answer": newAnswer })
    inputFieldQuestion.value = null;
    inputFieldAnswer.value = null;
}

function doesNotPassAllValidations(newQuestion, newAnswer) {
    if (!newQuestion) {
        alert('You forgot to fill the question!');
        return true;
    }
    if (!newAnswer) {
        alert('You forgot to fill the answer!');
        return true;
    }
    if (newQuestion.length > 280) {
        alert(`Your question must not exceed 280 symbols. Now it is ${newQuestion.length} symbols`);
        return true;
    }
    if (newAnswer.length > 280) {
        alert(`Your answer must not exceed 280 symbols. Now it is ${newQuestion.length} symbols`);
        return true;
    }
    return false;
}