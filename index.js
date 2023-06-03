// VALIDACION

//Accedo al id de mi boton en el que realizo los calculos y pongo un escuchador para cuando haga click
document.getElementById("resumenBtn").addEventListener("click", function () {
  // Guardos en estas variables los el valor las palabras que las accedo a traves del id de cada input
  var nombre = document.getElementById("name-ticket").value.trim();
  var apellido = document.getElementById("last-name-ticket").value.trim();
  var email = document.getElementById("email-ticket").value.trim();
  var cantidad = document.getElementById("select-cantidad").value.trim();
  //Esta linea es par avalidar el email la saque de stackvoerflow
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //Voy preguntando por cada input si cumple las condiciones sino lanza un alert, que se ejecuta cuando presionamos el boton resumen para generar el calculo
  if (nombre === "" || nombre.length < 3 || nombre.length > 15) {
    alert("Por favor, ingresa nombre Valido");
    return;
  }

  if (apellido === "" || apellido.length < 3 || apellido.length > 25) {
    alert("Por favor, ingresa tu apellido Valido");
    return;
  }

  if (email === "" || !emailRegex.test(email)) {
    alert("Por favor, ingresa correo Valido");
    return;
  }

  if (cantidad === "") {
    alert("Por favor, ingresa la cantidad.");
    return;
  }
  document.getElementById("send-purchase").submit();
});
