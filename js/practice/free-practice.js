// Free practice mode
const CustomPractice = {
  show() {
    document.getElementById('customModal').style.display = 'flex';
    document.getElementById('customInput').focus();
  },
  play(rate) {
    const text = document.getElementById('customInput').value.trim();
    if (!text) { alert('\u8BF7\u8F93\u5165\u82F1\u8BED\u53E5\u5B50'); return; }
    if (typeof speechSynthesis !== 'undefined') {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = rate * 0.85;
      speechSynthesis.speak(u);
    }
  }
};

export default CustomPractice;
