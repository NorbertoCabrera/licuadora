//console.log(123);

let estadoLicuadora = "apagada";
let licuadora = document.getElementById("blender");
let sonidoLicuadora=document.getElementById("blender-sound");
let sonidoBoton= document.getElementById("blender-button-sound");
const controlarLicuadora = () => {
    if (estadoLicuadora=="apagada"){
        estadoLicuadora="encendida";
        sonidoEncendido();
        licuadora.classList.add("active");
        
        /* console.log("me prendiste"); */
    }else{
        estadoLicuadora="apagada";
        sonidoEncendido();
        licuadora.classList.remove("active");
        /* console.log("me apagaste"); */
    }
}



const sonidoEncendido = () =>{

    if(sonidoLicuadora.paused){
        sonidoBoton.play();
        sonidoLicuadora.play();

    }else {
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }

}