//función que suma 2 números
function sumar(){
    var x,y, suma
    
    x=parseInt(document.getElementById("n1").value)
    y=parseInt(document.getElementById("n2").value)
    
    suma=x+y
    
    document.getElementById("resultado_suma").innerHTML="La suma es "+suma
    }

    //función de la resta
    function restar(){
        var x,y, resta
        
        x=parseInt(document.getElementById("n1").value)
        y=parseInt(document.getElementById("n2").value)
        
        resta=x-y
        
        document.getElementById("resultado_resta").innerHTML="La resta es "+resta
    }
    //Función que multiplica 2 números
    function multiplicar(){
        var x,y,multiplicacion
        
        x=parseInt(document.getElementById("n1").value)
        y=parseInt(document.getElementById("n2").value)
        
        multiplicacion=x*y
        
        document.getElementById("resultado_multiplicacion").innerHTML="La multiplicacion es "+multiplicacion
    }
    //funció que divide 2 números
    function dividir(){
        var x,y, division
        
        x=parseFloat(document.getElementById("n1").value)
        y=parseFloat(document.getElementById("n2").value)
        
        division=x/y
        
        document.getElementById("resultado_division").innerHTML="La division es "+division
    }