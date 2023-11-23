const switcher = document.getElementById('date-picker');
const menu = document.getElementById('date-selector')

switcher.addEventListener('click', showMenu);

function showMenu() {
  switcher.classList.add('hidden');
  menu.classList.remove('hidden')
}
