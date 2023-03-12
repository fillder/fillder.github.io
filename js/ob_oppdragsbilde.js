function sizeSpacer(spacerElement) {
   spacerElement.style.height = 0;
   var container = spacerElement.parentNode;
   var img = spacerElement.nextElementSibling || spacerElement.nextSibling;
   var lastContentNode = container.children[container.children.length - 1];

   var h = container.clientHeight - img.offsetHeight - -10; // endring: legger til en margin på 10px mellom img og spacer
   spacerElement.style.height = h + "px";

   if (h > 0) {
      while (img.offsetHeight > lastContentNode.offsetHeight && h > 0) {
         // endring: sammenligner høyden på img og lastContentNode
         h--;
         spacerElement.style.height = h + "px";
      }
   }
}

onload = onresize = function () {
   sizeSpacer(document.getElementById("spacer"));
};
