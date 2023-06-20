function estrai(){
    
        let numeriDaEstrarre = document.getElementById("numeriDaEstrarre").value;
        
        let numeriEstratti = [];
        let numGiri = 0;
        
    if(numeriDaEstrarre <= 0 || numeriDaEstrarre > 10 ){
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
       
    }

    demo.innerHTML += creaSerie(numeriEstratti);        
    
    console.log(numGiri);
    console.log(numeriEstratti);
  
}

/**
 * @param {Array} numEstratti 
 */


function creaSerie(numEstratti){
    let serie = "<p>";

    numEstratti.forEach(num => {
      serie += num + " ";
    });

    serie += "</p>";

    return serie;
}

let demo = document.getElementById("demo");
let btn = document.getElementById("btn");

function stampa(){    
    let serie = document.getElementById("serie").value;
    
    for(let i = 0; i < serie; i++){
        estrai();
    }
}

btn.addEventListener("click", stampa);









// let colori = ["bianco", "verde", "giallo"];
// console.log(colori.indexOf("giallo")); //2
// console.log(colori.indexOf("42")); //-1
