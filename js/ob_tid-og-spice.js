document.addEventListener("DOMContentLoaded", function () {
   // Velg alle elementene med tid-klassene
   const tid1Elementer = document.querySelectorAll(".tid1");

   // Går gjennom alle elementene med tid-klassene
   for (let tid1Element of tid1Elementer) {
      // Opprett et nytt div-element
      const nyttDivElement = document.createElement("div");

      // Legg til klassene "tidIkon" og "fargetFyll" til det nye div-elementet
      nyttDivElement.classList.add("tidIkon", "maskeTid1", "fargetFyll");

      // Legg det nye div-elementet til det eksisterende tid-elementet som et barn
      tid1Element.appendChild(nyttDivElement);
   }
   const tid2Elementer = document.querySelectorAll(".tid1-3");
   for (let tid2Element of tid2Elementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("tidIkon", "maskeTid1-3", "fargetFyll");
      tid2Element.appendChild(nyttDivElement);
   }

   const tid3Elementer = document.querySelectorAll(".tid3-6");
   for (let tid3Element of tid3Elementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("tidIkon", "maskeTid3-6", "fargetFyll");
      tid3Element.appendChild(nyttDivElement);
   }

   const tid4Elementer = document.querySelectorAll(".tid6-9");
   for (let tid4Elemente of tid4Elementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("tidIkon", "maskeTid6-9", "fargetFyll");
      tid4Elemente.appendChild(nyttDivElement);
   }

   const tid5Elementer = document.querySelectorAll(".tid9-12");
   for (let tid5Elemente of tid5Elementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("tidIkon", "maskeTid9-12", "fargetFyll");
      tid5Elemente.appendChild(nyttDivElement);
   }

   const tid6Elementer = document.querySelectorAll(".tid12-15");
   for (let tid6Elemente of tid6Elementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("tidIkon", "maskeTid12-15", "fargetFyll");
      tid6Elemente.appendChild(nyttDivElement);
   }

   const tid7Elementer = document.querySelectorAll(".tid15");
   for (let tid7Elemente of tid7Elementer) {
      const nyttDivElement = document.createElement("div");
      nyttDivElement.classList.add("tidIkon", "maskeTid15", "fargetFyll");
      tid7Elemente.appendChild(nyttDivElement);
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
