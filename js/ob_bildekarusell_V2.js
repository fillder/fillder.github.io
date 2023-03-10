const bilder = document.querySelectorAll(".miniatyrbilde");

bilder.forEach(function (bilde) {
   const tittelTekst = bilde.parentElement.querySelector(".bildetittel");
   const bildeTekst = bilde.parentElement.querySelector(".bildetekst");

   bilde.addEventListener("load", function () {
      tittelTekst.textContent = this.getAttribute("tittel");
      bildeTekst.textContent = this.getAttribute("alt");
   });
});
