# función con parametros(Calculadora)
def calculadora(a,b):
    
  division=a/b  
  multiplicacion=a*b
  resta=a-b
  suma=a+b
  print("La suma es: ",suma)
  print("La resta es: ",resta)
  print("La multiplicación es: ",multiplicacion)
  print("La divición es: ",division)
#App para calcular 2 números
n=int(input("Digite el primer número: "))
d=int(input("Digite el segundo número: "))
calculadora(n,d)  # llamada a la función, la calculadora se muestra en la consola