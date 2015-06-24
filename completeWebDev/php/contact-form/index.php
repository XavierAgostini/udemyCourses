<?php
	// print_r($_POST);
	if($_POST["submit"]){
		

		if(!$_POST['name']) {
			$error = "<br/>Please enter your name";
		}
		if(!$_POST['email']) {
			$error .= "<br/>Please enter your email address";
		}
		if(!$_POST['message']) {
			$error .="<br/>Please leave a message";
		}
		if($_POST['email']!="" AND !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$error.="<br/>Please enter a valid email address";
		}
		if($error) {
			$result='<div class="alert alert-danger"><strong>There were error(s) in your form:</strong> '.$error.'</div>';
		}
		else {
			$emailTo="kikuge@flurred.com";
			$subject="User Message from: ".$_POST["name"];
			$body=$_POST["message"];
			$headers="From: ".$_POST["email"];
			if(mail($emailTo, $subject, $body, $headers)) {
				$result='<div class="alert alert-success"><strong>Message sent succesfully</strong></div>';
			}
			else {
				$result='<div class="alert alert-danger"><strong>Message not sent</strong></div>';
			}
			
		}
		
		if(!$result) {
			
		}
		
	}
			
?>
<!DOCTYPE html>
<html>
<head>
	<title = "test web page"></title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">


	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<style type="text/css">
		.emailForm {
			border: 1px solid grey;
			border-radius: 10px;
			margin-top: 20px;
		}
		form {
			padding-bottom: 20px;
		}
	</style>
</head>
<body>
	
	<div class="container">


		
		<div class="row">
			<div class="col-md-6 col-md-offset-3 emailForm">
				<h1>Contact Form</h1>
				<?php echo $result; ?>
				<p class="lead">Please get in touch - I'll get back to you as soon as I can.</p>
				<form method="post">
					<div class="form-group">
						<label for="name">Name</lable>
						<input name="name" class="form-control" type="text" value="<?php echo $_POST['name']; ?>"/>
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input name="email" class="form-control" type="text" value="<?php echo $_POST['email']; ?>"/>
					</div>			
					<div class="form-group">
						<label for name="message">Message</label>
						<textarea name="message" class="form-control" placeholder="Please leave your message below"><?php echo $_POST['message']; ?> </textarea>
					</div>				
					<input type="submit" class="btn btn-success btn-lg" name="submit" value="Submit"/>

				</form>
			</div>
		</div>

	</div>
	
</body>
</html>