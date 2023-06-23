let oraEsatta = document.getElementById("oraEsatta");


setInterval( () => {
    let oraNow = new Date();
    
    let ora = (oraNow.getHours() < 10 ? "0" : "") + oraNow.getHours();
    let min = (oraNow.getMinutes() < 10 ? "0": "") + oraNow.getMinutes();
    let sec = (oraNow.getSeconds() < 10 ? "0": "") + oraNow.getSeconds();
    
    oraEsatta.innerHTML = ora + ":" + min + ":" + sec;
    
}, 1000);