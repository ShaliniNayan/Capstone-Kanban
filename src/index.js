import './style.css';
import { RefreshPopup } from './modules/popup.js';
import { RefreshList, countLikes } from './modules/home.js';
import { getLikes, addLike } from './modules/like.js';

const asyncList = async () => {
  const likes = await getLikes();
  RefreshList(likes);
};

asyncList();

const asyncLikes = async (index) => {
  const likes = await getLikes();
  const likeCount = document.getElementById(`like-count${index + 1}`);
  likeCount.innerHTML = `${countLikes(likes[index])} Likes`;
  await addLike(index);
};

const char = document.getElementById('char');
const commentsPopup = document.getElementById('comments-popup');

char.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('btn')) {
    const buttonId = event.target.id;
    const index = buttonId.replace('btn', '');
    commentsPopup.style.display = 'flex';
    RefreshPopup(index);
  }
  if (event.target.tagName === 'SPAN' && event.target.id.startsWith('like')) {
    const buttonId = event.target.id;
    const index = buttonId.replace('like', '');
    asyncLikes(index - 1);
  }
});

const closeIcon = document.querySelector('.close');
closeIcon.addEventListener('click', () => {
  commentsPopup.style.display = 'none';
});

// async function createApp() {
//   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
//   const response = await fetch(url, {
//     method: 'POST',
//   });
//   const data = await response.text();
//   return data;
// }
// const appId = await createApp();
// console.log(appId);