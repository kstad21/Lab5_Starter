// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const hornAudio = document.querySelector("audio");
  const playButton = document.querySelector("button");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");

  hornSelect.addEventListener("change", () => {
    const hornSelected = hornSelect.value;
    hornImage.src = `assets/images/${hornSelected}.svg`;
    hornAudio.src = `assets/audio/${hornSelected}.mp3`;
  });

  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    let volumeLevel;
    if (volume == 0) {
      volumeLevel = 0;
    } else if (volume < 33) {
      volumeLevel = 1;
    } else if (volume < 67) {
      volumeLevel = 2;
    } else {
      volumeLevel = 3;
    }

    volumeIcon.src = `assets/icons/volume-level-${volumeLevel}.svg`;
    volumeIcon.alt =  `Volume level ${volumeLevel}`;
  });

  playButton.addEventListener("click", () => {
    hornAudio.play();

    if (hornSelect.value === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}

