const bildefremvisning = document.querySelector('.bildefremvisning');
const miniatyrbilder = document.querySelectorAll('.miniatyrbilde');
const kryss = document.querySelector('.kryss');
const bilder = document.querySelectorAll('.karusellbilde');
const antallBilder = bilder.length;
let gjeldendeBilde = 0;

miniatyrbilder.forEach((miniatyrbilde, indeks) => {
miniatyrbilde.addEventListener('click', () => {
bildefremvisning.style.display = 'flex';
gjeldendeBilde = indeks; // oppdater gjeldende bilde
visBilde(bilder[gjeldendeBilde].src);
});
});

kryss.addEventListener('click', () => {
bildefremvisning.style.display = 'none';
});

function visBilde(bildeSrc) {
const visningsBilde = bildefremvisning.querySelector('.fokusvindu');
visningsBilde.innerHTML = <img src="${bildeSrc}" alt="bilde">;
}

// Legg til event listeners for pil-tilbake og pil-neste
const pilTilbake = document.querySelector('.pil-tilbake');
const pilNeste = document.querySelector('.pil-neste');

pilTilbake.addEventListener('click', () => {
gjeldendeBilde = (gjeldendeBilde - 1 + antallBilder) % antallBilder; // oppdater gjeldende bilde
visBilde(bilder[gjeldendeBilde].src);
});

pilNeste.addEventListener('click', () => {
gjeldendeBilde = (gjeldendeBilde + 1) % antallBilder; // oppdater gjeldende bilde
visBilde(bilder[gjeldendeBilde].src);
});