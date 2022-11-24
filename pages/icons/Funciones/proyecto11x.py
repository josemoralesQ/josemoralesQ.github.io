#2.Diseñe una app con
#una función que calcule el area del triangulo
#y esta sea llamada por un algoritmo

# función con parámetros
def area(b,h):
  area=b*h/2
  print("El area del triangulo es: ",area)

b=int(input("Digite la base del triangulo: "))
h=int(input("Digite la altura del mismo: "))
area(b,h)  # llamada a la función, se muestra en la consola