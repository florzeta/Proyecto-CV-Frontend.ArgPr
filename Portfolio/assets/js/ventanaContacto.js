const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const myModal = document.getElementById('myModal');

openBtn.addEventListener('click', function() {
  myModal.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  myModal.style.display = "none";
});

window.addEventListener('click', function(e) {
  if (e.target === myModal) {
    myModal.style.display = "none";
  }
});