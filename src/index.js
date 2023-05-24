import './style.css';
// import pokemonlogo from './images/pokemonlogo.png';
import { RefreshList, countLikes } from './modules/home.js';
import { addLike, getLikes } from './modules/like.js';

// document.getElementById('poke-logo').src = pokemonlogo;

const asyncLikes = async () => {
  console.log(await addLike(9));
  const likes = await getLikes();
  console.log(likes);
  RefreshList(likes);
};

asyncLikes();

