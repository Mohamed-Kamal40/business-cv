const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides .slide");

const prevBtn = document.getElementById("prev");
const nxtBtn = document.getElementById("nxt");

function display(val, m) {
  for (let i = 0; i < slide.length; i++) {
    if (slide[i].classList.contains("actv")) {
      slide[i].classList.remove("actv");
      if (i + val == -1 || i + val == 4) {
        val == -1
          ? slide[3].classList.add("actv")
          : slide[0].classList.add("actv");
        break;
      }

      slide[i + val].classList.add("actv");
      break;
    }
  }
}
prevBtn.addEventListener("click", display.bind(event, -1));
nxtBtn.addEventListener("click", display.bind(event, 1));

