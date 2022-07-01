const quiz = [
    {question: '원주가 제일 좋아하는 색깔은?',
    answer: ['회색', '노란색', '파란색'],
    correct: '회색'},

    {question: '원주가 키우는 동물은?',
    answer: ['앵무새', '고양이', '호랑이'],
    correct: '고양이'},
    
    {question: '원주의 꿈은?',
    answer: ['무병장수', '자유', '억만장자'],
    correct: '자유'},
    
    {question: '원주가 즐겨듣지 않는 노래는?',
    answer: ['기다린만큼 더', 'Let me out', "She's gone"],
    correct: "She's gone"},

    {question: '원주의 MBTI는?',
    answer: ['ENFJ', 'ISTP', 'INTJ'],
    correct: 'INTJ'}
]

let quizLength = quiz.length;
let quizNum = 0;
let score = 0;
let wrong = [];

function buildQuiz() {
    let questions = document.querySelector('.question');
    questions.innerHTML = quiz[quizNum].question;
    let a1 = document.querySelector('.ans1');
    let a2 = document.querySelector('.ans2');
    let a3 = document.querySelector('.ans3');

    a1.innerHTML = quiz[quizNum].answer[0];
    a2.innerHTML = quiz[quizNum].answer[1];
    a3.innerHTML = quiz[quizNum].answer[2];
}

function next(idx) {
    console.log(quiz[quizNum].answer[idx]);
    if(quiz[quizNum].answer[idx] === quiz[quizNum].correct){
        alert("옳지 잘한다~!");
        score++;
    } else{
        alert("뭐하냐;");
        wrong.push(quizNum);
    }
    quizNum++;

    if(quizNum === quizLength){
        result();
    }

    buildQuiz();
}

function result() {
    let q = document.querySelector(".question");
    let a = document.querySelector(".answer");
    while (q.firstChild) {
    q.removeChild(q.firstChild);
    }
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    // question.style.cssText = 'height: 50px';

    switch (score) {
        case 5:
            console.log("5점");
            score5(score);
            break;
        case 4:
            console.log("4점"); 
            score4(score);
            break;
        case 3:
            console.log("3점");
            score3(score);
            break;
        case 2:
            console.log("2점");
            score2(score);
            break;
        case 1:
            console.log("1점");
            score1(score);
            break;
        case 0:
            console.log("0점");
            score0(score);
            break;
      }
}

function score5(score) {
    const coment = document.createElement("div");
    coment.setAttribute('class', 'coment');
    let question = document.querySelector(".question");
    question.appendChild(coment);
    coment.innerText = '만점, 참 잘했어요!'
    
    let finalScore = 100 / quizLength * score;

    const Score = document.createElement("div");
    Score.setAttribute('class', 'Score');
    question.appendChild(Score);
    Score.innerText = finalScore + '점';
}

function score4(score) {
    const coment = document.createElement("div");
    coment.setAttribute('class', 'coment');
    let question = document.querySelector(".question");
    question.appendChild(coment);
    coment.innerText = '꽤 잘했어요!'
    
    let finalScore = 100 / quizLength * score;

    const Score = document.createElement("div");
    Score.setAttribute('class', 'Score');
    question.appendChild(Score);
    Score.innerText = finalScore + '점';

    const wrongBox = document.createElement("div");
    wrongBox.setAttribute('class', 'wrongBox');
    question.appendChild(wrongBox);

    const arrWrong = document.createElement("div");
    arrWrong.setAttribute('class', 'arrWrong');

    const wrongMent = document.createElement("div");
    wrongMent.setAttribute('class', 'wrongMent'); 
    wrongMent.innerText = '틀린 문제도 다시 보자!';
    wrongBox.appendChild(wrongMent);
    
    for(let i of wrong) {
        arrWrong.innerHTML += '<br/>' + quiz[i].question + '&nbsp; &nbsp; 답: ' + quiz[i].correct;
    }
    console.log(arrWrong);
    wrongBox.appendChild(arrWrong);
}

