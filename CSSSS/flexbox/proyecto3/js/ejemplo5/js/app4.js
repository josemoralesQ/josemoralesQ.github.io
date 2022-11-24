//Números pares

var a,b
var i

b=parseInt(prompt("Digite el número final"))

a=0
i=a
while (i<=b) {
    if (i%2==0) {
        document.write(i+"&nbsp")
        i=i+2   
    }
}