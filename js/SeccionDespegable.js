var header = document.getElementById("seccion-desplegable");
var body = header.nextElementSibling;

header.addEventListener("click", function() {
  body.classList.toggle("active");
});