const initialData = {
    0: { question: "2 + 2 =", answer: "4" },
    1: { question: "1 + 1 =", answer: "2" },
    2: { question: "Hoe gaat get?", answer: "How are you?" },
    3: { question: "komkommer", answer: "cucumber" },
    4: { question: "konijn", answer: "rabbit" },
    5: { question: "Ik heet Ksenia", answer: "My name is Ksenia" }
}
displayRandomCard();

function displayRandomCard() {
    const randomCardNumber = Math.floor(Math.random() * Object.keys(initialData).length);
    const randomCard = initialData[randomCardNumber];
    console.log(randomCard);
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
    console.log("answer");
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