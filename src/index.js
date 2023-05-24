import './style.css';
import { RefreshPopup } from './modules/popup.js';
import { RefreshList } from './modules/home.js';
import { getLikes } from './modules/like.js';

// async function createApp() {
//     const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`;
//     const response = await fetch(url, {
//       method: "POST",
//     });
//       const data = await response.text();
//       return data;
//   }
//   const appId = await createApp();
//   console.log(appId) //C32ZcOUkgpZxhnt5Bm3z

const asyncLikes = async () => {
  RefreshPopup(3);
  const likes = await getLikes();
  RefreshList(likes);
};

asyncLikes();
