import getGameId from './game_id.js';

const appId = getGameId();

const addLike = async (index) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const data = {
    item_id: index.toString(),
  };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.status;
};

const getLikes = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const response = await fetch(url);
  const data = await response.json();
  const likesArray = [];
  data.forEach((element) => {
    likesArray[parseInt(element.item_id, 10)] = element.likes;
  });
  return likesArray;
};

export { addLike, getLikes };