let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// sjekk om natt-modus er på
// hvis natt-modus er på, skru det av
// hvis natt-modus er av, skru det på

const enableDarkMode = () => {
  // 1. legg til en class "darkmode" til body
  document.body.classList.add("darkmode");
  // 2. oppdater dark mode i det lokale minnet
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. legg til en class "darkmode" til body
  document.body.classList.remove("darkmode");
  // 2. oppdater dark mode i det lokale minnet
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});
