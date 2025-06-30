 //  Typing Effect  ///
const textElement = document.getElementById('typing-text');
const textArray = ["Welcome to Our Committees Dashboard", "Explore Our Creativity, Technology, and Teamwork"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    textElement.textContent += textArray[textIndex][charIndex];
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      textElement.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % textArray.length;
      typeText();
    }, 2000);
  }
}
typeText();

//  Mode Switcher ////

const modeSwitcher = document.getElementById('mode-switcher');
modeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeSwitcher.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

  