// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const speakButton = document.querySelector("#explore button");
  const textInput = document.getElementById("text-to-speak");

  populateVoiceList(voiceSelect, synth);

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => populateVoiceList(voiceSelect, synth);
  }

  speakButton.addEventListener("click", () => {
    const toSay = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");
    const voices = synth.getVoices();

    toSay.voice = voices.find(voice => voice.name === selectedVoice);
    synth.speak(toSay);
  });
};

function populateVoiceList(voiceSelect, synth) {
  const voices = synth.getVoices();
  voiceSelect.innerHTML = "";

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " - DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
};