const bilder = document.querySelectorAll(".miniatyrbilde");
const bildefremvisning = document.querySelector(".bildefremvisning");
const aktivtBilde = document.querySelector(".aktivtBilde");
const lukkKnapp = document.querySelector(".maskeKryss");
const bildeTittelAktiv = document.querySelector(".bildetittelAktiv");
const bildeTekstAktiv = document.querySelector(".bildetekstAktiv");
const miniatyrgalleri = document.querySelectorAll("#galleri-grid div");
const bildeKarusell = document.querySelector(".bildeKarusell");
const karusellBildeElement = document.querySelectorAll(".bildeKarusell img");
const aktivtBildeTeller = document.querySelector(".bildeTeller .gjeldendeBilde");
const totaltBilderTeller = document.querySelector(".bildeTeller .bilderTotalt");
const antallBilder = miniatyrgalleri.length;

let totaltAntallBilder = bilder.length;
let førsteBildeIgruppe = 0;
let aktivtBildeIndex = 0;

let galleriBilder = document.querySelectorAll("#galleri-bilde");

if (antallBilder <= 4) {
   document.querySelectorAll(".sideTeller, #pilForrigeGruppe, #pilNesteGruppe").forEach((elem) => {
      elem.style.display = "none";
   });
}

Array.from(miniatyrgalleri).forEach((galleri, i) => {
   if (i < 4) {
      galleri.style.display = "block";
   } else {
      galleri.style.display = "none";
   }
});

function oppdaterBildeTekst(bilde, tittelElement, tekstElement) {
   const tittelTekst = bilde.getAttribute("tittel");
   const bildeTekst = bilde.getAttribute("alt");
   tittelElement.textContent = tittelTekst ? tittelTekst : "";
   tekstElement.textContent = bildeTekst ? bildeTekst : "";
}

bilder.forEach((bilde, index) => {
   const tittelTekst = bilde.parentElement.querySelector(".bildetittel");
   const bildeTekst = bilde.parentElement.querySelector(".bildetekst");
   oppdaterBildeTekst(bilde, tittelTekst, bildeTekst);
   bilde.addEventListener("click", () => {
      aktivtBildeIndex = index;
      visBilde();
   });
});

const settBredde = () => {
   const bilde = aktivtBilde.querySelector("img");
   if (bilde) {
      if (!bilde.style.maxWidth && !bilde.style.maxHeight) {
         bilde.style.maxWidth = "90vw";
         bilde.style.maxHeight = "90vh";
      }
   }
};

const pilNesteGruppe = document.querySelector("#pilNesteGruppe");
const pilForrigeGruppe = document.querySelector("#pilForrigeGruppe");

const bilderPerSide = 4;
const antallSider = Math.ceil(antallBilder / bilderPerSide);
let gjeldendeSide = 1;

const gjeldendeSiden = document.querySelector(".gjeldendeSiden");
const siderTotalt = document.querySelector(".siderTotalt");

gjeldendeSiden.textContent = gjeldendeSide;
siderTotalt.textContent = antallSider;

const oppdaterBildegruppe = () => {
   for (let i = 0; i < antallBilder; i++) {
      if (i >= førsteBildeIgruppe && i < førsteBildeIgruppe + bilderPerSide) {
         miniatyrgalleri[i].style.display = "block";
      } else {
         miniatyrgalleri[i].style.display = "none";
      }
   }
   gjeldendeSiden.textContent = gjeldendeSide;
};

pilNesteGruppe.addEventListener("click", () => {
   if (førsteBildeIgruppe + bilderPerSide < antallBilder) {
      førsteBildeIgruppe += bilderPerSide;
      gjeldendeSide++;
   } else {
      førsteBildeIgruppe = 0;
      gjeldendeSide = 1;
   }
   oppdaterBildegruppe();
});

pilForrigeGruppe.addEventListener("click", () => {
   if (førsteBildeIgruppe - bilderPerSide >= 0) {
      førsteBildeIgruppe -= bilderPerSide;
      gjeldendeSide--;
   } else {
      førsteBildeIgruppe = antallBilder - (antallBilder % bilderPerSide || bilderPerSide);
      gjeldendeSide = antallSider;
   }
   oppdaterBildegruppe();
});

