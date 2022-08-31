/* 
	# Description: Are you looking for splitting the full name into first name and last name? This Addons will help you to accomplish that.
	# Version: 1.0
	# Copy this code and paste inside the Footer Tracking Code.
	# Boom! Now you are ready to test...
	# Installation Guide: https://www.youtube.com/watch?v=wh-q42hPJpM
*/

$(function () {
	const $name = $('input[name="name"]');
	const $firstName = $name.clone();
	const $lastName = $name.clone();
	$firstName.attr("name","first_name");
	$firstName.attr("placeholder","First Name...");
  $firstName.attr("style", "width: 50%");
	$lastName.attr("name", "last_name");
	$lastName.attr("placeholder","Last Name...");
  $lastName.attr("style", "width: 50%");
	$name.after($firstName);
	$firstName.after($lastName);
	$name.remove();
});
