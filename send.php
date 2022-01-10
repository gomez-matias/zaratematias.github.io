<?php
  header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
  $destino = "adrelx7@gmail.com";
  $nombre = $_POST["name"];
  $email = $_POST["email"];
  $telefono = $_POST["phone"];
  $mensaje = $_POST["message"];
  $contenido = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;

  mail($destino, "Contacto", $contenido);
  header("Location:Mensaje_Enviado.html");
  
?>