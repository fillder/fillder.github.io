document.addEventListener("DOMContentLoaded", function () {
   // Velg alle elementene med tid-klassene
   const tidElementer = document.querySelectorAll(".tid1, .tid1-3, .tid3-6, .tid6-9, .tid9-12, .tid12-15, .tid15");

   // Går gjennom alle elementene med tid-klassene
   for (let tidElement of tidElementer) {
      // Opprett et nytt div-element
      const nyttDivElement = document.createElement("div");

      // Legg til klassene "tidIkon" og "fargetFyll" til det nye div-elementet
      nyttDivElement.classList.add("tidIkon", "maskeTidTimer", "fargetFyll");

      // Legg det nye div-elementet til det eksisterende tid-elementet som et barn
      tidElement.appendChild(nyttDivElement);
   }
   // Spiciness graderinger
   const utenKrydderElementer = document.querySelectorAll(".utenKrydder");

   for (let utenKrydderElement of utenKrydderElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("spiceIkon", "maskeSpice0", "fargetFyll");
      utenKrydderElement.appendChild(nyttDivElement);
   }
   const ekstraMildElementer = document.querySelectorAll(".ekstraMild");

   for (let ekstraMildElement of ekstraMildElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("spiceIkon", "maskeSpice1", "fargetFyll");
      ekstraMildElement.appendChild(nyttDivElement);
   }
   const mildElementer = document.querySelectorAll(".mild");

   for (let mildElement of mildElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("spiceIkon", "maskeSpice2", "fargetFyll");
      mildElement.appendChild(nyttDivElement);
   }
   const mediumElementer = document.querySelectorAll(".medium");

   for (let mediumElement of mediumElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("spiceIkon", "maskeSpice3", "fargetFyll");
      mediumElement.appendChild(nyttDivElement);
   }
   const sterkElementer = document.querySelectorAll(".sterk");

   for (let sterkElement of sterkElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("spiceIkon", "maskeSpice4", "fargetFyll");
      sterkElement.appendChild(nyttDivElement);
   }
   const ekstraSterkElementer = document.querySelectorAll(".ekstraSterk");

   for (let ekstraSterkElement of ekstraSterkElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("spiceIkon", "maskeSpice5", "fargetFyll");
      ekstraSterkElement.appendChild(nyttDivElement);
   }
   // oppdragstyper
   const interntOppdragElementer = document.querySelectorAll(".interntOppdrag");

   for (let interntOppdragElement of interntOppdragElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("op_ikon", "maskeOppdragIntern", "fargetFyll");
      interntOppdragElement.appendChild(nyttDivElement);
   }
   const eksterntOppdragElementer = document.querySelectorAll(".eksterntOppdrag");

   for (let eksterntOppdragElement of eksterntOppdragElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("op_ikon", "maskeOppdragEkstern", "fargetFyll");
      eksterntOppdragElement.appendChild(nyttDivElement);
   }
   const ressursElementer = document.querySelectorAll(".ressurs");

   for (let ressursElement of ressursElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("op_ikon", "maskeOppdragRessurs", "fargetFyll");
      ressursElement.appendChild(nyttDivElement);
   }
   const kursElementer = document.querySelectorAll(".kurs");

   for (let kursElement of kursElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("op_ikon", "maskePlan", "fargetFyll");
      kursElement.appendChild(nyttDivElement);
   }
   const videoElementer = document.querySelectorAll(".video");

   for (let videoElement of videoElementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("op_ikon", "maskeVideo", "fargetFyll");
      videoElement.appendChild(nyttDivElement);
   }
});
