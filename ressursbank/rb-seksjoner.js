// Henter alle knappelementene
const ifKnapper = document.querySelectorAll('.ifKnapp');

// Lagrer en referanse til den forrige synlige seksjonen
let forrigeSeksjon = null;

// Legger til en hendelseslytter for klikk på hver knapp
ifKnapper.forEach(knapp => {
  knapp.addEventListener('click', () => {
    // Henter ID-en til innholdsseksjonen som tilsvarer knappen
    const seksjonID = knapp.dataset.seksjon;

    // Henter ID-en til knappen som ble klikket på
    const knappID = knapp.dataset.knapp;

    // Henter den tilsvarende seksjonen
    const seksjon = document.querySelector('.ifSeksjon[data-seksjon="' + knappID + '"]');

    // Skjuler den forrige synlige seksjonen hvis det finnes en, med mindre det er den samme seksjonen som den vi klikket på
    if (forrigeSeksjon !== null && forrigeSeksjon !== seksjon) {
      forrigeSeksjon.classList.remove('synlig');
    }

    // Hvis seksjonen allerede er synlig, skjul den
    if (seksjon.classList.contains('synlig')) {
      seksjon.classList.remove('synlig');
    } else { // Ellers gjør den synlig
      seksjon.classList.add('synlig');
    }

    // Oppdaterer referansen til forrige synlige seksjon
    forrigeSeksjon = seksjon;

    // console.log(`Klikk på ${knappID}. Seksjon synlighet: ${seksjon.classList.contains('synlig')}`);
  });
});
