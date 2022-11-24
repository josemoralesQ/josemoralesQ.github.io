#Diseña una app que calcule
#el area del rectangulo
#y luego sea llamada por  un algoritmo

# función con parámetros
def area(b,h):
  area=b*h
  print("El area del rectangulo es: ",area)

b=int(input("Digite la base del rectangulo: "))
h=int(input("Digite la altura del mismo: "))
area(b,h)  # llamada a la función, se muestra en la consola