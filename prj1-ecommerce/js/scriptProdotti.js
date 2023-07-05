//fetch per le categorie
const URLCategorie = "https://dummyjson.com/products/categories";

fetch(URLCategorie)
.then(data => {return data.json()})
.then(response =>{
    console.log(response);
    creaSelect(response);    
});


let selectCategorie = document.querySelector("#selectCategorie");

/**
 * @param {Array} listaCategorie 
 */
function creaSelect(listaCategorie){   

    listaCategorie.forEach(categoria =>{
        let optCategoria = document.createElement("option");
        optCategoria.innerHTML = categoria;
        optCategoria.setAttribute("value", categoria); //<option value="nomeCategoria">nomeCategoria</option>
        
        selectCategorie.appendChild(optCategoria);        
        
    });

    selectCategorie.addEventListener("change", function(){
        mostraProdotti(this.value);
    });

}

function mostraProdotti(categoria){
    console.log(categoria);

    //costruire una nuova then che richiama i prodotti filtrati by categoria, vedere la documentazione di DummyJSON
}