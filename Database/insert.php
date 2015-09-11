<?php

include 'connect.php';
$data = json_decode(file_get_contents("php://input"));

$inputUserName = mysql_real_escape_string($data -> inputUserName);
$inputUserEmail = mysql_real_escape_string($data -> inputUserEmail);
$inputUserReview = mysql_real_escape_string($data -> inputUserReview);
$nrStars = mysql_real_escape_string($data -> nrStars);

$query = "SELECT * FROM reviews WHERE user_email = '$inputUserEmail'";
$returnValue=mysql_query($query);

$error = array();

if (mysql_num_rows($returnValue) > 0)
  {
  
  	$error['message'] = 'Email already in database';

  } else {

  	$error['message'] = 'Email is valid';
  	mysql_query("INSERT INTO reviews (`user_name`, `user_email`, `user_text_review`, `star_rating`)VALUES('".$inputUserName."', 
	'".$inputUserEmail."', '".$inputUserReview."', '".$nrStars."') ");

  }

  echo json_encode($error);
