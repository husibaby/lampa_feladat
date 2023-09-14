function villanykörteFelkapcsolása(params) {
    const villanykörte= document.getElementById("villanykörte");
    console.log(villanykörte);
    villanykörte.setAttribute("src", "img/pic_bulbon.gif");
}

function villanykörteLekapcsolása(params) {
    const villanykörte= document.getElementById("villanykörte");
    console.log(villanykörte);
    villanykörte.setAttribute("src", "img/pic_bulboff.gif");
}

function bevitelFocus(){
    console.log("Belekattintott a beviteli mezőre")
}


function bevitelInput(){
    const bevitel= document.getElementById("bevitel");
    const beirtErtek= bevitel.value;
    console.log("Mezőbe írt érték:", beirtErtek);
}

function bevitelBlur(){
    const bekezdes= document.getElementById("üzenet");
    bekezdes.innerHTML ="Nyisd meg a konzolt";    
}

function uzenetPirosra(){
    const uzenet =document.getElementById("uzenet");
    uzenet.style.color="red";
    uzenet.style.backgroundColor="#AAAA";
}
