const quiz = [ {
  question: '世界で２番目に世界遺産の多い国は次の内どれ？',
  answers:[ 
    '日本',
    'アメリカ', 
    'フランス', 
    'ロシア'
  ],
  correct: 'ロシア'

},{question: '世界で２番目に大きい湖は次の内どれ？',
answers:[ 
  'カスピ海',
  'スペリオル湖', 
  'ビクトリア湖', 
  'アラル海'
],
correct: 'ビクトリア湖'

},{question: '世界で５番目に面積が大きい国は次の内どれ？',
answers:[ 
  'アメリカ',
  'ブラジル', 
  'オーストラリア', 
  '中国'
],
correct: 'ブラジル'

}
];

const quizLength  = quiz.length
let quizIndex =  0;
let score = 0;



const $button = document.getElementsByTagName('button')
const buttonLength = $button.length

//クイズの問題、選択肢を定義
const setupQuiz = () =>{
  document.getElementById ('js-question').textContent =quiz[quizIndex].question;
  let buttonIndex = 0;
while( buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}
 setupQuiz();

const clickHandler = (e) =>{
  if ( quiz [quizIndex].correct === e.target.textContent)  {
    window.alert('正解！');
    score++;
  } else {
   window.alert('不正解！');
  }

 quizIndex++;
 if (quizIndex < quizLength){
setupQuiz();

 } else {
 window.alert('終了！あなたの正解数は ' + score + ' /  '+ quizLength +'です！');
 }

}; 

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while ( handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e)=> {
  clickHandler(e);
});
  handlerIndex++;
}
