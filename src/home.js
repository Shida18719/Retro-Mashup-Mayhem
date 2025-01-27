/* Sound toggle */
import marioTrophy from "../assets/images/triphies/trophy1.png";
import pikatrophy from "../assets/images/triphies/trophy2.png";
import pactropy from "../assets/images/triphies/trophy3.png";
import spacetrophy from "../assets/images/triphies/trophy4.png";

const soundOnButton = document.getElementById("sound-on");
const soundOffButton = document.getElementById("sound-off");
const backgroundMusic = document.getElementById("backgroundMusic");
/* Modals Constants */
const rulesModal = document.querySelector("#rules-modal");
const aboutUsModal = document.querySelector("#about-us-modal");
const trophiesModal = document.querySelector("#trophies-modal");
const levelsModal = document.querySelector("#levels-modal");

/* Open Modal Buttons */
const rulesButton = document.querySelector(".rules-button");
const aboutUsButton = document.querySelector(".about-us-button");
const trophiesButton = document.querySelector(".trophies-button");
const levelsButton = document.querySelector(".levels-button");

const level1Btn = document.getElementById("level1");
const level2Btn = document.getElementById("level2");
const level3Btn = document.getElementById("level3");
const level4Btn = document.getElementById("level4");

document.addEventListener("DOMContentLoaded", () => {
  const levels = loadFromLocalStorage("levels");
  undisableLevels(levels);
});

export function loadFromLocalStorage(key) {
  const storedData = localStorage.getItem(key);

  if (!storedData) {
    localStorage.setItem("levels", JSON.stringify([]));
    return [];
  }
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
}

soundOffButton.addEventListener("click", () => {
  soundOffButton.classList.add("hide");
  soundOnButton.classList.remove("hide");
  backgroundMusic.play();
});

soundOnButton.addEventListener("click", () => {
  soundOnButton.classList.add("hide");
  soundOffButton.classList.remove("hide");
  backgroundMusic.pause();
});

/* Close Modal Buttons */
const closeRulesButton = document.querySelector("#close-rules-modal-button");
const closeAboutUsButton = document.querySelector(
  "#close-about-us-modal-button"
);
const closeTrophiesButton = document.querySelector(
  "#close-trophies-modal-button"
);
const closeLevelsButton = document.querySelector("#close-levels-button");

/* Open rules modal */
rulesButton.addEventListener("click", () => {
  rulesModal.classList.remove("hide-modal");
});

/* Close rules modal*/
closeRulesButton.addEventListener("click", () => {
  rulesModal.classList.add("hide-modal");
});

/* Open About Us Modal */
aboutUsButton.addEventListener("click", () => {
  aboutUsModal.classList.remove("hide-modal");
});

/* Close About Us Modal */
closeAboutUsButton.addEventListener("click", () => {
  aboutUsModal.classList.add("hide-modal");
});

/* Open Trophies Modal */
trophiesButton.addEventListener("click", () => {
  trophiesModal.classList.remove("hide-modal");
});

/* Close Trophies Modal */
closeTrophiesButton.addEventListener("click", () => {
  trophiesModal.classList.add("hide-modal");
});

/* Open Levels Modal */
levelsButton.addEventListener("click", () => {
  levelsModal.classList.remove("hide-modal");
});

/* Close Levels Modal */
closeLevelsButton.addEventListener("click", () => {
  levelsModal.classList.add("hide-modal");
});

level1Btn.addEventListener("click", () => {
  window.location.href = "src/levels/game.html";
});
level2Btn.addEventListener("click", () => {
  window.location.href = "src/levels/game2.html";
});
level3Btn.addEventListener("click", () => {
  window.location.href = "src/levels/game3.html";
});
level4Btn.addEventListener("click", () => {
  window.location.href = "src/levels/game4.html";
});

function undisableLevels(levels) {
  if (levels.includes(1)) {
    const html = `<img id="mario-trophy" src=${marioTrophy} alt="Mario trophy"><h3>Mario Matrix</h3>`;
    const element = document.getElementById("mario-trophy");
    if (!element) return;

    element.innerHTML = html;

    if (!level2Btn) return;
    level2Btn.disabled = false;
  }
  if (levels.includes(2)) {
    const html = `<img id="pikachu-trophy" src=${pikatrophy} alt="Pikachu trophy"><h3>Pikachu Paradox</h3>`;
    const element = document.getElementById("pikachu-trophy");
    if (!element) return;
    element.innerHTML = html;
    if (!level3Btn) return;
    level3Btn.disabled = false;
  }
  if (levels.includes(3)) {
    const html = `<img id="pacman-trophy" src=${pactropy} alt="Pacman trophy">
    <h3>Pacman Prowess</h3>`;
    const element = document.getElementById("pacman-trophy");
    if (!element) return;
    element.innerHTML = html;

    if (!level4Btn) return;
    level4Btn.disabled = false;
  }
  if (levels.includes(4)) {
    const html = `<img id="invaders-trophy" src=${spacetrophy} alt="Invaders trophy">
    <h3>Invader Invasion</h3>`;
    const element = document.getElementById("invaders-trophy");
    if (!element) return;

    element.innerHTML == html;
  }
}
