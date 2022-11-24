//App Para Definir Si Un Estudiante Aprueba o No
var nota

//Capturar Datos De Entradas
nota=parseFloat(prompt("Digite la Calificacion final"));

//Proceso para definir Si Aprueba o no
if (nota>3 & nota<=5) {
    document.write("El estudiante ha APROBADO satisfactoriamente con una calificacion de " +nota+ "");
} else {
    document.write("El estudiante ha REPROBADO con una calificación de " +nota+ "")
}