const textElement = document.querySelector(".typewriter-text");

// CHANGE YOUR WORDS HERE
const words = [
  "Full Stack Developer",
  "GenAI Learner",
  "DSA Problem Solver",
  "Cloud Enthusiast",
  "Tech Explorer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);

  textElement.textContent = currentChar;
  textElement.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // If typing:
    charIndex++;
    setTimeout(typeEffect, 100); // Typing speed (ms)
  } else if (isDeleting && charIndex > 0) {
    // If deleting:
    charIndex--;
    setTimeout(typeEffect, 50); // Deleting speed (faster)
  } else {
    // If word is complete or fully deleted:
    isDeleting = !isDeleting;

    // Pause before deleting or typing next word
    textElement.classList.remove("stop-blinking");

    // If we just finished deleting, move to next word
    if (!isDeleting) {
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    }

    setTimeout(typeEffect, 900); // Pause time at end of word
  }
};

typeEffect();
