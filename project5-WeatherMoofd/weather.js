
const weatherMood = {
    sunny: "🌞 Sunshine is happiness in light.",
    cloudy: "☁️ Cloudy skies bring cozy thoughts.",
    rainy: "🌧️ Let it rain, let it heal.",
    storm: "⚡ You’re powerful, just like a storm.",
    snow: "❄️ Chill vibes only."
};

function handleWeather(event){
    const weather = event.id;
    
    if(weather === '🌞'){
        document.body.style.backgroundColor = '#FFD700'
       result = document.getElementById('result');
       result.innerHTML = weatherMood.sunny
        
    }else if(weather === '☁️'){
        document.body.style.backgroundColor = '#D3D3D3'
        result = document.getElementById('result');
        result.innerHTML = weatherMood.cloudy
 
    } else if(weather === '🌧️'){
        document.body.style.backgroundColor = '#A4B0BD'
        result = document.getElementById('result');
        result.innerHTML = weatherMood.rainy
       
    }else if(weather === '⚡'){
        document.body.style.backgroundColor = '#FF6B6B'
        result = document.getElementById('result');
        result.innerHTML = weatherMood.storm
     
    }else if(weather === '❄️'){
        document.body.style.backgroundColor = '#E0FFFF'
        result = document.getElementById('result');
        result.innerHTML = weatherMood.snow
        
    }else{
        console.error('Something went wrong')
    }
    
}