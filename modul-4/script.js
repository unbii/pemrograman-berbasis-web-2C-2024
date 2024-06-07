const dropdownMenus = document.querySelectorAll('.dropdown');
dropdownMenus.forEach(function(menu) {
  const parentLink = menu.parentElement;
  parentLink.addEventListener('mouseover', function() {
    menu.style.display = 'block';
  });
  parentLink.addEventListener('mouseout', function() {
    menu.style.display = 'none';
  });
});

const nextPageBtn = document.getElementById('nextPageBtn');
nextPageBtn.addEventListener('click', () => {
  window.location.href = 'form.html';
});

window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});