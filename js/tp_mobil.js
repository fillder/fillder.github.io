const timeplanDager = document.querySelectorAll(".dag");
const antallDager = timeplanDager.length;
let dagerPerSide = 1;
const antallSider = Math.ceil(antallDager / dagerPerSide);

function oppdaterDagerPerSide() {
   if (window.innerWidth > 1100) {
      dagerPerSide = 5;
   } else {
      dagerPerSide = 1;
   }
   oppdaterDager();
   for (let i = 0; i < antallDager; i++) {
      if (i < dagerPerSide) {
         timeplanDager[i].style.display = "block";
      } else {
         timeplanDager[i].style.display = "none";
      }
   }
}

window.addEventListener("load", oppdaterDagerPerSide);
window.addEventListener("resize", oppdaterDagerPerSide);

let gjeldendeDag = 0;
let gjeldendeSide = 1;

const nesteDag = document.querySelector(".pilNeste");
const forrigeDag = document.querySelector(".pilForrige");

nesteDag.addEventListener("click", function () {
   if (gjeldendeDag + dagerPerSide < antallDager) {
      gjeldendeDag += dagerPerSide;
      gjeldendeSide++;
   } else {
      gjeldendeDag = 0;
      gjeldendeSide = 1;
   }
   oppdaterDager();
});

forrigeDag.addEventListener("click", function () {
   if (gjeldendeDag - dagerPerSide >= 0) {
      gjeldendeDag -= dagerPerSide;
      gjeldendeSide--;
   } else {
      gjeldendeDag = antallDager - dagerPerSide;
      gjeldendeSide = antallSider;
   }
   oppdaterDager();
});

function oppdaterDager() {
   for (let i = 0; i < antallDager; i++) {
      if (i >= gjeldendeDag && i < gjeldendeDag + dagerPerSide) {
         timeplanDager[i].style.display = "block";
      } else {
         timeplanDager[i].style.display = "none";
      }
   }
   if (gjeldendeSide === 1) {
      forrigeDag.disabled = true;
      forrigeDag.classList.add("disabled");
   } else {
      forrigeDag.disabled = false;
      forrigeDag.classList.remove("disabled");
   }
   if (gjeldendeSide === antallSider) {
      nesteDag.disabled = true;
      nesteDag.classList.add("disabled");
   } else {
      nesteDag.disabled = false;
      nesteDag.classList.remove("disabled");
   }
}

window.addEventListener("resize", oppdaterDagerPerSide);
