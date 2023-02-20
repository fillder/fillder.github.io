// Henter alle knappelementene
const ifKnapper = document.querySelectorAll('.ifKnapp');

// Lagrer en referanse til den forrige synlige seksjonen
let forrigeSeksjon = null;

// Legger til en hendelseslytter for klikk på hver knapp
ifKnapper.forEach(knapp => {
  knapp.addEventListener('click', () => {
    // Henter ID-en til innholdsseksjonen som tilsvarer knappen
    const seksjonID = knapp.dataset.seksjon;

    // Skjuler den forrige synlige seksjonen hvis det finnes en
    if (forrigeSeksjon !== null) {
      forrigeSeksjon.classList.remove('synlig');
    }

    // Henter ID-en til knappen som ble klikket på
    const knappID = knapp.dataset.knapp;
    // Henter den tilsvarende seksjonen og gjør den synlig
    document.querySelector('.ifSeksjon[data-seksjon="' + knappID + '"]').classList.add('synlig');

    // Oppdaterer referansen til forrige synlige seksjon
    forrigeSeksjon = document.querySelector('.ifSeksjon[data-seksjon="' + knappID + '"]');
  });
});