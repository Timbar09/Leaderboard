import './style.css';
import Score from './modules/scoreClass.js';
import { addScoreToAPI, addScoreToDOM, renderScoresToDOM } from './modules/functions.js';

const form = document.querySelector('.add__form');
const refreshBtn = document.querySelector('.recent__refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.querySelector('#user');
  const score = document.querySelector('#score');
  const newScore = new Score(user.value, score.value);

  const submitBtn = document.querySelector('.submit');
  submitBtn.disabled = true;

  addScoreToAPI(newScore);
  addScoreToDOM(newScore);

  submitBtn.disabled = false;
  form.reset();
});

refreshBtn.addEventListener('click', renderScoresToDOM);

renderScoresToDOM();
