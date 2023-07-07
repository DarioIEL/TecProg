//fetch per le categorie
const URLCategorie = "https://dummyjson.com/products/categories";

fetch(URLCategorie)
    .then(data => { return data.json() })
    .then(response => {
        console.log(response);
        creaSelect(response);
    });


let selectCategorie = document.querySelector("#selectCategorie");

/**
 * @param {Array} listaCategorie 
 */
function creaSelect(listaCategorie) {

    listaCategorie.forEach(categoria => {
        let optCategoria = document.createElement("option");
        optCategoria.innerHTML = categoria;
        optCategoria.setAttribute("value", categoria); //<option value="nomeCategoria">nomeCategoria</option>

        selectCategorie.appendChild(optCategoria);
    });

    selectCategorie.addEventListener("change", function () {
        mostraProdotti(this.value);
    });

}



let demo = document.querySelector("#demo");

function mostraProdotti(categoria) {
    console.log(categoria);

    fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then(data => {
            return data.json();
        })
        .then(response => {
            demo.innerHTML = "";
            
            response.products.forEach(prodotto =>{
                // demo.innerHTML += `<li> ${prodotto.title} - ${prodotto.brand} - ${prodotto.price} €
                // <img src=${prodotto.thumbnail}> </li>`;

                demo.innerHTML += `
                <div class="col-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src=${prodotto.thumbnail}>
                    <h3 class="card-title">${prodotto.title}</h3>
                    <p class="card-text">${prodotto.brand}</p>
                    <p class="card-text">Prezzo: ${prodotto.price} €</p>
                    <button onclick='mettiNelCarrello(${prodotto.id})' 
                    class='btn btn-primary' data-id=${prodotto.id}>Compra</button>
                  </div>    
                </div>
              </div>`;


            });

        })
        

}

function mettiNelCarrello(id){
    console.log(id);

    
}