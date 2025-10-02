function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 3000);
}

setInterval(createConfetti, 200);

// Confetti style
const style = document.createElement("style");
style.textContent = `
  .confetti {
    position: absolute;
    top: -10px;
    width: 10px;
    height: 10px;
    background: hsl(${Math.random() * 360}, 70%, 60%);
    animation: fall 3s linear forwards;
  }
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
