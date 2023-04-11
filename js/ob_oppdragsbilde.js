function sizeSpacer(spacerElement) {
   spacerElement.style.height = 0;
   var container = spacerElement.parentNode;
   var img = spacerElement.nextElementSibling || spacerElement.nextSibling;
   var lastContentNode = container.children[container.children.length - 1];

   var h = container.clientHeight - img.offsetHeight;
   spacerElement.style.height = h + "px";

   if (h > 0) {
      while (img.offsetHeight > lastContentNode.offsetHeight && h > 0) {
         h--;
         spacerElement.style.height = h + "px";
      }
   }

   // Legg til disse linjene
   var oppdragsInfo = container.querySelector(".oppdragsInfo");
   var availableHeight = oppdragsInfo.clientHeight - img.offsetHeight;
   spacerElement.style.height = Math.max(0, availableHeight) + "px";
}

onload = onresize = function () {
   sizeSpacer(document.getElementById("spacer"));
};
