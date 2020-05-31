<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.com'; // SMTP сервера GMAIL
    $mail->Username   = 'lauexe@yandex.ru'; // Логин на почте
    $mail->Password   = 'zxc123zxc123'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('lauexe@yandex.ru', 'Александр'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('konida3465@provlst.com');

    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);  
    $mail->Subject = 'Заголовок письма';
    $mail->Body    = "<b>Имя:</b> $name <br>
    <b>Почта:</b> $email<br><br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message";


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
?>