bilder.forEach((bilde) => {
   bilde.addEventListener("click", () => {
      aktivtBilde.innerHTML = `<img src="${bilde.src}"  alt="${bilde.alt}">`;
      bildefremvisning.style.display = "flex";
      bildeTittelAktiv.textContent = bilde.getAttribute("tittel");
      bildeTekstAktiv.textContent = bilde.getAttribute("alt");
      lukkKnapp.addEventListener("click", () => {
         bildefremvisning.style.display = "none";
         karusellBildeElement.forEach((element) => {
            element.classList.remove("aktivtKarusellBilde");
         });
         aktivtBildeIndex = null;
      });
      settBredde();
      aktivtKarusellBilde();
   });
});

bildefremvisning.addEventListener("click", (event) => {
   if (event.target === bildefremvisning) {
      bildefremvisning.style.display = "none";
      karusellBildeElement.forEach((element) => {
         element.classList.remove("aktivtKarusellBilde");
      });
      aktivtBildeIndex = null;
   }
});

function aktivtKarusellBilde() {
   console.log("Aktivt karusellbilde index:", aktivtBildeIndex);
   const karusellBildeElementer = document.querySelectorAll(".bildeKarusell img");
   karusellBildeElementer.forEach((bildeElement, index) => {
      if (index === aktivtBildeIndex) {
         bildeElement.classList.add("aktivtKarusellBilde");
      } else {
         bildeElement.classList.remove("aktivtKarusellBilde");
      }
   });
}
karusellBildeElement.forEach((bilde, index) => {
   bilde.addEventListener("click", () => {
      aktivtBildeIndex = index;
      visBilde();
      aktivtKarusellBilde();
   });
});

bilder.forEach((bilde, index) => {
   const nyttBilde = document.createElement("img");
   nyttBilde.src = bilde.src;
   nyttBilde.alt = bilde.alt;
   nyttBilde.addEventListener("click", () => {
      aktivtBildeIndex = index;
      visBilde();
   });
   bildeKarusell.appendChild(nyttBilde);
});

function visBilde() {
   // Oppdater bilde- og tekstdata
   aktivtBilde.innerHTML = `<img src="${bilder[aktivtBildeIndex].src}" alt="${bilder[aktivtBildeIndex].alt}" />`;
   bildeTittelAktiv.innerHTML = miniatyrgalleri[aktivtBildeIndex].querySelector(".bildetittel").innerHTML;
   bildeTekstAktiv.innerHTML = miniatyrgalleri[aktivtBildeIndex].querySelector(".bildetekst").innerHTML;

   // Oppdater bildetelleren
   aktivtBildeTeller.textContent = aktivtBildeIndex + 1;
   totaltBilderTeller.textContent = totaltAntallBilder;

   const bilderTotalt = document.querySelector(".bildeTeller .bilderTotalt");
   bilderTotalt.textContent = bilder.length;

   // Oppdater galleri-grid
   galleriBilder.forEach((bilde, index) => {
      const tittelTekst = bilde.querySelector(".bildetittel");
      const bildeTekst = bilde.querySelector(".bildetekst");
      oppdaterBildeTekst(bilder[index], tittelTekst, bildeTekst);
      if (index === aktivtBildeIndex) {
         bilde.classList.add("aktivtBilde");
      } else {
         bilde.classList.remove("aktivtBilde");
      }
   });

   bildeKarusell.children[aktivtBildeIndex].click();

   // Oppdater plassering i rekken av det totale antallet bilder
   const antallBilder = bilder.length;
   const bildePlassering = document.querySelector("#bilde-plassering");
   if (bildePlassering) {
      bildePlassering.innerText = `Bilde ${aktivtBildeIndex + 1} av ${antallBilder}`;
   }

   // Juster bildestørrelse
   settBredde();
   aktivtKarusellBilde();
}

document.querySelector("#pilForrigeBilde").addEventListener("click", () => {
   aktivtBildeIndex = (aktivtBildeIndex - 1 + totaltAntallBilder) % totaltAntallBilder;
   visBilde();
   aktivtKarusellBilde();
   aktivtBildeTeller.textContent = aktivtBildeIndex + 1; // Oppdaterer bildetelleren
});

document.querySelector("#pilNesteBilde").addEventListener("click", () => {
   aktivtBildeIndex = (aktivtBildeIndex + 1) % totaltAntallBilder;
   visBilde();
   aktivtKarusellBilde();
   aktivtBildeTeller.textContent = aktivtBildeIndex + 1; // Oppdaterer bildetelleren
});

window.addEventListener("load", settBredde);
window.addEventListener("resize", settBredde);
