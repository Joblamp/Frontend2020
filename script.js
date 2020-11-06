// JavaScript Document
var button = document.querySelector('.menubutton');
button.addEventListener('click', myFunction);

function myFunction() {
  var x = document.querySelector("#myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}