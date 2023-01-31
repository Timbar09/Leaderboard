import './style.css';
import Score from './modules/score.js';
import { scoresArr, addScoreToArr, addScoreToDOM } from './addScore.js';

const form = document.querySelector('.add__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.querySelector('#user');
  const score = document.querySelector('#score');

  const newScore = new Score(user.value, score.value);

  addScoreToArr(newScore);
  addScoreToDOM(newScore);
  user.value = '';
  score.value = '';
});

scoresArr.forEach(addScoreToDOM);
