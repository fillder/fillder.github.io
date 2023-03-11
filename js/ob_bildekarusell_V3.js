const bilder = document.querySelectorAll(".miniatyrbilde");
const bildefremvisning = document.querySelector(".bildefremvisning");
const aktivtBilde = document.querySelector(".aktivtBilde");
const lukkKnapp = document.querySelector(".maskeKryss");
const bildeTittelAktiv = document.querySelector(".bildetittelAktiv");
const bildeTekstAktiv = document.querySelector(".bildetekstAktiv");
const miniatyrgalleri = document.querySelectorAll("#galleri-grid div");
const bildeKarusell = document.querySelector(".bildeKarusell");
const karusellBildeElement = document.querySelectorAll("#galleri-grid img");
const aktivtBildeTeller = document.querySelector(".bildeTeller .gjeldendeBilde");
const totaltBilderTeller = document.querySelector(".bildeTeller .bilderTotalt");
const antallBilder = miniatyrgalleri.length;
let totaltAntallBilder = bilder.length;

karusellBildeElement.forEach((bilde, index) => {
   bilde.addEventListener("click", () => {
      aktivtBildeIndex = index;
      oppdaterAktivtBilde();
   });
});

bilder.forEach((bilde, index) => {
   const nyttBilde = document.createElement("img");
   nyttBilde.src = bilde.src;
   nyttBilde.alt = bilde.alt;
   nyttBilde.addEventListener("click", () => {
      aktivtBildeIndex = index;
      oppdaterAktivtBilde();
   });
   bildeKarusell.appendChild(nyttBilde);
});

let førsteBildeIgruppe = 0;
let aktivtBildeIndex = 0;

let galleriBilder = document.querySelectorAll("#galleri-bilde");
galleriBilder.forEach((bilde, index) => {
   bilde.addEventListener("click", () => {
      aktivtBildeIndex = index; // Setter aktivt bilde til det klikkede bildet sin indeks
      oppdaterAktivtBilde(); // Oppdaterer aktivt bilde i galleri-grid og bildekarusell
   });
});

function oppdaterAktivtBilde() {
   // Oppdater bilde- og tekstdata
   aktivtBilde.innerHTML = `<img src="${bilder[aktivtBildeIndex].src}" alt="${bilder[aktivtBildeIndex].alt}" />`;
   bildeTittelAktiv.innerHTML = miniatyrgalleri[aktivtBildeIndex].querySelector(".bildetittel").innerHTML;
   bildeTekstAktiv.innerHTML = miniatyrgalleri[aktivtBildeIndex].querySelector(".bildetekst").innerHTML;

   // Oppdater bildetelleren
   aktivtBildeTeller.textContent = aktivtBildeIndex + 1;
   totaltBilderTeller.textContent = totaltAntallBilder;

   // Oppdater galleri-grid
   galleriBilder.forEach((bilde, index) => {
      bilde.addEventListener("click", () => {
         aktivtBildeIndex = index;
         oppdaterAktivtBilde();
         aktivtBildeTeller.textContent = aktivtBildeIndex + 1; // Oppdaterer bildetelleren
      });
   });

   bildeKarusell.children[aktivtBildeIndex].click();
   console.log(`Bytter til bilde ${aktivtBildeIndex + 1} i bildekarusell`);

   // Oppdater plassering i rekken av det totale antallet bilder
   const totaltAntallBilder = bilder.length;
   const bildePlassering = document.querySelector("#bilde-plassering");
   if (bildePlassering) {
      bildePlassering.innerText = `Bilde ${aktivtBildeIndex + 1} av ${totaltAntallBilder}`;
   }

   // Juster bildestørrelse
   justerBildeStorrelse();
}

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

bilder.forEach((bilde) => {
   const tittelTekst = bilde.parentElement.querySelector(".bildetittel");
   const bildeTekst = bilde.parentElement.querySelector(".bildetekst");

   bilde.addEventListener("load", () => {
      tittelTekst.textContent = bilde.getAttribute("tittel");
      bildeTekst.textContent = bilde.getAttribute("alt");
   });

   if (bilde.complete || bilde.naturalWidth > 0) {
      tittelTekst.textContent = bilde.getAttribute("tittel");
      bildeTekst.textContent = bilde.getAttribute("alt");
   }
});

const justerBildeStorrelse = () => {
   const bilde = aktivtBilde.querySelector("img");
   if (bilde) {
      bilde.style.maxWidth = "80vw";
      bilde.style.maxHeight = "80vh";
   }
};

window.addEventListener("load", justerBildeStorrelse);

const pilNesteGruppe = document.querySelector("#pilNesteGruppe");
const pilForrigeGruppe = document.querySelector("#pilForrigeGruppe");

const bilderPerSide = 4;
const antallSider = Math.ceil(antallBilder / bilderPerSide);
let gjeldendeSide = 1;

const gjeldendeSiden = document.querySelector(".gjeldendeSiden");
const siderTotalt = document.querySelector(".siderTotalt");

gjeldendeSiden.textContent = gjeldendeSide;
siderTotalt.textContent = antallSider;

const oppdaterBilder = () => {
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
   oppdaterBilder();
});

pilForrigeGruppe.addEventListener("click", () => {
   if (førsteBildeIgruppe - bilderPerSide >= 0) {
      førsteBildeIgruppe -= bilderPerSide;
      gjeldendeSide--;
   } else {
      førsteBildeIgruppe = antallBilder - (antallBilder % bilderPerSide || bilderPerSide);
      gjeldendeSide = antallSider;
   }
   oppdaterBilder();
});

bilder.forEach((bilde) => {
   bilde.addEventListener("click", () => {
      aktivtBilde.innerHTML = `<img src="${bilde.src}"  alt="${bilde.alt}">`;
      bildefremvisning.style.display = "flex";
      bildeTittelAktiv.textContent = bilde.getAttribute("tittel");
      bildeTekstAktiv.textContent = bilde.getAttribute("alt");
      lukkKnapp.addEventListener("click", () => {
         bildefremvisning.style.display = "none";
      });
      justerBildeStorrelse();
   });
});

bildefremvisning.addEventListener("click", (event) => {
   if (event.target === bildefremvisning) {
      bildefremvisning.style.display = "none";
   }
});

window.addEventListener("resize", justerBildeStorrelse);

document.querySelector("#pilForrigeBilde").addEventListener("click", () => {
   aktivtBildeIndex = (aktivtBildeIndex - 1 + totaltAntallBilder) % totaltAntallBilder;
   oppdaterAktivtBilde();
   aktivtBildeTeller.textContent = aktivtBildeIndex + 1; // Oppdaterer bildetelleren
});

document.querySelector("#pilNesteBilde").addEventListener("click", () => {
   aktivtBildeIndex = (aktivtBildeIndex + 1) % totaltAntallBilder;
   oppdaterAktivtBilde();
   aktivtBildeTeller.textContent = aktivtBildeIndex + 1; // Oppdaterer bildetelleren
});
function visAktivtBilde() {
   bildeTittelAktiv.textContent = bildeKarusell.children[aktivtBildeIndex].getAttribute("tittel");
   bildeTekstAktiv.textContent = bildeKarusell.children[aktivtBildeIndex].getAttribute("alt");
   aktivtBilde.querySelector("img").setAttribute("src", bildeKarusell.children[aktivtBildeIndex].src);
   aktivtBilde.querySelector("img").setAttribute("alt", bildeKarusell.children[aktivtBildeIndex].alt);
   document.querySelector(".gjeldendeBilde").textContent = aktivtBildeIndex + 1;
}