function score3(score) {
    const coment = document.createElement("div");
    coment.setAttribute('class', 'coment');
    let question = document.querySelector(".question");
    question.appendChild(coment);
    coment.innerText = '중간은 했네 그래도!'
    
    let finalScore = 100 / quizLength * score;

    const Score = document.createElement("div");
    Score.setAttribute('class', 'Score');
    question.appendChild(Score);
    Score.innerText = finalScore + '점';

    const wrongBox = document.createElement("div");
    wrongBox.setAttribute('class', 'wrongBox');
    question.appendChild(wrongBox);

    const arrWrong = document.createElement("div");
    arrWrong.setAttribute('class', 'arrWrong');

    const wrongMent = document.createElement("div");
    wrongMent.setAttribute('class', 'wrongMent'); 
    wrongMent.innerText = '틀린 문제도 다시 보자!';
    wrongBox.appendChild(wrongMent);
    
    for(let i of wrong) {
        arrWrong.innerHTML += '<br/>' + quiz[i].question + '&nbsp; &nbsp; 답: ' + quiz[i].correct;
    }
    console.log(arrWrong);
    wrongBox.appendChild(arrWrong);
}

function score2(score) {
    const coment = document.createElement("div");
    coment.setAttribute('class', 'coment');
    let question = document.querySelector(".question");
    question.appendChild(coment);
    coment.innerText = '나를 아직 잘 모르는구나'
    
    let finalScore = 100 / quizLength * score;

    const Score = document.createElement("div");
    Score.setAttribute('class', 'Score');
    question.appendChild(Score);
    Score.innerText = finalScore + '점';

    const wrongBox = document.createElement("div");
    wrongBox.setAttribute('class', 'wrongBox');
    question.appendChild(wrongBox);

    const arrWrong = document.createElement("div");
    arrWrong.setAttribute('class', 'arrWrong');

    const wrongMent = document.createElement("div");
    wrongMent.setAttribute('class', 'wrongMent'); 
    wrongMent.innerText = '틀린 문제도 다시 보자!';
    wrongBox.appendChild(wrongMent);
    
    for(let i of wrong) {
        arrWrong.innerHTML += '<br/>' + quiz[i].question + '&nbsp; &nbsp; 답: ' + quiz[i].correct;
    }
    console.log(arrWrong);
    wrongBox.appendChild(arrWrong);
}

function score1(score) {
    const coment = document.createElement("div");
    coment.setAttribute('class', 'coment');
    let question = document.querySelector(".question");
    question.appendChild(coment);
    coment.innerText = '너무행ㅠ'
    
    let finalScore = 100 / quizLength * score;

    const Score = document.createElement("div");
    Score.setAttribute('class', 'Score');
    question.appendChild(Score);
    Score.innerText = finalScore + '점';

    const wrongBox = document.createElement("div");
    wrongBox.setAttribute('class', 'wrongBox');
    question.appendChild(wrongBox);

    const arrWrong = document.createElement("div");
    arrWrong.setAttribute('class', 'arrWrong');

    const wrongMent = document.createElement("div");
    wrongMent.setAttribute('class', 'wrongMent'); 
    wrongMent.innerText = '틀린 문제도 다시 보자!';
    wrongBox.appendChild(wrongMent);
    
    for(let i of wrong) {
        arrWrong.innerHTML += '<br/>' + quiz[i].question + '&nbsp; &nbsp; 답: ' + quiz[i].correct;
    }
    console.log(arrWrong);
    wrongBox.appendChild(arrWrong);
}

function score0(score) {
    const coment = document.createElement("div");
    coment.setAttribute('class', 'coment');
    let question = document.querySelector(".question");
    question.appendChild(coment);
    coment.innerText = '저 아세요?'
    
    let finalScore = 100 / quizLength * score;

    const Score = document.createElement("div");
    Score.setAttribute('class', 'Score');
    question.appendChild(Score);
    Score.innerText = finalScore + '점';

    const wrongBox = document.createElement("div");
    wrongBox.setAttribute('class', 'wrongBox');
    question.appendChild(wrongBox);

    const arrWrong = document.createElement("div");
    arrWrong.setAttribute('class', 'arrWrong');

    const wrongMent = document.createElement("div");
    wrongMent.setAttribute('class', 'wrongMent'); 
    wrongMent.innerText = '틀린 문제도 다시 보자!';
    wrongBox.appendChild(wrongMent);
    
    for(let i of wrong) {
        arrWrong.innerHTML += '<br/>' + quiz[i].question + '&nbsp; &nbsp; 답: ' + quiz[i].correct;
    }
    console.log(arrWrong);
    wrongBox.appendChild(arrWrong);
}

buildQuiz();
