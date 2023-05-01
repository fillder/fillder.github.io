// Definer DOM-elementer
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

// Skjul side-teller og piler hvis det er færre enn eller lik 4 bilder
if (antallBilder <= 4) {
   document.querySelectorAll(".sideTeller, #pilForrigeGruppe, #pilNesteGruppe").forEach((elem) => {
      elem.style.display = "none";
   });
}

// Vis de første 4 bildene i galleriet og skjul resten
Array.from(miniatyrgalleri).forEach((galleri, i) => {
   if (i < 4) {
      galleri.style.display = "block";
   } else {
      galleri.style.display = "none";
   }
});

// Oppdater bilde- og tekstdata dynamisk
function oppdaterBildeTekst(bilde, tittelElement, tekstElement) {
   if (tittelElement && tekstElement) {
      const tittelTekst = bilde.getAttribute("tittel");
      const bildeTekst = bilde.getAttribute("alt");
      tittelElement.textContent = tittelTekst ? tittelTekst : "";
      tekstElement.textContent = bildeTekst ? bildeTekst : "";
   }
}

// Legg til click-event på hvert bilde i galleriet for å vise det i bildefremvisning
bilder.forEach((bilde, index) => {
   bilde.addEventListener("click", () => {
      aktivtBildeIndex = index;
      visBilde();
   });
});

// Sett maks bredde for bilde i bildefremvisning basert på vindusbredde
const settBredde = () => {
   const bilde = aktivtBilde.querySelector("img");
   if (bilde) {
      const innerWidth = window.innerWidth;
      const useDvw = CSS.supports("max-width", "1dvw");
      const useDvh = CSS.supports("max-width", "1dvw");

      if (innerWidth <= 600) {
         bilde.style.maxWidth = useDvw ? "100dvw" : "100vw";
         bilde.style.maxHeight = useDvh ? "100dvh" : "100vh";
      } else if (innerWidth <= 768) {
         bilde.style.maxWidth = useDvw ? "90dvw" : "90vw";
         bilde.style.maxHeight = useDvh ? "90dvh" : "90vh";
      } else if (innerWidth <= 1000) {
         bilde.style.maxWidth = useDvw ? "80dvw" : "80vw";
         bilde.style.maxHeight = useDvh ? "80dvh" : "80vh";
      } else {
         bilde.style.maxWidth = useDvw ? "70dvw" : "70vw";
         bilde.style.maxHeight = useDvh ? "70dvh" : "70vh";
      }
   }
};

// Definer DOM-elementer for piler og sideteller
const pilNesteGruppe = document.querySelector("#pilNesteGruppe");
const pilForrigeGruppe = document.querySelector("#pilForrigeGruppe");

const bilderPerSide = 4;
const antallSider = Math.ceil(antallBilder / bilderPerSide);
let gjeldendeSide = 1;

const gjeldendeSiden = document.querySelector(".gjeldendeSiden");
const siderTotalt = document.querySelector(".siderTotalt");

gjeldendeSiden.textContent = gjeldendeSide;
siderTotalt.textContent = antallSider;

// Oppdater miniatyrgalleriet for å vise bilder i gjeldende gruppe
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

// Legg til event listeners for å bla gjennom bildene i miniatyrgalleriet
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

// Vis valgt bilde i bildefremvisning ved klikk på miniatyrbilde
bilder.forEach((bilde) => {
   bilde.addEventListener("click", () => {
      aktivtBilde.innerHTML = `<img src="${bilde.src}"  alt="${bilde.alt}">`;
      bildefremvisning.style.display = "flex";
      bildeTittelAktiv.textContent = bilde.getAttribute("tittel");
      bildeTekstAktiv.textContent = bilde.getAttribute("alt");

      // Lukk bildefremvisning ved klikk på lukk-knapp
      lukkKnapp.addEventListener("click", () => {
         bildefremvisning.style.display = "none";
         karusellBildeElement.forEach((element) => {
            element.classList.remove("aktivtKarusellBilde");
         });
         aktivtBildeIndex = null;
      });

      // Juster bildestørrelse og oppdater aktivt karusellbilde
      settBredde();
      aktivtKarusellBilde();
   });
});

// Lukk bildefremvisning ved klikk utenfor bilde
bildefremvisning.addEventListener("click", (event) => {
   if (event.target === bildefremvisning) {
      bildefremvisning.style.display = "none";
      karusellBildeElement.forEach((element) => {
         element.classList.remove("aktivtKarusellBilde");
      });
      aktivtBildeIndex = null;
   }
});

// Oppdater aktivt karusellbilde
function aktivtKarusellBilde() {
   const karusellBildeElementer = document.querySelectorAll(".bildeKarusell img");
   karusellBildeElementer.forEach((bildeElement, index) => {
      if (index === aktivtBildeIndex) {
         bildeElement.classList.add("aktivtKarusellBilde");
      } else {
         bildeElement.classList.remove("aktivtKarusellBilde");
      }
   });
}

// Legg til event listeners for karusellbilder
karusellBildeElement.forEach((bilde, index) => {
   bilde.addEventListener("click", () => {
      aktivtBildeIndex = index;
      visBilde();
      aktivtKarusellBilde();
   });
});

// Legg til bilder i karusellen
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

// Vis det valgte bildet i bildefremvisning
function visBilde() {
   // Oppdater bilde- og tekstdata
   aktivtBilde.innerHTML = `<img src="${bilder[aktivtBildeIndex].src}" alt="${bilder[aktivtBildeIndex].alt}" />`;
   bildeTittelAktiv.innerHTML = bilder[aktivtBildeIndex].getAttribute("tittel");
   bildeTekstAktiv.innerHTML = bilder[aktivtBildeIndex].getAttribute("alt");

   // Oppdater bildetelleren
   aktivtBildeTeller.textContent = aktivtBildeIndex + 1;
   totaltBilderTeller.textContent = totaltAntallBilder;

   const bilderTotalt = document.querySelector(".bildeTeller .bilderTotalt");
   bilderTotalt.textContent = bilder.length;

   // Oppdater galleri-grid
   galleriBilder.forEach((bilde, index) => {
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
