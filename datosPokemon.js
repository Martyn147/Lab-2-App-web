
const consultarPokemon = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      //console.log(data);
      pintarPokemon(data,number)
    })

    .catch((error) => {
      console.log(error);
    });
};

const consultarPokedex = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokedex/${id}`)
    .then((response) => {
      return response.json();
    })

    .then((datap) => {
      //console.log(data);
      pintarPokemon(datap,number)
    })

    .catch((error) => {
      console.log(error);
    });
};



const btnSeleccionar = () => 
{
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultarPokemon(primerPokemon,1);
  consultarPokemon(segundoPokemon,2);
  consultarPokedex(primerPokemon,1);
  consultarPokedex(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
  let item = lista.querySelector(`#pok-${id}`);

  item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);

  item.getElementsByTagName("h5")[0].innerHTML = data.name;

 // item.getElementsByTagName("h1")[0].innerHTML = data.types[0].type.name;

  let pokeUno = ''
  

    for(let i=0; i<data.abilities.length;i++)
    {
      pokeUno += `<li>${data.abilities[i].ability.name}</li>`
    }



    console.log(pokeUno);
    item.getElementsByTagName('p')[0].innerHTML = pokeUno


    let poketype = ''
  

    for(let i=0; i<data.types.length;i++)
    {
        poketype += `<li>${data.types[i].type.name}</li>`
    }



    console.log(poketype);
    item.getElementsByTagName('h1')[0].innerHTML = poketype



}

let texto= "Hola amigos, bienvenidos a la clase de Aplicaciones Web"

const hablar = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}



// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1