<!DOCTYPE html>
<html lang="en"> 

<head>
	<script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
	<script>
		function generatePDF() {
			var pdf = new jsPDF();
	 			pdf.addHTML(document.body, function () {
	    			pdf.save('Test.pdf');
 				});
	 	}
	</script>

    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <title>Title</title>
    <style>

    div.Resume {
    	width: 100vw;
    	height: 137.5vw;
    	display: flex;
    	flex-direction: column;
    	padding: 20px;
    }

    div.Page {
    	display: flex;
    	flex-direction: row;
    	height: auto;
    	margin-top: 15px;
    }

    div.Left {
    	width: 70vw;
    	height: auto;
    	border-right: 3px solid #000000;
    	padding-right: 15px;
    	margin-right: 15px;
    }

	</style>
</head>

<body>

<div id="Resume" class="Resume">
    <div id="Name" style="height: 10vw; border-bottom: 3px solid #000000">
    	<h1>Name</h1>
    	<div>
    		Let's play a game <br />
    		I spy with my little eye...
    	</div>
    </div>
    <div id="Page" class="Page">
    	<div class="Left">
		    <div id="Hobbies" style="border-bottom: 3px solid #000000">
		    	<h1>Hobbies</h1>
		    	<div>
		    		<?php
		    			$hobbies = $_POST['hobbies'];

						if (isset($_POST['hobbies'])) {
    						echo "You chose the following hobbies: <br>";

    						foreach ($hobbies as $hobbyInfo){
    							offset();
        						echo "$hobbyInfo", "<br>";
    							}
						} else {
    						echo "You did not choose a hobby.";
						}
					?>
		    	</div>
		    </div>
		    <div id="Projects" style="border-bottom: 3px solid #000000">
		    	<h1>Projects</h1>
		    	<div>
		    		FowlPlay
		    	</div>
		    </div>
		    <div id="Relevant Work" style="border-bottom: 3px solid #000000">
		    	<h1>Relevant Work</h1>
		    	<div>
		    		Butthole Chocolate Manufacteurer
		    	</div>
		    </div>
		</div>
	    <div class="Right">
	    	<div id="Languages">
		    	<h1>Languages</h1>
		    	<div>
		    		English
		    	</div>
		    </div>
		    <div id="Contact Info">
		    	<h1>Contact Info</h1>
		    	<div>
		    		Tinder me up:
		    		<?php 
		    			echo "<br>";
		    			offset();
		    			echo $_POST["email"];
		    			echo "<br>";
		    			offset();
		    			echo $_POST["phoneNumber"];
		    		?>
		    	</div>
		    </div>
	    </div>
	</div>
</div>

<div class="container">
    <button type="button" class="btn btn-dark" onClick="generatePDF()">Download Resume</button>
</div>

</body>
</html>


 
<!---Random Offset Generator--->
<?php
	function offset(){
		for ($x = 0; $x <= rand()%20; $x++){
			echo "&nbsp;"; //&nbsp; works for multiple whitespaces

		}
	}
?>