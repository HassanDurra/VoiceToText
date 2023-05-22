let speakBtn        = document.getElementById('speakBtn');
var convertText     = document.getElementById('voiceText');

// This will be used to convert into text
var Speech = false;
var recognition = null;

speakBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (!Speech) {
    Speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = true;

    // Event listener for speech recognition results
    recognition.addEventListener('result', function (e) {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript);
      convertText.innerHTML = transcript;
    });

    recognition.start();
  } else {
    Speech = false;
    recognition.stop();
  }
});
