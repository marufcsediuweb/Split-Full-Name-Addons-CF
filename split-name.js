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
