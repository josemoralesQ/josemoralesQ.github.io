//Definimos variables
var peso, estatura, imc

//Capturamos entradas
peso=parseFloat(prompt("Digite su peso en kg"))

estatura=parseFloat(prompt("Digite la estatura en metros"))
//proceso--calculamos
imc=peso/(estatura*estatura)

//Proceso
if (imc <18.5) {
    document.write(" <p style='color: red;'>Bajo peso </p> <img src='img/perdida-de-peso (2).png' alt='100px'>")
}else if(imc >=18.5 && imc <=24.9){
    document.write("<p style='color: green;'>Peso normal</p> <img src='img/perdida-de-peso (2).png' alt='100px'>")
}else if(imc >=25 && imc <=29.9){
    document.write("<p style='color: yellow;'>Sobre peso</p> <img src='img/perdida-de-peso (2).png' alt='100px'>")
}else if(imc >=30 && imc <=34.9){
    document.write("<p style='color: red;'>Obesidad 1</p> <img src='img/perdida-de-peso (2).png' alt='100px'>")
}else if(imc >=35 && imc <=39.9){
    document.write("<p style='color: red;'>Obesidad 2</p> <img src='img/perdida-de-peso (2).png' alt='100px'>")
}else if(imc >=40 && imc <=49.9){
    document.write("<p style='color: red;'>Obesidad 3</p> <img src='img/perdida-de-peso (2).png' alt='100px'>")
}else if(imc >=50){
    document.write("<p style='color: red;'>Obesidad 4</p> <img src='img/perdida-de-peso (2).png' alt='100px'>")
}else{
    document.write("Escriba un valor númerico valido <img src='img/cerrar.png' alt='100px'>")
}