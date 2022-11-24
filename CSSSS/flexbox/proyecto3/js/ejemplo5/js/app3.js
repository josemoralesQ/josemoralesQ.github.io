// app para ver números pares del 5 al 25 

var a,b;
var i;

a=parseInt(prompt("Digite un número inicial"))
b=parseInt(prompt("Digite el número final"))

for (i=a; i<=b; i++) {
    if (i%2==0) {
        document.write(i+"&nbsp")
    }
}

