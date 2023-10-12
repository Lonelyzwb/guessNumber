'use strict';

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20);

//游戏成功的显示
const winDisplay = () => {
  document.querySelector('body').style.backgroundColor = '#FF6D91';
  document.querySelector('.number').style.width = '24rem';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = '👅 猜对啦！！！';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};

//游戏失败的显示
const loseDisplay = () => {
  document.querySelector('.message').textContent = '🫥 你失败了！！！';
};

//检查游戏成功失败
const checkStatement = (guess, score) => {
  if (guess === secretNumber) {
    //游戏成功的显示
    winDisplay();
    return true;
  } else if (score === 0) {
    loseDisplay();
    return true;
  }
  return false;
};
//猜测函数
const guessNumber = (guess, score) => {
  //游戏成功或者失败
  if (checkStatement(guess, score)) return null;
  return guess > secretNumber ? '🤣 太高啦！！！' : '😅 太低啦！！！';
};

//玩游戏
document.querySelector('.check').addEventListener('click', () => {
  const guess = +document.querySelector('input').value;
  console.log(guess);
  if (guessNumber(guess, score)) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = guessNumber(guess, score);
  }
});

//重置
document.querySelector('.again').addEventListener('click', () => {
  //基础数据清空
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);

  //样式清空
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = '开始 猜测...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
