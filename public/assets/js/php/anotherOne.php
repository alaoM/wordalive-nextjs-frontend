<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Methods: POST");

error_reporting(E_ALL);
error_reporting(-1);
ini_set('error_reporting', E_ALL);


include_once('../includes/libs.php');


$data = json_decode(file_get_contents('php://inputs'));


$messageTo = "miraclealao24@gmail.com";


$fname = $data->fname;
$fname = $database->sanitize($fname);

$lname = $data->lname;
$lname = $database->sanitize($lname);
// sender
$sender = $fname . $lname;



$mail_from = $data->email;
echo $mail_from;
$mail_from = $database->sanitize($mail_from);




$phone_number = $data->phoneNumber;
$phone_number = $database->sanitize($phone_number);


$mail_from = $data->email;
echo $mail_from;
$mail_from = $database->sanitize($mail_from);


$subject = $data->subject;
$subject = $database->sanitize($subject);


$message = $data->message;
$message = $database->sanitize($message);


echo $message;

echo array(
    "mail from"=>$mail_from, 
    "phone_number"=>$phone_number, 
    "last Name"=>$lname,
    "FIrst Name" => $fname,
    "sender"=>$sender,
    "message"=>$message
)


// if ($item->update()):

//     http_response_code(200);
//     echo json_encode(
//         array(
//         "type" => "Success",
//         "title" => "Success",
//         "message" => "This message sent successfully"
//     )
//     );

// else:
//     http_response_code(404);
//     echo json_encode(
//         array(
//         "type" => "error",
//         "title" => "Failed",
//         "message" => "An Error Occured. Please try again"
//         )
//     );
// endif;




?>