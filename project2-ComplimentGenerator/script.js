
const afferMation = [
    "You're stronger than you think 🌷",
    "Your smile lights up the room 🌟",
    "The world needs more of your kind heart 💕",
    "You're growing beautifully, one step at a time 🌱"
]

const handleMessage = () => {

    const result = document.getElementById('message');
    const randomMessage = Math.floor(Math.random()*afferMation.length);
    const selectedMessage = afferMation[randomMessage];
    result.innerText = selectedMessage
    console.log(selectedMessage)


}

setInterval(()=>{
    const heart = document.createElement('div')
    heart.innerText = '💕'
    heart.classList.add('heart')
    heart.style.position = 'absolute';
    heart.style.left = `${Math.floor(Math.random()*100)}vw`
    heart.style.top = `${Math.floor(Math.random()*100)}vh`
    document.body.append(heart)

    setTimeout(() => {
        heart.remove();
      }, 2000);

},1000)