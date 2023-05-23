
import previewImg from '../images/pokemon-preview.gif';
const RefreshList = async (index) => {
    const popupImg = document.querySelector('.popup-img');
    popupImg.src = previewImg;
    const pokeName = document.querySelector('.poke-name');
    const features = document.querySelector('.features');

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    
    const json = await response.json();
    popupImg.src = json.sprites.other['official-artwork'].front_default;
    pokeName.innerHTML =json.name.charAt(0).toUpperCase() + json.name.slice(1) ;
    let abilities = ""; 
    for (let j = 0; j < json.abilities.length; j += 1) {
        abilities += json.abilities[j].ability.name
        if (j !== json.abilities.length -1) {
            abilities+=", "
        }
    }
    let moves = "";
    for (let j = 0; j < 3; j += 1) {
        moves += json.moves[j].move.name
        if (j !== 2) {
            moves+=", "
        }
    }

    features.innerHTML=`
    <li>Height: ${json.height/10} m</li>
    <li>Abilities: ${abilities}</li>
    <li>Weight: ${json.weight/10} kg</li>
    <li>Moves: ${moves}</li>
    <li>Base Experience: ${json.base_experience}</li>
    `;
    



        console.log(json);
    }
  export default RefreshList;