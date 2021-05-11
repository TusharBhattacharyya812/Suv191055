const quizDB = [
    { 
        question: "Q1. Who was the first man to walk on the moon?",
        a: "Yuri Gagarin",
        b: "Neil Armstrong",
        c: "Edwin Buzz Aldrin",
        d: "Michael Collins",
        ans: "ans2"
    },
    {
        question: "Q2. The first man to run a mile in under 4 minutes was _______",
        a: "Roger Bannister",
        b: "Jesse Owens",
        c: "Usain Bolt",
        d: "Kirani James",
        ans: "ans1"
    },
    {
        question: "Q3. Who is the most famous English Detective in popular fiction?",
        a: "Sherlock Holmes",
        b: "Father Brown",
        c: "Hetty Wainthropp",
        d: "Dr. John Thorndyke",
        ans: "ans1",
    },
    {
        question: "Q4. What is the most common breed of dogs found in India?",
        a: "Labrador Retriever",
        b: "Doberman",
        c: "Golden Retriver",
        d: "Indian Pariah",
        ans: "ans4"
    },
    {
        question: "Q5. Which country is the popular TV series F.R.I.E.N.D.S from?",
        a: "USA",
        b: "UK",
        c: "Canada",
        d: "France",
        ans: "ans1"
    },

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    
    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();  

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked){
            answer = curAnsElem.id;
        }
        });  

        return answer;
    };

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

if (checkedAnswer == quizDB[questionCount].ans){
    score++;
};
questionCount++

deselectAll();
if (questionCount < quizDB.length){
    loadQuestion();
}else{
    showScore.innerHTML = `
    <h3>You scored ${score}/${quizDB.length}✌️</h3> 
       <button class="btn" onclick="location.reload()">Play Again</button>
       `;
       showScore.classList.remove('scoreArea');
}

});
