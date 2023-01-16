const quizData =[
  {
    question:'Javascript is an ___ language?',
    a:'OOP',
    b:'Object_Base',
    c:'procedural',
    d:'None of the above',
    correct:'answerA'
  },
  {
    question:'Which of the following keywords is used to define a variable in Javascript?',
    a:'var',
    b:'let',
    c:'Both A and B',
    d:'None of the above',
    correct:'answerC'
  },
  {
    question:'Which of the following methods is used to access HTML elements using Javascript',
    a:'getElementByID()',
    b:'getElemnetByClassName()',
    c:'Both A and B',
    d:'None of the above',
    correct:'answerC'
  },
  {
    question:'Upon encountering empty statements, what does the Javascript Interpreter do?',
    a:'Throw an Error',
    b:'Ignors the statements',
    c:'Gaves a warning',
    d:'None of the above',
    correct:'answerB'
  },
  {
    question:'Which of the following methods can be used to display data in some form using Javascript?',
    a:'documetn.write()',
    b:'console.log()',
    c:'window.alert()',
    d:'All of the above',
    correct:'answerD'
  },
  {
    question:'How can a datatype be declared to be a constant type?',
    a:'const',
    b:'let',
    c:'var',
    d:'constant',
    correct:'answerA'
  },
  {
    question:'What keyword is used to check whether a given property is valid or not?',
    a:'in',
    b:'is in',
    c:'exist',
    d:'lies',
    correct:'answerA'
  },
  {
    question:'What is the use of the <noscript> tag in Javascript?',
    a:'The Contents by non-JS based browser',
    b:'clear all the cookies and cache',
    c:'Both A and B',
    d:'Noneof the above',
    correct:'answerA'
  },
  {
    question:'When an operator’s value is NULL, the typeof returned by the unary operator is:',
    a:'boolean',
    b:'undefined',
    c:'object',
    d:'integer',
    correct:'answerC'
  },
  {
    question:'What does the Javascript “debugger” statement do?',
    a:'it will debug all the errors in the program at run time',
    b:'at act as a breakpoint in a program',
    c:'it will debug error in the current statement if any',
    d:'All of the above',
    correct:'answerB'
  },
  {
    question:'What does the ‘toLocateString()’ method do in JS?',
    a:'return localised object representation',
    b:'return a parsed string',
    c:'return localised string representation of an object',
    d:'none of the above',
    correct:'answerC'
  },
  {
    question:'Which function is used to serialize an object into a JSON string in Javascript?',
    a:'stringfy()',
    b:'parse()',
    c:'convert()',
    d:'none of the above',
    correct:'answerA'
  },
  {
    question:'Which of the following are closures in Javascript?',
    a:'variables',
    b:'functions',
    c:'objects',
    d:'all of the above',
    correct:'answerD'
  },
  {
    question:'What keyword is used to declare an asynchronous function in Javascript?',
    a:'async',
    b:'await',
    c:'setTimeout',
    d:'none of the above',
    correct:'answerA'
  },
  {
    question:'Which of the following are not server-side Javascript objects?',
    a:'date',
    b:'fille upload',
    c:'function',
    d:'All of the above',
    correct:'answerD'
  },
];

let currentQuest=0;
let score =0;

function loadQuset(){
  let currentData = quizData[currentQuest];
  Quest.innerHTML =currentData.question;
  a.innerHTML =`<button>A</button>${currentData.a}`;
  b.innerHTML =`<button>B</button>${currentData.b}`;
  c.innerHTML =`<button>C</button>${currentData.c}`;
  d.innerHTML =`<button>D</button>${currentData.d}`;
  currQ.innerHTML=`#${currentQuest + 1}`;
  totalQ.innerHTML=quizData.length;
}
loadQuset()



function popupBox(){
  // Creat layout
  let overlay=document.createElement('div');
  overlay.className= 'popub-overlay';
  document.body.appendChild(overlay);
  let popub =document.createElement('div');
  popub.className='popup';
  let text = document.createElement('h3');
  let p = document.createElement('p');
  let reset = document.createElement('button');
  text.innerHTML='You Have Finished The Quiz';
  p.innerHTML=`and Your Score Is:<span id="s">${score}/${quizData.length}</span>`
  reset.innerHTML ='Try Again'
  reset.addEventListener('click',() =>location.reload())
  popub.appendChild(text);
  popub.appendChild(p);
  popub.append(reset);
  document.body.appendChild(popub);

}
progres=document.getElementById('progres')

function submit(e){
  let currD =quizData[currentQuest];
  let prog = ((currentQuest + 1) * 100 / quizData.length)
  progres.style.width= prog+'%';
  if(e == currD.correct){
    score++;
    if(score == quizData.length){
      audio.volume = 0.2;
      audio.play();
    }
  }
  currentQuest++;
  if(currentQuest < quizData.length){
    loadQuset();
  }else{
    popupBox();
    score >=10 ? s.style.color='gold':score <=7 ? s.style.color='red' :s.style.color='green';
  }
}

