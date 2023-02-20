// Hent alle knappelementene
const ifKnapper = document.querySelectorAll('.ifKnapp');

// Lagre en referanse til den forrige synlige seksjonen
let forrigeSeksjon = null;

// Legg til en hendelseslytter for klikk på hver knapp
ifKnapper.forEach(knapp => {
  knapp.addEventListener('click', () => {
    // Hent ID-en til innholdsseksjonen som tilsvarer knappen
    const seksjonID = knapp.dataset.seksjon;

    // Skjul den forrige synlige seksjonen hvis det finnes en
    if (forrigeSeksjon) {
      forrigeSeksjon.style.display = 'none';
    }

    // Vis den nye seksjonen og oppdater den forrige synlige referansen
    const nySeksjon = document.getElementById(seksjonID);
    nySeksjon.style.display = 'block';
    forrigeSeksjon = nySeksjon;
  });
});