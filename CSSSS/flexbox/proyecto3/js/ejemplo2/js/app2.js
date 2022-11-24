//App para evaluar un número entre 10 y 100
var n;

//Capturar la entrada
n=parseInt(prompt("Digite el número entero"));


//evaluar proceso númerico
if (n>10 & n<100) {
    document.write("El número " +n+ " esta entre 10 y 100            <img src='img/calculador (3).png' heigt='100px'>");
} else {
    document.write("El número " +n+ " no esta entre 10 y 100         <img src='img/calculador (3).png' heigt='100px'>");
}