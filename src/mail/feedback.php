<?php
$to      = 'brovkin.on@gmail.com';
$subject = 'Письмо с сайта';
$message = $_POST['name'] . "\r\n" . $_POST['phone'] . "\r\n" . $_POST['textarea'];
$headers = array(
    'From' => 'info@brozabro.ru',
    'Reply-To' => 'info@brozabro.ru',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers);
