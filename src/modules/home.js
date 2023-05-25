const RefreshList = async (likes) => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=21&offset=0/',
  );

  const json = await response.json();

  for (let i = 1; i < 21; i += 1) {
    if (likes[i - 1] === undefined) {
      likes[i - 1] = 0;
    }

    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`;
    const { name } = json.results[i - 1];
    const char = document.getElementById('char');
    char.innerHTML += `
      <li>
        <img src='${image}' alt="image">
        <span>${name.toUpperCase()}</span> 
        <p><i id="like-count${i}"> ${likes[i - 1]} Likes</i>  <span id="like${i}">&#10084;&#65039;</span> </p>
        <button id="btn${i}">Comment</button>
      </li>
    `;
  }
};

const countLikes = (counter) => {
  const newCount = counter + 1;
  return newCount;
};

export { RefreshList, countLikes };
