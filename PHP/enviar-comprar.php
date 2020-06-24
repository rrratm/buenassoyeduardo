<?php

$compNombre = $_REQUEST['compNombre'];
$compEmail = $_REQUEST['compEmail'];
$compPais = $_REQUEST['compPais'];
$compCheck1 = $_REQUEST['compCheck1'];
$compCheck2 = $_REQUEST['compCheck2'];



 require 'PHPMailerAutoload.php';

 $mail = new PHPMailer;
 //$mail->isSMTP();
 $mail->Host='smtp.gmail.com';
 $mail->Port=587;
 $mail->SMTPAuth=true;
 $mail->SMTPSecure='tls';

 $mail->Username='info.e.forbes@gmail.com';
 $mail->Password='Trestres3';

 $mail->setFrom('info.e.forbes@gmail.com');
 $mail->addAddress('info.e.forbes@gmail.com');
 $mail->addReplyTo('info.e.forbes@gmail.com');

 $mail->isHTML(true);
 $mail->Subject='Nuevo Submit Formulario Quiero Comprar';
 $mail->Body='<p>Hola.</p> <p><?php echo $compNombre; <br> echo $compEmail; <br> echo $compPais; <br> echo $compCheck1; <br> echo $compCheck2; echo($compNombre . "<br>" . $compEmail . "<br>" . $compPais . "<br>" . $compCheck1 . "<br>" . $compCheck2) ?> Chau. </p>';

 if(!$mail->send()){
    echo "No funcionó, porfa probá otra vez.";
 }else{
    echo "Enviado, gracias!";
 };

?>