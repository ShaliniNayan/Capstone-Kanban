for (let i = 1; i < 100; i += 1) {
    const RefreshList = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  
      const json = await response.json();
      console.log(json.sprites.other.dream_world.front_default);
      console.log(json.sprites.other.home.front_default);
      console.log(json.sprites.other['official-artwork'].front_default);
  
      for (let j = 0; j < json.abilities.length; j += 1) {
        console.log(`ability:${json.abilities[j].ability.name}`);
      }
  
      console.log(`base_experience:${json.base_experience}`);
      console.log(`height:${json.height}`);
      console.log(`name:${json.name}`);
      console.log(`order:${json.order}`);
      console.log(`weight:${json.weight}`);
      console.log(`id:${json.id}`);
  
      for (let j = 0; j < 3; j += 1) {
        console.log(`Moves: ${json.moves[j].move.name}`);
      }
      console.log(json);
    };
    RefreshList();
  }