let Answer;
let question = document.getElementById('question');
let supplement = document.getElementById('supplement');
let sentence = document.getElementById('sentence');

let YourAnswer = document.getElementById('YourAnswer');
let output = document.getElementById('output');
let inform;

let mode_fully = document.getElementById('fullyRandom'); // 完全ランダムモード
let mode_one = document.getElementById("oneRandom") //　ランダム一周モード
let shuffles = [];
let mode = [true, false];

let range_min = document.getElementById('range_min'); // 数字の制限
let range_max = document.getElementById('range_max'); // 数字の制限
let min = 1, max = 3500;
let original_min, original_max, n_num;
let changeRange = document.getElementById("changeRange");

let changeWord = document.getElementById('changeWord'); //wordの変更
let nowNumber;
let inputShift = false;

let norm = [];
let verb_a = new Array(100);
let verb_b = new Array(300);
let adjective = new Array(200);
let adverb = new Array(100);
let quizs =[];


//ランダム関数(連続して同じものは出ない)
function random(array) {
  if (mode[1]) { //　ランダム１周モード
    return Pattern_ans(shuffles[nowNumber]);
  } 
  else 
  {
    let nextNum = Math.floor(Math.random() * array.length);

    while (array.length >= 2) {
      if (nextNum !== nowNumber) {
        nowNumber = nextNum;

          return Pattern_ans(array[nowNumber]);
      } else {
        nextNum = Math.floor(Math.random() * array.length);
      }
    }
    return Pattern_ans(array[0]);
  }
}

//最初に画面表示時
window.onload = function () {
  original_min = window.globalInt.min;
  original_max = window.globalInt.max;
  n_num =  window.globalArray.n_num;

  min = original_min;
  max = original_max;

  for (const idea of window.globalArray.n) {
    norm.push(idea);
  }

  // let rd = random(norm);  //random(0-1)
  // question.innerText = rd[2];
  // supplement.innerText = rd[6];
  // sentence.innerText = rd[4];
  // Answer = rd[7];
}


// ここから始まる　ーーーーーーーーーーーーーーーーーーーーーーー

YourAnswer.addEventListener('keydown', inputEnter);
changeWord.addEventListener('click', f_changeWord);

mode_fully.addEventListener("click", function(){mode[0] = true, mode[1] = false});
  mode_one.addEventListener("click", function(){mode[1] = true, mode[0] = false});


// 問題変更時の動作
function f_changeWord() {
  YourAnswer.value = null;
  output.innerHTML = null;

  random(quizs);  //random(0-1)
}

function Pattern_ans(rd) {
  if (rd) {
    question.innerText = rd[2];
    supplement.innerText = rd[6];
    sentence.innerText = rd[4];
    Answer = rd[7];

    if (mode[1]) {
      console.log(nowNumber+"番目　　", rd);
      nowNumber++; //ランダム１周モード用
    } else {
      console.log(rd);
    }
  } else {
    alert("Out of range!" + "　一周しました！");
  }
}

//　答え合わせの動作
function inputEnter(e) {
  if (e.keyCode === 13) {
    if (YourAnswer.value == Answer) {
      inform = "正解";
    } else {
      inform = "不正解";
    }
    output.innerHTML = inform;

    return false;
  }
}

// rangeの数字制限 ＆　最小値と最大値の場合分け
function minimum() {
  //if (e.keyCode == 13) {
  if (range_min.value == !Number || null) {
    range_min.value = original_min;
  } else if (range_min.value < original_min) {
    range_min.value = original_min;
  } else if (range_min.value >= max) {
    range_min.value = max;
  }
  min = Number(range_min.value);
  //}
}
function maximum() {
  //if (e.keyCode == 13) {
  if (range_max.value == !Number || null) {
    range_max.value = original_max;
  } else if (range_max.value > original_max) {
    range_max.value = original_max;
  } else if (range_max.value <= min) {
    range_max.value = min;
  }
  max = Number(range_max.value);
  //}
}
// 問題形態の変更
changeRange.addEventListener('click', confirm_range);

function confirm_range() {
  nowNumber = 0;
  minimum();
  maximum();
  quizs.length = 0;
  for (let i in n_num) {
    if (min <= n_num[i] && n_num[i] <= max) {
      quizs.push(norm[i]);
      //console.log(quizs);
    }
  }

  // 重複なしのランダム配列
  if(mode[1]){
  var a = quizs.length;
  shuffles = new Array(a);
    for (let i = 0; i < a; i++) {
      let j = Math.floor(Math.random() * i);
      if(i !== j){
      shuffles[i] = shuffles[j];
      }
      shuffles[j] = quizs[i];
    }
    console.log(shuffles);
  } else {
  console.log(quizs);
  }
}
