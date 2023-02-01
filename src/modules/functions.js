const gameId = 'DzTobOKlFqCNaD87Ic3E';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

// Fetch scores form API
export const getScores = async () => {
  const response = await fetch(`${url}`);
  const { result } = await response.json();
  return result;
};

// export const addScoreToArr = (score) => {
//   scoresArr.push(score);
// };

export const addScoreToDOM = (score) => {
  const scoreItem = document.createElement('li');
  scoreItem.className = 'recent__score';
  scoreItem.textContent = `${score.user}: ${score.score}`;

  const scoresContainer = document.querySelector('.recent__scores');
  scoresContainer.appendChild(scoreItem);
};
