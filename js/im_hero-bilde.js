const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-tittel");
const limit = -260;
const titleLimit = 320;
const titleMinTop = 20;

window.addEventListener("scroll", () => {
   const scrollPos = window.scrollY;

   let heroTop = scrollPos; // bruk scrollPos direkte til å beregne heroTop
   heroTop = heroTop < limit ? limit : heroTop;
   hero.style.top = `${-heroTop}px`;

   let titleTop = scrollPos; // bruk scrollPos direkte til å beregne titleTop
   titleTop = titleTop > titleLimit ? titleLimit : titleTop;
   titleTop = titleTop < titleMinTop ? titleMinTop : titleTop; // legg til minimumsverdi
   heroTitle.style.top = `${titleTop}px`;
});
