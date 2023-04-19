document.addEventListener("DOMContentLoaded", function () {
   var deskImg = document.getElementById("deskImg");
   var mobImg = document.getElementById("mobImg");
   // var galleriImg = document.getElementById("galleriImg");

   mobImg.src = deskImg.src;
   mobImg.alt = deskImg.alt;

   // galleriImg.src = deskImg.src;
});
