let listaPokemon = [
    {
        nome: "Pikachu",
        img: "./img/pikachu.jpg",
        tipo: "elettrico",
        descrizione: "Se lo tocchi ci resti secco. 220V 14A"
    },
    {
        nome: "Bulbasaur",
        img: "./img/bulbasaur.jpg",
        tipo: "erba",
        descrizione: "Un pokemon che cresce a vista d'occhio"
    },
    {
        nome: "Charmender",
        img: "./img/charmender.jpg",
        tipo: "fuoco",
        descrizione: "Chiamata ai pompieri incorporata"
    }
];


let listaPoke = document.querySelector("#listaPoke");
let cardPoke = document.querySelector("#cardPoke");


/**
 * 
 * @param {listaPokemon[]} pokemons 
 */
function mostraLista(pokemons){

   pokemons.forEach(pokemon =>{
        let li = document.createElement("li");
        li.textContent = pokemon.nome;

        let pulsMostra = document.createElement("button");
        pulsMostra.textContent = "Mostra Card";

        pulsMostra.addEventListener("click", function(){
            mostraSingolaCard(pokemon);
        });

        li.appendChild(pulsMostra);
        listaPoke.appendChild(li);
    });
}

/**
 * 
 * @param {listaPokemon[i]} pokemon 
 */
function mostraSingolaCard(pokemon){
    console.log(pokemon);

    let card = `
        <h2> ${pokemon.nome}</h2>
        <img id="imgPoke" src = "${pokemon.img}">
        <p>Descrizione: ${pokemon.descrizione}</p>
        <p>Tipo:${pokemon.tipo}</p>
        <button id="btnChiudi">Chiudi</button>`;

    cardPoke.innerHTML = card;

    // let imgPoke = document.querySelector("#imgPoke");
    // imgPoke.addEventListener("click", function(){
    //     //cambia immagine del pokemon
    // });

    let btnChiudi = document.querySelector("#btnChiudi");

    btnChiudi.addEventListener("click", function(){
        cardPoke.innerHTML = "";
    })
}

mostraLista(listaPokemon);

