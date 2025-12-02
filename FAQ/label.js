function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Insira um nome válido";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Insira um assunto válido";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Insira um número válido";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Insira um email válido";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 100){
    text = "Por favor, insira mais de 100 caracteres";
    error_message.innerHTML = text;
    return false;
  }
  alert("Formulário enviado com sucesso!");
  return true;
}