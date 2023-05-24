const RefreshList = async () => {
  for (let i = 1; i < 21; i += 1) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await response.json();
    const image = json.sprites.other.dream_world.front_default;
    const name = json.name;
    const id = json.id;
    const char = document.getElementById('char');
    char.innerHTML += `
    <li>
    <img src='${image}' alt="image">
    <span>Name</span> 
    <span>&#10084;&#65039</span>
    <span>Likes</span>
    <button>Comment</button>
    
  </li>
    `;
  }
};
RefreshList();
export default RefreshList;
