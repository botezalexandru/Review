<?php 

header("Content-Type: application/json; charset=UTF-8");
include 'connect.php';

$result = mysql_query("SELECT user_name, user_email, user_text_review, star_rating FROM reviews");


$rows = array();

while ($row = mysql_fetch_array($result)) {
	$review = array(
		"userName" => $row['user_name'],
		"userEmail" => md5(strtolower(trim($row['user_email']))),
		"userReview" => $row['user_text_review'],
		"rating" => $row['star_rating'],
		);
	array_push($rows, $review);
}

echo json_encode($rows);
