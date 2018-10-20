<!DOCTYPE html>
<html>
<body>


 
<?php 
	echo "<h1>Welcom to Jackass</h1>";
	echo $_POST["firstName"], " ", $_POST["lastName"], "<br>"; 
	echo "<p>Your email address is: ", $_POST["email"], "</p>";
	echo "<p>Your phoneNumber is: ", $_POST["phoneNumber"], "</p>"
?>

</body>
</html>