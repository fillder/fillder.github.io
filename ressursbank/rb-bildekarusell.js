// Henter bildekarusell-elementet fra HTML
const bildekarusell = document.querySelector('.bildekarusell');

// Henter alle miniatyrbilder fra HTML
const miniatyrbilder = document.querySelectorAll('.miniatyrbilde');

// Går gjennom alle miniatyrbilder og legger til klikkhendelseslyttere
miniatyrbilder.forEach((miniatyrbilde) => {
    // Når et miniatyrbilde klikkes på, viser bildekarusellen og setter riktig bilde
    miniatyrbilde.addEventListener('click', () => {
        bildekarusell.style.display = 'flex'; // viser bildekarusellen når et miniatyrbilde klikkes på
        visBilde(miniatyrbilde.src); // viser riktig bilde i bildekarusellen
    });
});

// Hjelpefunksjon for å vise riktig bilde i bildekarusellen
function visBilde(bildeSrc) {
  const visningsBilde = bildekarusell.querySelector('img');
  visningsBilde.src = bildeSrc;
}
