function submitForm() {
	let firstName = document.forms["regForm"]["firstName"];
	let lastName = document.forms["regForm"]["lastName"];
	let email = document.forms["regForm"]["email"];
	let password = document.forms["regForm"]["password"];

	if(firstName.value=="") {
		alert("First Name cannot be empty");
		firstName.focus();
		return false;
	}

	if(lastName.value=="") {
		alert("Last Name cannot be empty");
		lastName.focus();
		return false;
	}

	if(email.value=="") {
		alert("Email Address cannot be empty");
		email.focus();
		return false;
	}

	if(password.value=="") {
		alert("Password cannot be empty");
		password.focus();
		return false;
	}

	if (email.value.indexOf("@host.tld")<0) {
		alert("Looks like this is not an email");
	}

}