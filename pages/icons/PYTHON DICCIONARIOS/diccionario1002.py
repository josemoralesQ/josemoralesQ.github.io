cliente={}
op=""

while op !=4:
 if op ==1:
    identificacion=input("Digite su identificación: ")
    nombre=input("Escriba su Nombre: ")
    direccion=input("Digite su Dirección: ")
    telefono=input("Escriba su numero de Telefono: ")
    correo=input("Digite su Correo: ")
    empresa=input("Escriba su Empresa: ")
    cliente={"identificacion":identificacion,"nombre":nombre,"direccion":direccion,"telefono":telefono,"correo":correo,"empresa":empresa,} 
    
    
 if op ==2:
     print("-----------------------")
     print("Informacion del Cliente")
     print("------------------------")
     print("Indentificación: ",cliente["identificacion"])
     print("Nombre Completo: ",cliente["nombre"])
     print("Dirección: ",cliente["direccion"])
     print("Telefono: ",cliente["telefono"])
     print("Correo: ",cliente["correo"])
     print("Empresa: ",cliente["empresa"])
    
    
 if op ==3:
    del cliente["identificacion"]
    print("----------------------")
    print("Cliente Eliminado con Exito!")
    
    
 if op ==4:
     exit()
     
 print("---Menu----")
 print("1-Añadir Clientes")
 print("2-Mostrar Clientes")
 print("3-Eliminar Clientes")
 print("4.Finalizar")
 op=int(input("Digite la opcion se leccionada: "))