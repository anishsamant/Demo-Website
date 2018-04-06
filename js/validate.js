function validateForm() 
{
	var email = document.regForm.email;
	var psw = document.regForm.psw;
	var psw_confirm = document.regForm.psw_confirm;
	if (email.value == "") {
	    window.alert("Email must be filled out");
	    email.focus();
	    return false;
	}
	if (email.value.indexOf("@", 0) < 0)
	{
	    window.alert("Please enter a valid e-mail address.");
	    email.focus();
	    return false;
	}
	if (email.value.indexOf(".", 0) < 0)
	{
	    window.alert("Please enter a valid e-mail address.");
	    email.focus();
	    return false;
	}

	if (psw.value == "") 
	{
	    window.alert("Password must be filled out.");
	    psw.focus();
	    return false;
	}
	if (psw_confirm.value == "") {
	    window.alert("Confirm your password.");
	    psw_confirm.focus();
	    return false;
	}
}
