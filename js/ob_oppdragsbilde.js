document.addEventListener("DOMContentLoaded", function () {
   var deskImg = document.getElementById("deskImg");
   var mobImg = document.getElementById("mobImg");

   var openDeskImg = document.getElementById("openDeskImg");
   var openMobImg = document.getElementById("openMobImg");

   var galImg = document.getElementById("galImg");
   var openGalImg = document.getElementById("openGalImg");

   mobImg.src = deskImg.src;
   mobImg.alt = deskImg.alt;

   openDeskImg.href = deskImg.src;
   openMobImg.href = deskImg.src;

   openMobImg.target = openDeskImg.target;

   openGalImg.href = galImg.src;
});
