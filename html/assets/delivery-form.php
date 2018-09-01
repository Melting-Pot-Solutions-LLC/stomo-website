<?php

header('Access-Control-Allow-Origin: http://customemb.net');
header('Access-Control-Allow-Credentials: true');
header('Content-type: application/xml');

if (isset ($_POST['email'])) {
    
    $typeOfGarment = implode(', ', $_POST['typeOfGarment']);
    $howManyDoYouNeed = implode(', ', $_POST['howManyDoYouNeed']);
    $whichDoYouPrefer = implode(', ', $_POST['whichDoYouPrefer']);
    $howManyColorsOne = $_POST['howManyColorsOne'];
    $howManyColorsSecond = $_POST['howManyColorsSecond'];
    $calendar_date = date('Y-m-d', strtotime(trim($_POST['calendar'])));
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    
    
  //$to = "steven@customemb.net"; 
  $to = "masjaha88@gmail.com"; 
  $subject = "New contact from website ".$_SERVER['HTTP_REFERER'];
    
    $message = "Type of garment: $typeOfGarment \n";
    $message .= "Quantity: $howManyDoYouNeed \n";
    $message .= "Which Do You Prefer: $whichDoYouPrefer \n";
    $message .= "Colors on 1st printing location: $howManyColorsOne \n";
    $message .= "Colors on 2st printing location: $howManyColorsSecond \n";
    $message .= "Terms: $calendar_date \n";
    $message .= "First Name: $firstName \n";
    $message .= "Last Name: $lastName \n";
    $message .= "Email: $email \n";
    $message .= "Phone: $phone \n";
    
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
  for($i=0;$i<count($_FILES['fileFF']['name']);$i++) {
     if(is_uploaded_file($_FILES['fileFF']['tmp_name'][$i])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'][$i])));
         $filename = $_FILES['fileFF']['name'][$i];
         $filetype = $_FILES['fileFF']['type'][$i];
         $filesize += $_FILES['fileFF']['size'][$i];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
     }
   }
   $message.="
--$boundary--";

  if ($filesize < 10000000) { 
    mail($to, $subject, $message, $headers);
    echo 'Thank You! Your message has been sent.';
  } else {
    echo 'The size of all files exceeds 10 MB.';
  }
}
?>
