// Henter alle bildene i galleriet og lagrer dem i en variabel
const bilder = document.querySelectorAll('#galleri-grid img');

// Setter variabelen som holder styr på hvilken gruppe bilder som vises til å peke på den første gruppen
let førsteBildeIgruppe = 0;

// Lagrer antall bilder i en egen variabel
const antallBilder = bilder.length;

// Viser de fire første bildene og skjuler resten når siden lastes inn eller når brukeren går tilbake til starten av galleriet
for (let i = 0; i < antallBilder; i++) {
  if (i < 4) {
    bilder[i].style.display = 'block';
  } else {
    bilder[i].style.display = 'none';
  }
}

// Henter pilNeste- og pilTilbake-elementene og lagrer dem i egne variabler
const pilNeste = document.querySelector('.pil-neste');
const pilTilbake = document.querySelector('.pil-tilbake');

// Legger til en event-lytter som lytter etter klikk på pilNeste
pilNeste.addEventListener('click', function() {
  let sisteBildeIgruppe;
  // Sjekker om det finnes en neste gruppe med bilder, og oppdaterer variabelen som holder styr på hvilken gruppe som vises
  if (førsteBildeIgruppe + 4 < antallBilder) {
    førsteBildeIgruppe += 4;
    sisteBildeIgruppe = førsteBildeIgruppe + 3;
  // Hvis det ikke finnes en neste gruppe, hopper vi tilbake til starten av galleriet og viser den siste gruppen med bilder
  } else {
    førsteBildeIgruppe = 0;
    sisteBildeIgruppe = antallBilder - 1;
  }
  // Viser de fire bildene i gjeldende gruppe og skjuler resten
  for (let i = 0; i < antallBilder; i++) {
    if (i >= førsteBildeIgruppe && i < førsteBildeIgruppe + 4) {
      bilder[i].style.display = 'block';
    } else {
      bilder[i].style.display = 'none';
    }
  }
});
// Legger til en event-lytter som lytter etter klikk på pilTilbake
pilTilbake.addEventListener('click', function() {
  let sisteBildeIgruppe;
  // Sjekker om det finnes en forrige gruppe med bilder, og oppdaterer variabelen som holder styr på hvilken gruppe som vises
  if (førsteBildeIgruppe - 4 >= 0) {
    førsteBildeIgruppe -= 4;
    sisteBildeIgruppe = førsteBildeIgruppe + 3;
  // Hvis det ikke finnes en forrige gruppe, hopper vi til siste gruppe i galleriet
  } else {
    førsteBildeIgruppe = antallBilder - (antallBilder % 4 || 4);
    sisteBildeIgruppe = antallBilder - 1;
  }
  // Viser bildene i gjeldende gruppe og skjuler resten
  for (let i = 0; i < antallBilder; i++) {
    if (i >= førsteBildeIgruppe && i <= sisteBildeIgruppe) {
      bilder[i].style.display = 'block';
    } else {
      bilder[i].style.display = 'none';
    }
  }
});

const bildefremvisning = document.querySelector('.bildefremvisning'); // Henter bildefremvisning-elementet fra HTML
const miniatyrbilder = document.querySelectorAll('.miniatyrbilde'); // Henter alle miniatyrbilder fra HTML
const kryss = document.querySelector('.kryss'); // Henter krysset som fra HTML-dokumentet
const karusellbilder = document.querySelectorAll('.karusellbilde'); // Henter alle karusellbilder fra HTML-dokumentet
const karusellrammer = document.querySelectorAll('.karusellramme'); // Henter alle karusellramme fra HTML-dokumentet

// Variabel som holder styr på indeksen til det aktive bilde i karusellen
let aktivtBilde = 0;

miniatyrbilder.forEach((miniatyrbilde, index) => {// Går gjennom alle miniatyrbilder og legger til klikkhendelseslyttere
  miniatyrbilde.addEventListener('click', () => {    // Når et miniatyrbilde klikkes på, viser bildefremvisningen og setter riktig bilde
      bildefremvisning.style.display = 'flex'; // viser bildefremvisningen når et miniatyrbilde klikkes på
      visBilde(miniatyrbilde.src, index, true); // viser riktig bilde i bildefremvisningen
  });
});


karusellbilder.forEach((karusellbilde, index) => {
  karusellbilde.addEventListener('click', () => {
      visBilde(karusellbilde.src, index);
  });
});

// Legger til klikk-lytter på kryss-ikonet
kryss.addEventListener('click', () => {
  // Skjuler bildekarusellen hvis klikket ble gjennomført
  bildefremvisning.style.display = 'none';
});

// Hjelpefunksjon for å vise riktig bilde i bildefremvisningen
function visBilde(bildeSrc, index, førsteBilde = false) {
  // Henter referanse til fokusvinduet og setter inn bildet
  const visningsBilde = bildefremvisning.querySelector('.fokusvindu');
  visningsBilde.innerHTML = `<img src="${bildeSrc}" alt="bilde">`;

  // Fjerner 'aktiv' klassen fra forrige aktivt bilde hvis det er definert
  if (aktivtBilde !== undefined && aktivtBilde < karusellrammer.length) {
    karusellrammer[aktivtBilde].classList.remove('aktiv');
  }
  
  const forrigeAktivBilde = document.querySelector('.karusellramme.aktiv');
  if (forrigeAktivBilde) {
    forrigeAktivBilde.classList.remove('aktiv');
  }
  // Setter aktivtBilde til indeksen til det nye aktive bildet
  aktivtBilde = index;

  // Legger til 'aktiv' klassen til det nye aktive bilde hvis det er definert
  if (aktivtBilde !== undefined && aktivtBilde < karusellrammer.length) {
    karusellrammer[aktivtBilde].classList.add('aktiv');
  } else if (førsteBilde) {
    karusellrammer[0].classList.add('aktiv');
  }
}

const fokuspilTilbake = document.querySelector('.fokuspil-tilbake');
const fokuspilNeste = document.querySelector('.fokuspil-neste');

fokuspilTilbake.addEventListener('click', function() {
  if (aktivtBilde > 0) {
    aktivtBilde--;
  } else {
    aktivtBilde = karusellrammer.length - 1;
  }
  visBilde(karusellbilder[aktivtBilde].src, aktivtBilde);
});

fokuspilNeste.addEventListener('click', function() {
  if (aktivtBilde < karusellrammer.length - 1) {
    aktivtBilde++;
  } else {
    aktivtBilde = 0;
  }
  visBilde(karusellbilder[aktivtBilde].src, aktivtBilde);
});