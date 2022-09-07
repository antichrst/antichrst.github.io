
function validate(){
  var username = document.getElementById("email").value;
  var password = document.getElementById("text").value;
  if ( username == "abcd1234" && password == "abcd1234"){
  location.href = "/devilsadvocate/home";
  }
  else {
  alert("Report sent");
  location.href = "/hanoihound/home";
  }
}