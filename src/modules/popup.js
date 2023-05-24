import previewImg from '../images/pokemon-preview.gif';
import getGameId from './game_id.js';

const appId = getGameId();
const countComment = (counter) => {
  const newCount = counter + 1;
  return newCount;
};
const getComments = async (index) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=item${index}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
const RefreshPopup = async (index) => {
  const popupImg = document.querySelector('.popup-img');
  popupImg.src = previewImg;
  const pokeName = document.querySelector('.poke-name');
  const features = document.querySelector('.features');
  const lastComments = document.querySelector('.last-comments');
  const commentsCount = document.querySelector('.comments-count');
  const commentsForm = document.querySelector('.comments-form');

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const json = await response.json();

  pokeName.innerHTML = json.name.charAt(0).toUpperCase() + json.name.slice(1);
  let abilities = '';
  for (let j = 0; j < json.abilities.length; j += 1) {
    abilities += json.abilities[j].ability.name;
    if (j !== json.abilities.length - 1) {
      abilities += ', ';
    }
  }
  let moves = '';
  for (let j = 0; j < 3; j += 1) {
    moves += json.moves[j].move.name;
    if (j !== 2) {
      moves += ', ';
    }
  }

  features.innerHTML = `
    <li>Height: ${json.height / 10} m</li>
    <li>Abilities: ${abilities}</li>
    <li>Weight: ${json.weight / 10} kg</li>
    <li>Moves: ${moves}</li>
    <li>Base Experience: ${json.base_experience}</li>
    `;

  const comments = await getComments(index);
  if (comments.length !== undefined) {
    lastComments.innerHTML = '';
    let counter = 0;
    for (let i = comments.length - 1; i >= 0; i -= 1) {
      lastComments.innerHTML += `
            <li>
            ${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}
            </li>
            `;
      counter = countComment(counter);
    }
    commentsCount.innerHTML = `(${counter})`;
  } else {
    commentsCount.innerHTML = '(0)';
    lastComments.innerHTML = 'no comments...';
  }

  const addComment = async (index) => {
    const username = document.getElementById('username');
    const comment = document.getElementById('comment');

    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;
    const data = {
      item_id: `item${index}`,
      username: username.value,
      comment: comment.value,
    };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    username.value = '';
    comment.value = '';
    RefreshPopup(index);
    return response;
  };

  commentsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(index);
  });
  popupImg.src = json.sprites.other['official-artwork'].front_default;
};

export { countComment, RefreshPopup };