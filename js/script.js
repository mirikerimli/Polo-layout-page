const prev_btn = document.querySelector(".prev_btn");
const next_btn = document.querySelector(".next_btn");
const back_slider = document.querySelectorAll(".back_slider");
const nav_main = document.querySelectorAll(".nav_main");
const navbar = document.querySelector(".navbar");
const navbar_el = document.querySelectorAll(".navbar ul li a");

const scroll_top = document.querySelector("#scroll_top");

let n = 0;
let m = 0;

window.onmousemove = () => {
  prev_btn.style.display = "block";
  next_btn.style.display = "block";
};

window.onmouseout = () => {
  prev_btn.style.display = "none";
  next_btn.style.display = "none";
};

window.addEventListener("scroll", () => {
  navbar.classList.toggle("nav_scrolled", window.scrollY > 100);
  navbar_el.forEach((i) => {
    i.classList.toggle("nav_scrolled_el", window.scrollY > 100);
  });
  if (window.scrollY < 120) {
    scroll_top.style.display = "none";
  } else {
    scroll_top.style.display = "block";
  }
});

function ChangeSLides() {
  back_slider.forEach((i) => {
    i.style.display = "none";
  });
  nav_main.forEach((i) => {
    i.style.display = "none";
  });
  back_slider[n].style.display = "block";
  nav_main[m].style.display = "block";
}

ChangeSLides();

function Slider() {
  if (n > back_slider.length - 1 && m > nav_main.length - 1) {
    n = 0;
    m = 0;
  }
  ChangeSLides();
  n++;
  m++;
  setTimeout("Slider()", 10000);
}

Slider();

prev_btn.addEventListener("click", () => {
  if (n > 0 && m > 0) {
    n--;
    m--;
  } else {
    n = back_slider.length - 1;
    m = nav_main.length - 1;
  }
  ChangeSLides();
});

next_btn.addEventListener("click", () => {
  if (n < back_slider.length - 1 && m < nav_main.length - 1) {
    n++;
    m++;
  } else {
    n = 0;
    m = 0;
  }
  ChangeSLides();
});

let counters = document.querySelectorAll(".counter");
let interval = 5000;
let section = document.querySelector(".services");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      counters.forEach((i) => {
        let n = parseInt(i.getAttribute("data-start"));
        let endValue = parseInt(i.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let count = setInterval(() => {
          n += 1;
          i.innerHTML = n;
          if (n == endValue) {
            clearInterval(count);
          }
        }, duration);
      });
    }
    started = true;
  }
});

const scrollContainer = document.querySelector(".clients_block");

let isDragging = false;

const dragging = (e) => {
  if (!isDragging) return;
  scrollContainer.scrollLeft -= e.movementX;
};

scrollContainer.addEventListener("mousedown", () => (isDragging = true));
scrollContainer.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", () => (isDragging = false));
