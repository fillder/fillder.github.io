const miniatyrgalleri = document.querySelectorAll("#galleri-grid img"); // Henter alle bildene i galleriet og lagrer dem i en variabel
const antallBilder = miniatyrgalleri.length; // Lagrer antall miniatyrgalleri i en egen variabel

let førsteBildeIgruppe = 0; // Setter variabelen som holder styr på hvilken gruppe miniatyrgalleri som vises til å peke på den første gruppen

for (let i = 0; i < antallBilder; i++) {
   // Viser de fire første bildene og skjuler resten når siden lastes inn eller når brukeren går tilbake til starten av galleriet
   if (i < 4) {
      miniatyrgalleri[i].style.display = "block";
   } else {
      miniatyrgalleri[i].style.display = "none";
   }
}

const pilNeste = document.querySelector(".pil-neste"); // Velger ut pilNeste- og pilTilbake-elementene fra HTML og lagrer dem i egne variabler
const pilTilbake = document.querySelector(".pil-tilbake");

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

const bildefremvisning = document.querySelector(".bildefremvisning"); // Henter bildefremvisning-elementet fra HTML
const miniatyrbilder = document.querySelectorAll(".miniatyrbilde"); // Henter alle miniatyrbilder fra HTML
const kryss = document.querySelector(".kryss"); // Henter kryss-ikonet fra HTML-dokumentet
const karusellbilder = document.querySelectorAll(".karusellbilde"); // Henter alle karusellbilder fra HTML-dokumentet
const karusellrammer = document.querySelectorAll(".karusellramme"); // Henter alle karusellramme fra HTML-dokumentet
const bildekarusell = document.querySelector(".bildekarusell");

let aktivtBilde = 0; // Variabel som holder styr på indeksen til det aktive bilde i karusellen

miniatyrbilder.forEach((miniatyrbilde, index) => {
   // Går gjennom alle miniatyrbilder og legger til klikkhendelseslyttere
   miniatyrbilde.addEventListener("click", () => {
      // Når et miniatyrbilde klikkes på, viser bildefremvisningen og setter riktig bilde
      bildefremvisning.style.display = "flex"; // viser bildefremvisningen når et miniatyrbilde klikkes på
      visBilde(miniatyrbilde.src, index, true); // viser riktig bilde i bildefremvisningen
   });
});

karusellbilder.forEach((karusellbilde, index) => {
   karusellbilde.addEventListener("click", () => {
      visBilde(karusellbilde.src, index);
   });
});

kryss.addEventListener("click", () => {
   // Legger til klikk-lytter på kryss-ikonet
   bildefremvisning.style.display = "none"; // Skjuler bildekarusellen hvis klikket ble gjennomført
});

const gjeldendeBilde = document.querySelector(".gjeldendeBilde"); // Velger HTML-elementer og lagrer dem i variabler
const bilderTotalt = document.querySelector(".bilderTotalt");

bilderTotalt.innerText = karusellbilder.length; // Oppdaterer teksten som viser totalt antall bilder

function visBilde(bildeSrc, index, førsteBilde = false) {
   // Viser det valgte bildet i fokusvinduet
   const visningsBilde = bildefremvisning.querySelector(".fokusvindu");
   visningsBilde.innerHTML = `<img src="${bildeSrc}" alt="bilde">`;

   if (aktivtBilde !== undefined && aktivtBilde < karusellrammer.length) {
      // Fjerner klassen 'aktiv' fra forrige valgte bilde
      karusellrammer[aktivtBilde].classList.remove("aktiv");
   }

   const forrigeAktivBilde = document.querySelector(".karusellramme.aktiv"); // Fjerner klassen 'aktiv' fra forrige aktive bilde
   if (forrigeAktivBilde) {
      forrigeAktivBilde.classList.remove("aktiv");
   }

   aktivtBilde = index; // Oppdaterer indeksen til det aktive bildet

   if (aktivtBilde !== undefined && aktivtBilde < karusellrammer.length) {
      // Legger til klassen 'aktiv' på det valgte bildet
      karusellrammer[aktivtBilde].classList.add("aktiv");
   } else if (førsteBilde) {
      karusellrammer[0].classList.add("aktiv");
   }

   gjeldendeBilde.innerText = aktivtBilde + 1; // Oppdaterer teksten som viser indeksen til det gjeldende bildet

   tilpassBildekarusell();
}

const fokuspilTilbake = document.querySelector(".fokuspil-tilbake"); // Henter fokuspil-tilbake fra HTML-dokumentet
const fokuspilNeste = document.querySelector(".fokuspil-neste"); // Henter fokuspil-neste fra HTML-dokumentet

function tilpassBildekarusell() {
   // Henter ut fokusvindu, og beregner bredden.
   const fokusvindu = document.querySelector(".fokusvindu");
   const fokusvinduStil = getComputedStyle(fokusvindu);
   const fokusvinduBredde = parseInt(fokusvinduStil.width);

   bildekarusell.style.maxWidth = `${fokusvinduBredde}px`; // Setter bredden på bildekarusellen tilsvarende fokusvinduets bredde.

   const karusellrammerBredde = parseInt(getComputedStyle(karusellrammer[0]).width); // Beregner antall synlige bilder og antall rader.
   const antallSynligeBilder = Math.floor(fokusvinduBredde / karusellrammerBredde);
   const antallBilder = karusellrammer.length;
   const antallRader = Math.ceil(antallBilder / antallSynligeBilder);

   bildekarusell.style.maxHeight = `${antallRader * karusellrammerBredde}px`; // Setter høyden på bildekarusellen til å tilsvare antall rader.
}

tilpassBildekarusell(); // Kaller funksjonen første gang for å tilpasse størrelsen.

window.addEventListener("resize", tilpassBildekarusell); // Legger til en event-lytter som kaller tilpassBildekarusell() når vindusstørrelsen endres.

fokuspilTilbake.addEventListener("click", function () {
   // Legger til event-lyttere på pilene for å gå til forrige og neste bilde.
   if (aktivtBilde > 0) {
      // Sjekker om det finnes en forrige bilde, og går i så fall til dette bildet.
      aktivtBilde--;
   } else {
      aktivtBilde = karusellrammer.length - 1;
   }
   visBilde(karusellbilder[aktivtBilde].src, aktivtBilde); // Viser det nye bildet og tilpasser størrelsen.
   tilpassBildekarusell();
});

fokuspilNeste.addEventListener("click", function () {
   // Sjekker om det finnes et neste bilde, og går i så fall til dette bildet.
   if (aktivtBilde < karusellrammer.length - 1) {
      aktivtBilde++;
   } else {
      aktivtBilde = 0;
   }
   visBilde(karusellbilder[aktivtBilde].src, aktivtBilde); // Viser det nye bildet og tilpasser størrelsen.
   tilpassBildekarusell();
});
