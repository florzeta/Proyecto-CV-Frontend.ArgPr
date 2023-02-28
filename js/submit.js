const $form = document.querySelector('#form')
const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

$form.addEventListener('submit', botonSubmit)

function botonSubmit(event){
    event.preventDefault()
    
}