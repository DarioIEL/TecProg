function moltiplica(num1, num2){
    return num1 * num2
}   

function somma(num1, num2){
    let _num1 = (num1);
    let _num2 = (num2);
 
    return _num1 + _num2;
}

function dividi(num1, num2){
    let risultato = num1 / num2;
    return risultato;
}

function sottrai(num1, num2){
    let risultato = num1 - num2;
    return risultato;
}

let demo = document.getElementById("demo");

function calcola(){
    
    //recupero il value del campo input, cioè quello che scrive l'utente
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    

    console.log(num1);

    demo.innerHTML =" La moltiplicazione vale: " + moltiplica(num1, num2) + "<br>";
    demo.innerHTML +="La Somma vale: " + somma(num1, num2) + "<br>";
    demo.innerHTML += "La sottrazione vale: " + sottrai(num1, num2) +"<br>";
    demo.innerHTML += "La divisione vale: " + dividi(num1, num2).toPrecision(3) +"<br>";

}

let btn = document.getElementById("btn");

//in questo caso la funzione non ha le parentesi tonde
btn.addEventListener("click", calcola);