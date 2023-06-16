function moltiplica(num1, num2){
    return num1 * num2
}   

function somma(num1, num2){
    let _num1 = Number(num1);
    let _num2 = Number(num2);
 
    return _num1 + _num2;
}

let demo = document.getElementById("demo");

function calcola(){
    
    //recupero il value del campo input, cioè quello che scrive l'utente
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    demo.innerHTML =" La moltiplicazione vale: " + moltiplica(num1, num2) + "<br>";
    demo.innerHTML +=" La Somma vale: " + somma(num1, num2);
}

let btn = document.getElementById("btn");

//in questo caso la funzione non ha le parentesi tonde
btn.addEventListener("click", calcola)