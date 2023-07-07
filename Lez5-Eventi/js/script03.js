let formLogin = document.querySelector("#formLogin");

function login(){
    //la funz di login registrerà l'utente in local o session storage
    let username = document.querySelector("#username").value;

    if(username.trim() == "" ){
        event.preventDefault();
        console.log(event);
    }

}


formLogin.addEventListener("submit", login);