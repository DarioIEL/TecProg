let demo = document.querySelector("#demo");

let btnSaluta = document.querySelector("#btnSaluta");

function saluta(){
    demo.innerHTML = "Ciao, Dario"
}

//per richiamare la funzione saluta al click sul pulsante non devo utilizzare le parentesi tonde
btnSaluta.addEventListener("click", saluta);

////////////////////////////////////////////////////////////////////
//Quando la funzione da richiamare ha dei parametri devo utiklizzare la funzione anonima all'interno dell'addEventListener

let btnSalutaStudente = document.querySelector("#btnSalutaStudente");

function salutaStudente(nomeStudente){
    demo.innerHTML = "Ciao, " + nomeStudente;
}

btnSalutaStudente.addEventListener("click", function(){
    salutaStudente("Pippo");
})


///////////////////////////////////////////////////////////////////////////////////
let btnSalutaQualcuno = document.querySelector("#btnSalutaQualcuno");

btnSalutaQualcuno.addEventListener("click", function(){

    let nomeQualcuno = "Nessuno";

    demo.innerHTML = "Ciao, " + nomeQualcuno;
});

////////////////////SALUTA USER Ver.1 //////////////////
// let btnSalutaUser = document.querySelector("#btnSalutaUser");

// function salutaUser(username){
//     demo.innerHTML = "Ciao, " + username;
// }

// btnSalutaUser.addEventListener("click", function(){

//     let username = document.querySelector("#nomeUser").value;

//     salutaUser(username);

// });


//////////////////////////SALUTA USER Ver. 2 //////////////
// let btnSalutaUser = document.querySelector("#btnSalutaUser");


// btnSalutaUser.addEventListener("click", function(){

//     let username = document.querySelector("#nomeUser").value;

//     if(username == ""){
//     demo.innerHTML = "Inserisci il tuo nome per farti salutare"
//     }else{
//         demo.innerHTML = "Ciao, " + username;
//     }

// });

////////////////////////////////////SALUTA Ver.3 ////////////////////

let btnSalutaUser = document.querySelector("#btnSalutaUser");
let username = document.querySelector("#nomeUser"); //input

function salutaUser(username){
    demo.innerHTML = "Ciao, " + username;
}


btnSalutaUser.addEventListener("click", function(){
    let nomeUser = username.value;
    salutaUser(nomeUser); 
});

username.addEventListener("keyup", function(){

    console.log(event.target);
    console.log(event.key);
    console.log(event.keyCode);

    if(event.key == "Enter"){
        let nomeUser = username.value;
        salutaUser(nomeUser);
    }
})



