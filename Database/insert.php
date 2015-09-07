<?php

include 'connect.php';
$data = json_decode(file_get_contents("php://input"));

$inputUserName = mysql_real_escape_string($data -> inputUserName);
$inputUserEmail = mysql_real_escape_string($data -> inputUserEmail);
$inputUserReview = mysql_real_escape_string($data -> inputUserReview);
$nrStars = mysql_real_escape_string($data -> nrStars);


mysql_query("INSERT INTO reviews (`user_name`, `user_email`, `user_text_review`, `star_rating`)VALUES('".$inputUserName."', 
	'".$inputUserEmail."', '".$inputUserReview."', '".$nrStars."') ");

?>