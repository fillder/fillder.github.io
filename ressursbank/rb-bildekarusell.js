// Henter bildefremvisning-elementet fra HTML
const bildefremvisning = document.querySelector('.bildefremvisning');

// Henter alle miniatyrbilder fra HTML
const miniatyrbilder = document.querySelectorAll('.miniatyrbilde');

// Henter bakgrunnsområdet for bildekarusellen fra HTML-dokumentet
const kryss = document.querySelector('.kryss');


// Går gjennom alle miniatyrbilder og legger til klikkhendelseslyttere
miniatyrbilder.forEach((miniatyrbilde) => {
    // Når et miniatyrbilde klikkes på, viser bildefremvisningen og setter riktig bilde
    miniatyrbilde.addEventListener('click', () => {
        bildefremvisning.style.display = 'flex'; // viser bildefremvisningen når et miniatyrbilde klikkes på
        visBilde(miniatyrbilde.src); // viser riktig bilde i bildefremvisningen
    });
});

// Legger til klikk-lytter på kryss-ikonet
kryss.addEventListener('click', () => {
  // Skjuler bildekarusellen hvis klikket ble gjennomført
  bildefremvisning.style.display = 'none';
});

// Hjelpefunksjon for å vise riktig bilde i bildefremvisningen
function visBilde(bildeSrc) {
  const visningsBilde = bildefremvisning.querySelector('.fokusvindu');
  visningsBilde.innerHTML = `<img src="${bildeSrc}" alt="bilde">`;
}