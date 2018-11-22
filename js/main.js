// Nav
const navBars = document.querySelectorAll(".nav--bottom__nav-icon span");
let navActive = false;
const navList = document.querySelector(".nav--bottom__items");
document
  .querySelector(".nav--bottom__nav-icon")
  .addEventListener("click", () => {
    navActive = !navActive;
    if (navActive) {
      navBars[0].classList.add("nav--bottom__nav-icon--top--active");
      navBars[1].classList.add("nav--bottom__nav-icon--middle--active");
      navBars[2].classList.add("nav--bottom__nav-icon--bottom--active");
      navList.classList.add("nav--bottom__items--active");
    } else {
      navBars[0].classList.remove("nav--bottom__nav-icon--top--active");
      navBars[1].classList.remove("nav--bottom__nav-icon--middle--active");
      navBars[2].classList.remove("nav--bottom__nav-icon--bottom--active");
      navList.classList.remove("nav--bottom__items--active");
    }
  });
// schedule functionality
const weekDays = document.querySelectorAll(".schedule__weekDays__day");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const weekDaysHandler = () => {
  window.innerWidth <= 700
    ? weekDays.forEach((day, index) => (day.textContent = days[index][0]))
    : weekDays.forEach((day, index) => (day.textContent = days[index]));
};
window.addEventListener("resize", weekDaysHandler);
weekDaysHandler();

// classes animation functionality
const classBlocks = document.querySelectorAll(".schedule__wrapper__block");
const classDays = document.querySelectorAll(".schedule__weekDays__day");
// sets active class on current day
let nowActive = new Date().getDay();
classDays[nowActive].classList.add("schedule__weekDays__day--active");
//
classDays.forEach(day => {
  day.addEventListener("click", e => {
    classDays.forEach(day =>
      day.classList.remove("schedule__weekDays__day--active")
    );

    classBlocks.forEach(block => {
      block.animate(
        [
          { transform: "translateY(-5px)", opacity: 0 },
          { transform: "translateY(0px)", opacity: 1 }
        ],
        { duration: 750 }
      );
    });
    e.target.classList.add("schedule__weekDays__day--active");
  });
});

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

// header section position adjustment

const header = document.querySelector("header.header");
header.style.paddingTop =
  document.querySelector("nav.nav").getBoundingClientRect().height + "px";
