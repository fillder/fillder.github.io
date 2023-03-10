const bilder = document.querySelectorAll(".miniatyrbilde");
const bildefremvisning = document.querySelector(".bildefremvisning");
const bildeGrid = document.querySelector("#galleri-grid");
const aktivtBilde = document.querySelector(".aktivtBilde");
const lukkKnapp = document.querySelector(".maskeKryss");
const bildeTittelAktiv = document.querySelector(".bildetittelAktiv");
const bildeTekstAktiv = document.querySelector(".bildetekstAktiv");

bilder.forEach(function (bilde) {
   const tittelTekst = bilde.parentElement.querySelector(".bildetittel");
   const bildeTekst = bilde.parentElement.querySelector(".bildetekst");

   if (bilde.complete) {
      tittelTekst.textContent = bilde.getAttribute("tittel");
      bildeTekst.textContent = bilde.getAttribute("alt");
   } else {
      bilde.addEventListener("load", function () {
         tittelTekst.textContent = this.getAttribute("tittel");
         bildeTekst.textContent = this.getAttribute("alt");
      });
   }
});

function justerBildeStorrelse() {
   const bilde = aktivtBilde.querySelector("img");
   if (bilde) {
      bilde.style.maxWidth = "80vw";
      bilde.style.maxHeight = "80vh";
   }
}

window.addEventListener("load", justerBildeStorrelse);

bilder.forEach(function (bilde) {
   bilde.addEventListener("click", function () {
      aktivtBilde.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
      bildefremvisning.style.display = "flex";
      bildeTittelAktiv.textContent = this.getAttribute("tittel");
      bildeTekstAktiv.textContent = this.getAttribute("alt");
      lukkKnapp.addEventListener("click", function () {
         bildefremvisning.style.display = "none";
      });
      // Kall funksjonen når et bilde blir klikket på
      justerBildeStorrelse();
   });
});

bildefremvisning.addEventListener("click", function (event) {
   if (event.target === this) {
      this.style.display = "none";
   }
});

// Kall funksjonen når skjermen endrer størrelse
window.addEventListener("resize", justerBildeStorrelse);
