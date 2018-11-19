// Nav
const navBars = document.querySelectorAll(".nav--bottom__nav-icon span");
let navActive = false;
document
  .querySelector(".nav--bottom__nav-icon")
  .addEventListener("click", () => {
    navActive = !navActive;
    if (navActive) {
      navBars[0].classList.add("nav--bottom__nav-icon--top--active");
      navBars[1].classList.add("nav--bottom__nav-icon--middle--active");
      navBars[2].classList.add("nav--bottom__nav-icon--bottom--active");
    } else {
      navBars[0].classList.remove("nav--bottom__nav-icon--top--active");
      navBars[1].classList.remove("nav--bottom__nav-icon--middle--active");
      navBars[2].classList.remove("nav--bottom__nav-icon--bottom--active");
    }
  });
//
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
