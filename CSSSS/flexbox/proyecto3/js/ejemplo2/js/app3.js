//App para Definir Ganancias o Perdidas
var gan,gasto,resultado

//Capturar datos de entrada
gan=parseFloat(prompt("Digite el valor númerico de las ganancias"));
gasto=parseFloat(prompt("Digite el valor del gasto"));

//proceso para evaluar gastos
resultado=gan-gasto;

if (gan>gasto) {
    document.write("Los ingresos generan ganancias de " +resultado+ "");
} else {
    document.write("Los ingresos no estan generando ganancias ");
}