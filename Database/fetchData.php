<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$conn = new mysqli("localhost", "root", "", "review");

$result = $conn->query("SELECT user_name, user_email, user_text_review, star_rating FROM reviews");

$outp = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"userName":"'  . $rs["user_name"] . '",';
    $outp .= '"userEmail":"'  . md5(strtolower(trim($rs["user_email"]))) . '",';
    $outp .= '"userReview":"'   . $rs["user_text_review"]        . '",';
    $outp .= '"rating":"'. $rs["star_rating"]     . '"}'; 
}

$outp ='{"records":['.$outp.']}';

$conn->close();

echo($outp);

?>