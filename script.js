const toggleBtn = document.querySelector('.toggle-btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');


});