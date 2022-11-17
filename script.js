var nome_usuario = document.getElementById("nome_usuario");
var email_usuario = document.getElementById("email_usuario");
var numero_usuario = document.getElementById("numero_usuario");

document.getElementById("enviar_botao").addEventListener("click", validaFormulario);

function validaFormulario(){
  if(nome_usuario.value != "" && email_usuario.value != "" && numero_usuario.value != ""){
    alert("Prontinho! Você receberá as novidades por email.");
  }
  else{
    alert("Por favor, preencha os campos nome, email e telefone!");
  }
}
