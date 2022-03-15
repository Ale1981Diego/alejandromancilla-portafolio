<?php
$destino = "mancilla.alejandro@hotmail.com";
if (isset($_POST['enviar'])) {
    if (!empty($_POST['nombre']) && !empty($_POST['tel']) && !empty($_POST['mail'])){
        $nombre = $_POST['nombre'];
        $telefono = $_POST['tel'];
        $mail = $_POST['mail'];
        $asunto = $_POST['asunto'] . " y mi telefono es: ". $telefono;
        $mensaje = $_POST['area'];
        $header = "From: $mail"."\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();
        $email = mail($destino, $asunto, $mensaje, $header);
        if ($email) {
            echo '<script>alert("Envio exitoso!")</script>';
            echo "<script>setTimeOut(\'location.href = `index.php`\',1000)</script>";
        }
    }
}
?>
