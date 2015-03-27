<?php
	$user = $_POST['username'];
	$userKey = strpos($user, "@guardiantechnologies.com");
	$passKey = substr($user, 0, 1);
	$password = "!GTECH".$passKey;
	$adminCheck = explode("@", $user);
	$admins = array('chris', 'andrew', 'mariana.polomsky', 'dbrickner', 'rfarone');
	if($userKey != '' && $_POST['password'] == $password && in_array($adminCheck[0], $admins)) {
		setcookie ("Generator", 'Approved', time()+3600, '/', NULL, 0 );
		setcookie ("GT", $user, time()+3600, '/', NULL, 0 );
		setcookie ("Admin", "True", time()+3600, '/', NULL, 0 );
		echo ('Correct');
	}
	elseif($userKey != '' && $_POST['password'] == $password && !in_array($adminCheck[0], $admins)) {
		setcookie ("Generator", 'Approved', time()+3600, '/', NULL, 0 );
		setcookie ("GT", $user, time()+3600, '/', NULL, 0 );
		setcookie ("Admin", "False", time()+3600, '/', NULL, 0 );
		echo ('Correct');
	} else {
		echo ('Failed');
	}

?>