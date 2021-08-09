<?php
//Для начала проверим есть ли данные в полях name и email, что бы не слать совсем пустые формы :)
//Если всё в порядке, то работаем дальше
if (isset($_POST["name"]) && isset($_POST["tel"]) ) {

//Принимаем данные POST-запроса и записываем значения в переменные

$name = $_POST['name'];
$phone = $_POST['tel'];


//Теперь давайте настроим куда отправляем и откуда

$my_email = 'alex87bogdanoff@gmail.com'; // Куда отправляем
$headers = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: От кого письмо <https://alex87bogdanoff.github.io/diplom-baz-verstka>>\r\n";
$headers .= "Reply-To: reply-to@example.com\r\n";
$sender_email = ''; // От кого отправляем
$title = "Заголовок сообщения";

//Сообщение, которое приходит на почту со всеми нужными нам данными:

$mes = "
 Имя: $name\n
 Телефон: $tel\n
";

//Всё, теперь можно отправлять письмо на почту

$send = mail ($my_email,$title,$headers);

}

?>
