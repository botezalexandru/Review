<?php 

header("Content-Type: application/json; charset=UTF-8");
include 'connect.php';

$limit = $_GET["limit"];
$beginWithRow = $_GET["beginWithRow"];

$countQuerry   = mysql_query("SELECT COUNT(*) as total_count FROM reviews");
$numOfReviews  = mysql_fetch_object($countQuerry);
$numOfReviews2 = $numOfReviews->total_count;

$result 	   = mysql_query("SELECT id, user_name, user_email, user_text_review, star_rating FROM reviews LIMIT $beginWithRow ,$limit");

$rows = array();

while ($row = mysql_fetch_array($result)) {
	$review = array(
		"userId" => $row['id'],
		"userName" => $row['user_name'],
		"userEmail" => md5(strtolower(trim($row['user_email']))),
		"userReview" => $row['user_text_review'],
		"rating" => $row['star_rating'],
		);
	array_push($rows, $review);
}


$object = new stdClass;
$object->review = $rows;
$object->rowCount  = $numOfReviews2;

echo json_encode($object);
