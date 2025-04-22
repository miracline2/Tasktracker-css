const colors = ["pink", "skyblue", "lavender", "peachpuff", "lightgreen","red"]
const handleColor = () =>{
    const bgColor = document.getElementById('container')
    const randomColor = Math.floor(Math.random()*colors.length)
    const selector = colors[randomColor]
    bgColor.style.background = selector
    
    console.log('Button Clicked',selector);

    
}