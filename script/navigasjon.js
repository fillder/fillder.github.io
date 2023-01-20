//1. henter alle elementer med klassen .list
//2. fjerner eksisteren klasser .activate 
//3. legger til samme klasse på klikk
const list = document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active")
}
list.forEach((item) =>
item.addEventListener("click", activeLink));
