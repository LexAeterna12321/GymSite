const weekDays = document.querySelectorAll(".schedule__weekDays__day");
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const weekDaysHandler = () => {
  window.innerWidth <= 700
    ? weekDays.forEach((day, index) => (day.textContent = days[index][0]))
    : weekDays.forEach((day, index) => (day.textContent = days[index]));
};

window.addEventListener("resize", weekDaysHandler);

weekDaysHandler();
