
const container = document.querySelector(".container");
const heart = document.createElement('div')
heart.classList.add('heart')
heart.textContent = '💗'
container.append(heart)

setInterval(()=>{
    heart.style.animation = "pulse 2s ease infinite";
    heart.style.width = '100vw';
    heart.style.height = '100vh'

},1000)