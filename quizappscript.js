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

const loadQuestion = () => {
    question.innerText = quizDB[0].question;

}
loadQuestion();  