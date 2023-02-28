const btnAbrirModal = document.getElementById("openBtn");
const modal = document.getElementById("myModal");
const cerrarModal = document.getElementById("closeBtn");
var submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");


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

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  
  if (!nombre || !email || !mensaje) {
    Swal.fire({
      title: "Error",
      text: "Por favor, completa todos los campos obligatorios.",
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
    });

  } else {
    // Si todos los campos están completos, permitir que el formulario se envíe
    form.submit();
    
    // Mostrar mensaje de éxito
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
      // Cerrar el modal después de enviar el formulario
    modal.style.display = "none";
      }
      });



