const btnAbrirModal = document.getElementById("openBtn");
const modal = document.getElementById("myModal");
const cerrarModal = document.getElementById("closeBtn");
var submitBtn = document.getElementById("submit-btn");


// Cuando se hace clic en el botón, abrir el modal
btnAbrirModal.onclick = function() {
  modal.style.display = "block";
}

// Cuando se hace clic en el botón cerrar, cerrar el modal
cerrarModal.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

submitBtn.addEventListener("click", function() {
  Swal.fire({
    title: "¡Formulario enviado!",
    text: "Gracias por contactarme, me pondré en contacto contigo lo antes posible.",
    icon: "success",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Aceptar",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
  });
});
