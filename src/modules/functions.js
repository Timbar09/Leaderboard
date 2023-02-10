const gameId = 'DzTobOKlFqCNaD87Ic3E';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

// Fetch scores form API
export const fetchScores = async () => {
  const response = await fetch(`${url}`);
  const { result } = await response.json();

  return result;
};

// Add score to the DOM
export const addScoreToDOM = (score) => {
  const scoreItem = document.createElement('li');
  scoreItem.className = 'recent__score flex';

  const userName = document.createElement('span');
  userName.className = 'recent__score-user';
  userName.textContent = score.user;

  const userScore = document.createElement('span');
  userScore.className = 'recent__score-score';
  userScore.textContent = score.score;

  scoreItem.appendChild(userName);
  scoreItem.appendChild(userScore);

  const scoresContainer = document.querySelector('.recent__scores');
  scoresContainer.appendChild(scoreItem);

  return scoresContainer;
};

// Add score to API
export const addScoreToAPI = async (score) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });

  const { result } = await response.json();
  return result;
};

// Render scores to the DOM
export const renderScoresToDOM = async (scores, addScoreToDOM) => {
  const scoresContainer = document.querySelector('.recent__scores');
  scoresContainer.innerHTML = '';

  const refreshBtn = document.querySelector('.recent__refresh');
  refreshBtn.disabled = true;

  scores.forEach(addScoreToDOM);

  refreshBtn.disabled = false;
};
