async function fetchpokeData(inputElement) {
  const url = `https://pokeapi.co/api/v2/pokemon/${inputElement}`;

  try {
    const response = await fetch(url); // await since its a promise
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    document.querySelector('.status').innerHTML = ''
    const data = await response.json(); // promised response
    console.log(data);
    const sprite = data.sprites.front_default;
    const shiny = data.sprites.front_shiny;
    const type1 = data.types[0].type.name;
    let type2 = '';
    if(data.types.length > 1){
      type2 = data.types[1].type.name;
    }
    const weight = data.weight;
    const height = data.height;
    const hp = data.stats[0].base_stat;
    const attack = data.stats[1].base_stat;
    const Defense = data.stats[2].base_stat;
    const splAttack = data.stats[3].base_stat;
    const splDefense = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;
    const Exp = data.base_experience;
    const firstAppearance = data.game_indices[0].version.name;
    const HTMLEle = `<tr> 
                        <th> Sprite : 
                        <th> <img src = ${sprite}> </th>
                     </tr>
                     <tr> 
                        <th> Shiny sprite : 
                        <th> <img src = ${shiny}> </th>
                     </tr>
                     <tr>
                        <th> Type(s): </th>
                        <th> ${type1} ${type2} </th>
                     </tr>
                     <tr>
                        <th> Fisrt Game: </th>
                        <th> ${firstAppearance} </th>
                     </tr>
                     <tr> 
                        <th> Height: </th>
                        <th> ${height} m </th>
                     </tr>
                     <tr>
                        <th> Weight: </th>
                        <th>  ${weight} Kg </th>
                     </tr>
                     <tr>
                        <th> Base HP: </th>
                        <th> ${hp} </th>
                     </tr>
                     <tr>
                        <th> Base Attack: </th>
                        <th>  ${attack}  </th> 
                     </tr>
                     <tr>
                        <th> Base Defense: </th>
                        <th> ${Defense} </th>
                     </tr>
                     <tr>
                        <th> Base Spl Attack: </th>
                        <th>  ${splAttack} </th>
                     </tr>
                     <tr>
                        <th> Base Spl Defense: </th>
                        <th> ${splDefense} </th> 
                     </tr>
                     <tr>
                        <th> Base Speed: </th>
                        <th>  ${speed}  </th>
                     </tr>
                     <tr>
                        <th> Base EXP: </th>
                        <th>  ${Exp} </th>
                     </tr>`

    document.querySelector('.output').innerHTML = HTMLEle;
  } catch (error) {
    document.querySelector('.status').innerHTML = 'Enter a valid Name!'
  }
}

document.querySelector('.submit-btn').addEventListener('click',() => {
  const inputElement = document.querySelector('.js-input').value;
  fetchpokeData(inputElement);
})