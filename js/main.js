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

//  clients sections dots handler

const dots = document.querySelectorAll(".clients__controls__control");
const clients = document.querySelectorAll(".clients__client");
function viewHandler() {
  dots.forEach(dot =>
    dot.classList.remove("clients__controls__control--active")
  );
  clients.forEach(client => {
    client.classList.remove("clients__client--active");
    client.style.left = `100%`;
  });
  clients[this.dataset.client].classList.add("clients__client--active");
  clients[this.dataset.client].style.left = 0;
  this.classList.add("clients__controls__control--active");
}

dots.forEach(dot => dot.addEventListener("click", viewHandler));
