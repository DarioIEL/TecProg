// //funzioni parametriche, cioè funzioni con firma piena, funzione con parametri definiti

function calcolaArea(altezza, larghezza){
    let area = altezza * larghezza;
    return area;
}


function calcolaVolume(profondita){
    //sto richiamando una funzione passando dei parametri 
    let area = calcolaArea(10, 5); //50

    let volume = area * profondita;

    return volume;
}


let volume = calcolaVolume(6); //50 * 6 = 300

console.log(volume);

//////////////////////////////////////OPPURE///////////////////

// function calcolaVolume(profondita){
//     function calcolaArea(altezza, larghezza){
//         let area = altezza * larghezza;
//         return area;
//     }
//     let area = calcolaArea(5,6);
//     let volume = area * profondita;
//     return volume;
// }


////////OPPURE///////////////

function calcolaArea(altezza, larghezza){

    return altezza * larghezza;
}

function calcolaVolume(altezza, larghezza, profondita){

    let area = calcolaArea(altezza, larghezza);

    let volume = area * profondita;

    return volume;
}


// ///////////OPPPURE///////////

// function calcolaVolume2(area, profondita){

//     let volume = area* profondita;

//     return volume;

// }

// //function di callback
// calcolaVolume2(calcolaArea(4,5), 75);








