function encriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();   
    
    //i = es para que tome letras mayusculas y minusculas
    //m = tome en cuenta multiples lineas
    //g = tome en cuenta toda la linea o la oracion 
    var texto = frase.replace(/e/img, "enter");
    var texto = texto.replace(/o/img, "ober");
    var texto = texto.replace(/i/img, "imes");
    var texto = texto.replace(/a/img, "ai");
    var texto = texto.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = removeAccents(texto);
    
}

function desencriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();   
    
    //i = es para que tome letras mayusculas y minusculas
    //m = tome en cuenta multiples lineas
    //g = tome en cuenta toda la linea o la oracion 
    var texto = frase.replace(/enter/img, "e");
    var texto = texto.replace(/ober/img, "o");
    var texto = texto.replace(/imes/img, "i");
    var texto = texto.replace(/ai/img, "a");
    var texto = texto.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = removeAccents(texto);
}

function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");

}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 



