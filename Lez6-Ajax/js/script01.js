//FETCH
const URL = "https://reqres.in/api/users"; //endpoint


let nomePrimaPersona = "";

//Sto applicando il metodo GET per acquisire dati
fetch(URL)
.then(data => {
    console.log(data.status);
    if(data.status == 200){
        console.log("tutto ok, il server comunica");
    }
    return data.json()})
.then(response => {

    // console.log(response.data[0].first_name);

    nomePrimaPersona = response.data[0].first_name;
    console.log("Il nome della prima persona è:" + nomePrimaPersona);

    stampaNellaPagina(response.data);
});


let demo = document.querySelector("#demo");

/**
 * @param {Array} listaDiPersone 
 */
function stampaNellaPagina(listaDiPersone){
    listaDiPersone.forEach(persona =>{
        demo.innerHTML += `<li> ${persona.first_name} ${persona.last_name}
        <img src ='${persona.avatar}'> </li>`;
    })
}
