
let btnInvia = document.querySelector("#btnInvia");
let elCarResidui = document.querySelector("#carResidui");
let elDemo = document.querySelector("#demo");
let elMessaggio = document.querySelector("#messaggio"); //textarea

btnInvia.addEventListener("click", function(){
    stampaMessaggio();
});

elMessaggio.addEventListener("keyup", contaCar)


function stampaMessaggio(){
    let testoInserito;
    testoInserito = document.querySelector("#messaggio").value;
    elDemo.innerHTML = "<p>" + testoInserito + "</p>"
}


function contaCar(){
    let testoInserito = document.querySelector("#messaggio").value;
    let counter = (128 - testoInserito.length);
    elCarResidui.innerHTML = counter;

    if(counter <= 0){
        let msg = document.querySelector("#messaggio").value.substring(0,128);
        elMessaggio.value = msg;
        // elMessaggio.setAttribute("disabled", true)
    }

}