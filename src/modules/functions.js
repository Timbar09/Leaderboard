export const scoresArr = [
  { user: 'Miles', score: 1300 },
  { user: 'Mosweu', score: 1500 },
  { user: 'Timbar', score: 1000 },
];

const gameId = 'DzTobOKlFqCNaD87Ic3E';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

export const addScoreToArr = (score) => {
  scoresArr.push(score);
};

export const addScoreToDOM = (score) => {
  const scoreItem = document.createElement('li');
  scoreItem.className = 'recent__score';
  scoreItem.textContent = `${score.user}: ${score.score}`;

  const scoresContainer = document.querySelector('.recent__scores');
  scoresContainer.appendChild(scoreItem);
};
