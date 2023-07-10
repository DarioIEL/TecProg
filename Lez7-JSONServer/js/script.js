const URL = "http://localhost:3000/posts";

let demo = document.querySelector("#demo");

fetch(URL)
.then(data => {return data.json()})
.then(response => {

    console.log(response);

    response.forEach(post => {
        demo.innerHTML += "<li> " + post.title + " " + post.author + "</li>";
    });

});


let btn = document.querySelector("#btn");

function caricaPost(){
    let titoloPost = document.querySelector("#titoloPost");
    let autorePost = document.querySelector("#autorePost");
    
    let nuovoPost = {
        title: titoloPost.value,
        author: autorePost.value
    }

    //per poter caricare il nuovoPost nel DB devo mettere in piedi una fetch method POST
    fetch(URL, {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(nuovoPost)
    })
    .then(data =>{return data.json()})
    .then(response => {
        console.log(response.statusCode, "Registrazione avvenuta con successo");
    })
}


btn.addEventListener("click", caricaPost);