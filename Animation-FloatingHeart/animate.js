

setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = '💗'
    heart.classList.add("heart");
    heart.style.position = "absolute";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.fontSize = `${Math.random() * 20 + 20}px`;
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 300);
  