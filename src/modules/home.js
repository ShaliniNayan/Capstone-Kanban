const RefreshList = async (likes) => {
  for (let i = 1; i < 21; i += 1) {
    let likesCount = 0;
    try {
      if (likes[i].likes !== undefined) {
        likesCount = likes[i].likes;
      }
    } catch {}

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await response.json();
    const image = json.sprites.other.dream_world.front_default;
    const name = json.name;
    const id = json.id;
    const char = document.getElementById('char');
    char.innerHTML += `
    <li>
    <img src='${image}' alt="image">
    <span>${name}</span> 
    <span>&#10084;&#65039</span>
    <span>${likesCount}Likes</span>
    <button>Comment</button>
  </li>
    `;
  }
};
const countLikes = (counter) => {
  const newCount = counter + 1;
  return newCount;
};

export { RefreshList, countLikes };
