//App para obsequiar descuento del 5%
var pag,monto,descuento

//Capturar datos de entrada
pag=parseFloat(prompt("Digite el valor total del producto"));

//proceso para evaluar si se le otorga el descuento

monto=50000
descuento=pag*0.05
if (pag>=monto) {
    document.write("Al cliente se le otorga un descuento del 5% que es igual a " +descuento+ "");
} else {
    document.write("Lo sentimos, el cliente no tiene ningún descuento ");
}