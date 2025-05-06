var texto = "jesus";

var textoMaiusculo = texto.toUpperCase();       // JESUS
var textoMinusculo = texto.toLowerCase();       // jesus
var textoSubstituido = texto.replace("e", "i"); // jisus
var textoCortado = texto.slice(3, 5);           // us

document.write(texto + "<br>");
document.write(textoMaiusculo + "<br>");
document.write(textoMinusculo + "<br>");
document.write(textoSubstituido + "<br>");
document.write(textoCortado + "<br>");