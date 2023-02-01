const gameId = 'DzTobOKlFqCNaD87Ic3E';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

// Fetch scores form API
export const getScores = async () => {
  const response = await fetch(`${url}`);
  const { result } = await response.json();

  return result;
};

// Add score to the DOM
export const addScoreToDOM = (score) => {
  const scoreItem = document.createElement('li');
  scoreItem.className = 'recent__score';
  scoreItem.textContent = `${score.user}: ${score.score}`;

  const scoresContainer = document.querySelector('.recent__scores');
  scoresContainer.appendChild(scoreItem);

  return scoresContainer;
};

// Add score to API
export const addScore = async (score) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });

  addScoreToDOM(score);

  const { result } = await response.json();
  return result;
};

// Render scores to the DOM
export const renderScoresToDOM = async () => {
  const scoresContainer = document.querySelector('.recent__scores');
  scoresContainer.innerHTML = '';

  const scores = await getScores();

  scores.forEach(addScoreToDOM);
};
