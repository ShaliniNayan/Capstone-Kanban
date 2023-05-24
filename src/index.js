import './style.css';
// import pokemonlogo from './images/pokemonlogo.png';
import { RefreshList } from './modules/home.js';
import { getLikes } from './modules/like.js';

// document.getElementById('poke-logo').src = pokemonlogo;

const asyncLikes = async () => {
  const likes = await getLikes();
  RefreshList(likes);
};

asyncLikes();
