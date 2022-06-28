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

let quizNum = 0

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
    } else{
        alert("뭐하냐;");
    }
    quizNum++;
    buildQuiz();
}

buildQuiz();
