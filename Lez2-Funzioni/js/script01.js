//dichiaro la funzione
function saluta(){
    console.log("Ciao Dario!!");
}

//richiamo la funzione
saluta();


//il richiamo della funzione è totalmente indipendente dalla dichiarazione
saluta2();

function saluta2 (){
    console.log("Buongiorno classe");
}


///////////////////////////////////////////
function presentati(){
    //nomeUser è una var locale
    let nomeUser = "Dario";
    console.log("Il mio nome utente è " + nomeUser);
    console.log("Il docente si chiama : " + nomeDocente);
}

function salutaTutti(){
    let nomeUser = "Andonio";
    console.log("Ciao a tutti da " + nomeUser);
    console.log("Il docente si chiama : " + nomeDocente);
}

//var global
let nomeDocente = "Pasquale";

presentati();
salutaTutti();

////////////////////////////////////////////
let demo = document.getElementById("demo");

function spedisciInPausa(){
    let studenti = "La classe intera";
    // console.log(studenti + " va in PAUSA!!!!");
    demo.innerHTML = studenti + " va in PAUSA !!!!";
}

///////////////////////////////////
function getArea(){
    let altezza = 13;
    let larghezza = 5;
    
    let area = altezza * larghezza;

    return area;
}

console.log( getArea() );

//salvo il valore di restituzione della funzione in una variabile
let area = getArea();
console.log(area);


function getVolume() {
    //posso richiamare una funzione dall'interno di un'altra funzione ancora
    let area = getArea();  
    
    let profondita = 8;
    
    let volume = area * profondita;
    
    return volume;
}

let volume = getVolume();
console.log("Il volume è " + volume);


