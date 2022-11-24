//Aplicación Para Evaluar La Fierbre De Una Persona
var  temp;

//Capturar los datos de entreda
temp=parseFloat(prompt("Ingrese su temperatura en grados centigrados."));


//Proceso para evaluar la fiebre
if (temp >=38) {
    document.write("La Temperatura " +temp+ "°C Indica Fiebre");
} else {
    document.write("La Temperatura " +temp+ "°C Indica paciente sin Fiebre");
}