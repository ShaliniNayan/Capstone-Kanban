const RefreshList = async (likes) => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0/',
  );

  const json = await response.json();

  for (let i = 1; i < 20; i += 1) {
    let likesCount = 0;
    try {
      if (likes[i].likes !== undefined) {
        likesCount = likes[i].likes;
      }
    } catch {
      likesCount = 0;
    }

    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`;
    const { name } = json.results[i];
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
