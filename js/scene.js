const testScene = document.querySelector("#essai-scene");
document.querySelector("#interrupteur").addEventListener("click", () => {
  testScene.textContent = "Clic reçu. Ouvre js/scene.js pour allumer la scène.";
});
let button = document.querySelector(".presentation")

button.style.background = "red"
const box = document.querySelector(".interrupteur")

box.addEventListener("click", () => {
  console.log("bouton cliquer")
  box.style.background = "red"
  box.textContent = "AAAAAAAAAAAAAAH"
  
})