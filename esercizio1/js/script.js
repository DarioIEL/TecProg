function estrai(){
    demo.innerHTML = "";

    let numeriDaEstrarre = document.getElementById("numeriDaEstrarre").value;

    let numeriEstratti = [];
    let numGiri = 0;

    if(numeriDaEstrarre < 0 || numeriDaEstrarre > 10){
        demo.innerHTML = "Metti un valore da 1 a 10";
    }else{
        
        for(i=0; i < numeriDaEstrarre; i++){
            numGiri++;
            var numero = Math.ceil(Math.random() * 90 );    
            if(numeriEstratti.indexOf(numero) == -1){
                numeriEstratti.push(numero)       
            }else{
                i--;
            }
        }

        ////////////WHILE////////////////////
        // while(numeriEstratti.length < numeriDaEstrarre){
        //     var numero = Math.ceil(Math.random() * 90);
        //     if(numeriEstratti.indexOf(numero) == -1){
        //         numeriEstratti.push(numero);
        //     }
        // }


        ////////////SPLICE////////////////

        // let numeri = [];

        // for(let i = 0; i < 90; i++){
        //     numeri.push(i+1);
        // }

        // for(let i = 0; i < numeriDaEstrarre; i++){
        //     var numero = Math.floor(Math.random() * numeri.length);
        //     numeriEstratti.push(numeri[numero]);
        //     numeri.splice(numero, 1);
        // }


        numeriEstratti.forEach(num => {
            demo.innerHTML += num + " "
        });
    }
    console.log(numGiri);
    console.log(numeriEstratti);
}

let demo = document.getElementById("demo");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    //tutto quello che voglio 
    estrai();
});











// let colori = ["bianco", "verde", "giallo"];
// console.log(colori.indexOf("giallo")); //2
// console.log(colori.indexOf("42")); //-1
