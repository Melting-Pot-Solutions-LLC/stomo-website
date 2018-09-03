<?php

//header('Access-Control-Allow-Origin: http://customemb.net');
//header('Access-Control-Allow-Credentials: true');
//header('Content-type: application/xml');

if (isset ($_POST['txtEmail'])) {
    
//    $typeOfGarment = implode(', ', $_POST['typeOfGarment']);
    $whichCategoryFits = $_POST["whichCategoryFits"];
    $divNeed = $_POST['divNeed'];
    $storeContainer = $_POST['storeContainer'];
    $txtDeliveryZip = $_POST['txtDeliveryZip'];
    $txtFirstDeliveryZip = $_POST['txtFirstDeliveryZip'];
    $txtFinalDeliveryZip = $_POST['txtFinalDeliveryZip'];
    $txtDeliveryDate = date('Y-m-d', strtotime(trim($_POST['txtDeliveryDate'])));
    $timeDuration = $_POST['timeDuration'];
    $email = $_POST['txtEmail'];
    $txtPromoCode = $_POST['txtPromoCode'];
    
  $to = "masjaha88@gmail.com"; 
  $subject = "New contact from website ".$_SERVER['HTTP_REFERER'];
    
    $message = "Which category fits you best? $whichCategoryFits \n";
    $message .= "I need to: $divNeed \n";
    $message .= "Store container at: $storeContainer \n";
    $message .= "ZIP Code for Delivery: $txtDeliveryZip \n";
    $message .= "First Delivery ZIP: $txtFirstDeliveryZip \n";
    $message .= "Final Delivery ZIP: $txtFinalDeliveryZip \n";
    $message .= "Deliver my empty container on: $txtDeliveryDate \n";
    $message .= "I'll need my container for: $timeDuration \n";
    $message .= "Email: $email \n";
    $message .= "Promo Code: $txtPromoCode \n";
    
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
