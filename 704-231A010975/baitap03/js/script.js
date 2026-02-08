let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const input = document.getElementById("guessInput").value;
  const guess = Number(input);
  const message = document.getElementById("message");

  if (input === "" || isNaN(guess)) {
    message.innerText = "⚠️ Vui lòng nhập số hợp lệ!";
    return;
  }

  if (guess < 1 || guess > 100) {
    message.innerText = "⚠️ Số phải từ 1 đến 100!";
    return;
  }

  attempts++;
  document.getElementById("attempts").innerText = "Số lần thử: " + attempts;

  if (guess > secretNumber) {
    message.innerText = "📈 Quá cao!";
  } else if (guess < secretNumber) {
    message.innerText = "📉 Quá thấp!";
  } else {
    message.innerText = "🎉 Chính xác!";
    showFireworks();
  }
}

function showFireworks() {
  const fireworks = document.getElementById("fireworks");
  fireworks.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";
    fireworks.appendChild(fw);
  }
}
