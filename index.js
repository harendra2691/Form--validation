function validation() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm-password").value;
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("phone-error").innerHTML = "";
  document.getElementById("password-error").innerHTML = "";
  document.getElementById("confirm-password-error").innerHTML = "";

  if (name == "") {
    document.getElementById("name-error").innerHTML = "Username is required";
    return false;
  }
  if (name.length <= 2 || name.length > 20) {
    document.getElementById("name-error").innerHTML =
      "Username range is 3 to 20";
    return false;
  }
  if (!isNaN(name)) {
    document.getElementById("name-error").innerHTML = "Use characters";
    return false;
  }

  if (email == "") {
    document.getElementById("email-error").innerHTML = "Email is required";
    return false;
  }
  if (!pattern.test(email)) {
    document.getElementById("email-error").innerHTML = "Incorrect Email";
    return false;
  }

  if (phone == "") {
    document.getElementById("phone-error").innerHTML =
      "Phone Number is required";
    return false;
  }
  if (isNaN(phone)) {
    document.getElementById("phone-error").innerHTML = "Use numbers only";
    return false;
  }
  if (phone.length != 10) {
    document.getElementById("phone-error").innerHTML = "Ten digits required";
    return false;
  }

  if (password == "") {
    document.getElementById("password-error").innerHTML =
      "Password is required";
    return false;
  }
  if (password.length <= 5 || name.length > 20) {
    document.getElementById("password-error").innerHTML =
      "Password must be in between 5-20";
    return false;
  }

  if (confirm_password == "") {
    document.getElementById("confirm-password-error").innerHTML =
      "Please confirm the password";
    return false;
  }
  if (password != confirm_password) {
    document.getElementById("confirm-password-error").innerHTML =
      "password not matching";
    return false;
  }
}
