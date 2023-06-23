function Item(todo, data){
    this.todo = todo;
    this.data = data;
}

let listaTodos = [];


let btnAgg = document.getElementById("btnAgg");
let listaItem = document.getElementById("listaItem");
let demo = document.getElementById("demo");

function aggiungi(){
   
    let todoItem = document.getElementById("todoItem").value;
    let data = document.getElementById("data").value;
    
    let dataCorretta = new Date(data);
    let giorno = dataCorretta.getDate();
    let mese = dataCorretta.getUTCMonth();
    let anno = dataCorretta.getFullYear();
    let dataDaStampare = giorno + "/" + mese + "/" + anno;

    let miaTodo = new Item(todoItem, dataDaStampare);
    listaTodos.push(miaTodo);

}

function stampa(){
    listaItem.innerHTML = "";

    listaTodos.forEach( 
        /**
         * @param {Item} item 
         */
        (item) => {
        listaItem.innerHTML += "<li>" + item.todo + " - " + item.data + "</li>";
    });
}

function pulisci(){
    document.getElementById("todoItem").value = "";
    document.getElementById("data").value = "";
}


function controlla(){
    let todoItem = document.getElementById("todoItem").value;
    let data = document.getElementById("data").value;

    if(todoItem == "" || data == ""){
        demo.innerHTML = "Guarda che c'è qualcosa che non va";
        return false;
    }else{
        demo.innerHTML = "";
        return true;
    }   
}


btnAgg.addEventListener("click", function(){
    if( controlla() ){

        aggiungi();
        stampa();
        pulisci();
    
    }
});

