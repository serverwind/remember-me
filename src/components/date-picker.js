import calendar from "./new-task";

const switcher = document.getElementById("date-picker");
const menu = document.getElementById("date-selector");
const dateToday = document.getElementById("date-today");
const dateTomorrow = document.getElementById("date-tomorrow");

switcher.addEventListener("click", showMenu);

function showMenu() {
  switcher.classList.add("hidden");
  menu.classList.remove("hidden");
}

function selectDate(day) {
  let date = new Date();
  let currentDate = date.toISOString().substring(0, 10);

  if (day === "tomorrow") {
    date = new Date(+new Date() + 86400000);
  }

  console.log(day)

  currentDate = date.toISOString().substring(0, 10);
  calendar.value = currentDate;
}

dateToday.addEventListener("click", () => {
  selectDate("today");
});

dateTomorrow.addEventListener("click", () => {
  selectDate("tomorrow");
});
