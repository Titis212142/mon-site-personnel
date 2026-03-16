const bouton = document.getElementById("bouton-couleur");

let couleurActive = false;

bouton.addEventListener("click", () => {
  couleurActive = !couleurActive;
  bouton.style.background = couleurActive ? "#dc2626" : "#16a34a";
});
