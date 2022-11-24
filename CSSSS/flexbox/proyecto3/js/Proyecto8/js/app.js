

function validacampos(){
    var formulario;
    formulario=document.formUser;

//valida el campo de usuario
if (formulario.user.value=="") {
    //valida si el campo esta vacio
    document.getElementById("validaUser").innerHTML="Por favor escribir el usuario";
//se posiciona en el campo user
    formulario.user.focus();
    return false;

}else{
document.getElementById("validaUser").innerHTML="";
}

//valida el campo email
if (formulario.email.value=="") {
    //valida si el campo esta acio
    document.getElementById("validaEmail").innerHTML="Por favor escribir su correo electronico";
    //se posiciona en el campo user
    formulario.email.focus();
    return false;
   
}else{
    document.getElementById("validaEmail").innerHTML="";
}


if (formulario.passwordC.value=="") {
    document.getElementById("valida_passwordC").innerHTML="Escriba una contraseña valida";
    //se posiciona en el campo user
    formulario.passwordC.focus();
    return false;
}else{
    document.getElementById("valida_passwordC").innerHTML="";
}
formulario.submit();
}
