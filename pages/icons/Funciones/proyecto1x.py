#FUNCIONES CON PARAMETROS
#Escribir una función a la que se
#le pase una cadena <nombre> y
#muestre por pantalla el saludo
#¡Hola <nombre>!

def saludo(name):
    print("¡hola ",name,"!")

#app que ingrese un nombre y lo muestre como saludo
nombre=input("¿Cual es su nombre?: ")
saludo(nombre) #llamando a la funcion