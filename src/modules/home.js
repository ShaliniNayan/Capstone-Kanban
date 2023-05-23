for (let i = 1; i < 100; i += 1) {
  const RefreshList = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await response.json();
    console.log(json.sprites.other.dream_world.front_default);
    console.log(`name:${json.name}`);
    console.log(`id:${json.id}`);
  };
  RefreshList();
}
