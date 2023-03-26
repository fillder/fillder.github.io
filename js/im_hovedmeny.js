document.addEventListener("DOMContentLoaded", function () {
   const menyKnapp = document.querySelector(".maskeMenyOutline");
   const overlayMeny = document.querySelector(".overlayMeny");
   const hovedmenyRamme = document.querySelector(".hovedmenyRamme");

   function closeMenu() {
      overlayMeny.style.opacity = "0";
      setTimeout(() => {
         overlayMeny.style.display = "none";
      }, 300);
      menyKnapp.classList.remove("maskeMenyFill");
      menyKnapp.classList.add("maskeMenyOutline");
      hovedmenyRamme.style.transform = "translateX(100%)";
   }

   menyKnapp.addEventListener("click", function () {
      if (overlayMeny.style.opacity === "1") {
         closeMenu();
      } else {
         overlayMeny.style.display = "flex";
         setTimeout(() => {
            overlayMeny.style.opacity = "1";
         }, 0);
         menyKnapp.classList.remove("maskeMenyOutline");
         menyKnapp.classList.add("maskeMenyFill");
         hovedmenyRamme.style.transform = "translateX(0%)";
      }
   });

   overlayMeny.addEventListener("click", closeMenu);
});
