<!DOCTYPE html>
<html>
<body>


 
<?php 
	echo "<h1>Welcom to Jackass</h1>";
	echo $_POST["firstName"], " ", $_POST["lastName"], "<br>"; 
	echo "<p>Your email address is: ", $_POST["email"], "</p>";
	echo "<p>Your phoneNumber is: ", $_POST["phoneNumber"], "</p>";
	echo "<p>Your age is: ", $_POST["age"], "</p>";


	$hobbies = $_POST['hobbies'];

	if (isset($_POST['hobbies'])) {
    	echo "You chose the following hobbies: <br>";

    	foreach ($hobbies as $hobbyInfo){
        	echo $hobbyInfo."<br />";
    	}
	} else {
    	echo "You did not choose a hobby.";
	}
?>

</body>
</html>