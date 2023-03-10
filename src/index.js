import './style.css';
import Score from './modules/scoreClass.js';
import {
  addScoreToAPI, addScoreToDOM, fetchScores, renderScoresToDOM,
} from './modules/functions.js';

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

refreshBtn.addEventListener('click', async () => {
  const scores = await fetchScores();
  const refreshIcon = document.querySelector('.recent__refresh span');

  refreshIcon.classList.add('refresh');
  renderScoresToDOM(scores, addScoreToDOM);

  refreshIcon.addEventListener('animationend', () => {
    refreshIcon.classList.remove('refresh');
  });
});

window.addEventListener('load', async () => {
  const scores = await fetchScores();
  renderScoresToDOM(scores, addScoreToDOM);
});
