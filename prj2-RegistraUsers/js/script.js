let formReg = document.querySelector("#formReg");
let demo = document.querySelector("#demo");
const URL = "http://localhost:3000/users";

function User(nome, cognome, email, codFis, ruolo){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.codFis = codFis;
    this.ruolo = ruolo;
}

function registraUser(){
    
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;
    let email = document.querySelector("#email").value;
    let codFiscale = document.querySelector("#codFis").value;
    let ruolo = document.querySelector("#ruolo").value;

    let REGCodFis =  /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i

    if(nome == "" || cognome == "" || email == "" || ruolo == ""){
        event.preventDefault();
        demo.innerHTML = "Controlla il form, tutti i campi devono essere compilati"
    }
    else{
        let user = new User(nome, cognome, email, codFiscale, ruolo);
        caricaSuDB(user);
    }
    
    if(!codFiscale.match(REGCodFis)){
          demo.innerHTML += "Codice fiscale errato !!"
          event.preventDefault();
      }

}

function caricaSuDB(user){

    fetch(URL, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(user)
    })
    .then(data =>{return data.json()})

}


formReg.addEventListener("submit", registraUser);