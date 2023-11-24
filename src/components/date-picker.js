const switcher = document.getElementById('date-picker');
const menu = document.getElementById('date-selector')
const dateToday = document.getElementById('date-today');

switcher.addEventListener('click', showMenu);

function showMenu() {
  switcher.classList.add('hidden');
  menu.classList.remove('hidden')
}

function selectDate() { // need Factory Function here
  let calendar = document.getElementById('date');
  let date = new Date();
  let currentDate = date.toISOString().substring(0,10);

  calendar.value = currentDate;

}

dateToday.addEventListener('click', selectDate)
