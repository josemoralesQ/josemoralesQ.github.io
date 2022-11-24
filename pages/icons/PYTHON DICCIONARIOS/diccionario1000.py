nombre=input("Digite su nombre: ")
edad=input("Digite su edad: ")
direccion=input("Digite su dirección: ")
telefono=input("Digite su telefono: ")


persona={"nombre":nombre,"edad":edad,
"direccion":direccion, "telefono":telefono}

print(persona["nombre"], "tiene",persona["edad"], "años","y vive en:",
persona["direccion"], "y su número de telefono es:",
persona["telefono"])