#Fruteria
fruta=input("Escriba el nombre de la fruta: ")
precio=int(input("Precio unitario de la fruta: "))
cantidad=int(input("Número de frutas: "))
total=precio*cantidad
factura={"fruta":fruta,"precio":precio,
"cantidad":cantidad, "total":total}

print(factura["fruta"], "su precio es de $",factura["precio"],"y la cantidad es:",
factura["cantidad"], "y el total es igual a:",
factura["total"])