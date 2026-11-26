const testScene = document.querySelector("#essai-scene");
document.querySelector("#interrupteur").addEventListener("click", () => {
  testScene.textContent = "Clic reçu. Ouvre js/scene.js pour allumer la scène.";
});
let button = document.querySelector(".presentation")
console.log(button)
button.style.background = "red"