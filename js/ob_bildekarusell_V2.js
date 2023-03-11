const bilder = document.querySelectorAll(".miniatyrbilde");
const bildefremvisning = document.querySelector(".bildefremvisning");
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

// _______ Funksjoner for å vise maks 4 bilder per galleriside. Den er kun aktiv nør det er mer enn 4 sider _______ //
// ________________________________________________________________________________________________________________ //

const miniatyrgalleri = document.querySelectorAll("#galleri-grid div"); // Henter alle bildene i galleriet og lagrer dem i en variabel
const antallBilder = miniatyrgalleri.length; // Lagrer antall miniatyrgalleri i en egen variabel

let førsteBildeIgruppe = 0; // Setter variabelen som holder styr på hvilken gruppe miniatyrgalleri som vises til å peke på den første gruppen

if (antallBilder <= 4) {
   // Skjuler Sideteller og gallerinavigering dersom det ikke er flere enn fire bilder
   document.querySelector(".sideTeller").style.display = "none";
   document.querySelector(".pilBakgrunnTilbake").style.display = "none";
   document.querySelector(".pilBakgrunnNeste").style.display = "none";
}

for (let i = 0; i < antallBilder; i++) {
   // Viser de fire første bildene og skjuler resten når siden lastes inn eller når brukeren går tilbake til starten av galleriet
   if (i < 4) {
      miniatyrgalleri[i].style.display = "block";
   } else {
      miniatyrgalleri[i].style.display = "none";
   }
}

const pilNeste = document.querySelector(".pilBakgrunnNeste"); // Velger ut pilNeste- og pilTilbake-elementene fra HTML og lagrer dem i egne variabler
const pilTilbake = document.querySelector(".pilBakgrunnTilbake");

const bilderPerSide = 4; // Antall bilder som skal vises per side
const antallSider = Math.ceil(antallBilder / bilderPerSide); // Antall sider som trengs for å vise alle bildene
let gjeldendeSide = 1; // Variabel for å holde styr på hvilken side vi er på

const gjeldendeSiden = document.querySelector(".gjeldendeSiden"); // Velger ut gjeldendeSiden- og siderTotalt-elementene fra HTML og lagrer dem i egne variabler
const siderTotalt = document.querySelector(".siderTotalt");

gjeldendeSiden.textContent = gjeldendeSide; // Oppdaterer HTML for tellere til å vise gjeldende side og totalt antall sider
siderTotalt.textContent = antallSider;

pilNeste.addEventListener("click", function () {
   // legg til event listeners på piltastene
   if (førsteBildeIgruppe + bilderPerSide < antallBilder) {
      // Sjekker om vi kan flytte til neste gruppe med bilder
      førsteBildeIgruppe += bilderPerSide; // Hvis vi kan, øker vi indeksen til første bilde i gruppen og oppdaterer gjeldendeSide-variabelen
      gjeldendeSide++;
   } else {
      // Hvis vi ikke kan, går vi tilbake til starten og gjeldendeSide blir satt til 1
      førsteBildeIgruppe = 0;
      gjeldendeSide = 1;
   }
   oppdaterBilder(); // Oppdaterer visningen av bildene
});

pilTilbake.addEventListener("click", function () {
   // Legger til en "click"-event listener på pilTilbake
   if (førsteBildeIgruppe - bilderPerSide >= 0) {
      // Hvis vi kan, reduserer vi indeksen til første bilde i gruppen og oppdaterer gjeldendeSide-variabelen
      førsteBildeIgruppe -= bilderPerSide;
      gjeldendeSide--;
   } else {
      // Hvis vi ikke kan, går vi til slutten og gjeldendeSide blir satt til antallSider
      førsteBildeIgruppe = antallBilder - (antallBilder % bilderPerSide || bilderPerSide);
      gjeldendeSide = antallSider;
   }
   oppdaterBilder(); // Oppdaterer visningen av bildene
});

// _______ Funksjoner for bildefremvisning _______ //
// _______________________________________________ //

function oppdaterBilder() {
   // Funksjon som oppdaterer visningen av bildene basert på indeksen til første bilde i gruppen
   for (let i = 0; i < antallBilder; i++) {
      if (i >= førsteBildeIgruppe && i < førsteBildeIgruppe + bilderPerSide) {
         miniatyrgalleri[i].style.display = "block";
      } else {
         miniatyrgalleri[i].style.display = "none";
      }
   }
   gjeldendeSiden.textContent = gjeldendeSide;
}

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

// Kjører funksjonen når skjermen endrer størrelse
window.addEventListener("resize", justerBildeStorrelse);

const bildeKarusell = document.querySelector(".bildeKarusell");
const karusellBildeElement = document.querySelectorAll("#galleri-grid .miniatyrbilde");

// Fyller bildekarusellen med karusellBildeElement
karusellBildeElement.forEach((miniatyrbilde) => {
   const bilde = document.createElement("img");
   bilde.src = miniatyrbilde.src;
   bilde.alt = miniatyrbilde.alt;
   bilde.title = miniatyrbilde.title;
   bilde.classList.add("bildeKarusellBilde");
   bildeKarusell.appendChild(bilde);
});

// Legger til klikk-hendelse for å vise bilde i bildefremvisningen
const bildeKarusellBilder = document.querySelectorAll(".bildeKarusellBilde");
bildeKarusellBilder.forEach((bilde) => {
   bilde.addEventListener("click", function () {
      aktivtBilde.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
      bildeTittelAktiv.textContent = this.getAttribute("tittel");
      bildeTekstAktiv.textContent = this.getAttribute("alt");
      // Kjører funksjonen når et bilde blir klikket på
      justerBildeStorrelse();
   });
});
