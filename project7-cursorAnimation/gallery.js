const disciples = [
    { emoji: '🪨', name: 'Peter', preaching: 'Rome' },
    { emoji: '❤️', name: 'John', preaching: 'Ephesus' },
    { emoji: '⚡', name: 'James (son of Zebedee)', preaching: 'Judae' },
    { emoji: '💰➡️✝️', name: 'Mathew', preaching: 'Iran' },
    { emoji: '🤍', name: 'Nathalnael', preaching: 'Armenia' },
    { emoji: '❓', name: 'Philip', preaching: 'Hierapolis' },
    { emoji: '🤨➡️🙏', name: 'Thomas', preaching: 'Chennai' },
    { emoji: '🕊️', name: 'James (Son of Alphaeus)', preaching: 'Rome' },
    { emoji: '🧭', name: 'Andrew', preaching: 'Eastern Turkey' },
    { emoji: '🛡️', name: 'Simon the Zealot', preaching: 'Persia' },
    { emoji: '✨', name: 'Jude/Thaddeus', preaching: 'Persia' },
    { emoji: '🎯', name: 'Matthias (chosen to replace Judas)', preaching: 'Rome' },
    { emoji: '💔', name: 'Judas Iscariot', preaching: 'No More - (Died by Suicide)' },
];

const content = document.getElementById('content');
const centerX = 250;
const centerY = 250;
const radius = 200;

disciples.forEach((disc, i) => {
    const angle = (2 * Math.PI / disciples.length) * i;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = disc.emoji;
    emojiSpan.style.position = 'absolute';
    emojiSpan.style.left = `${x}px`;
    emojiSpan.style.top = `${y}px`;
    emojiSpan.style.transform = 'translate(-50%, -50%)';
    emojiSpan.style.fontSize = '24px';

    content.appendChild(emojiSpan);
    emojiSpan.addEventListener('click',()=>getDiciples(disc));
});

function getDiciples(event){
    console.log('gxhyyy',event.emoji);
    const selectedEmoji = event.emoji;
    const characters = document.getElementById('name');
    const place = document.getElementById('preaching');
    if(selectedEmoji === '🪨'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and  died as martyrs in ${event.preaching}`
    }
    else if(selectedEmoji === '❤️'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached They died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '⚡'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '💰➡️✝️'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '🤍'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '❓'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '🤨➡️🙏'){
        characters.innerHTML = event.name;
        place.innerHTML =`He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '🕊️'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '🧭'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '🛡️'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '✨'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '🎯'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    } else if(selectedEmoji === '💔'){
        characters.innerHTML = event.name;
        place.innerHTML = `He preached and died as martyrs in ${event.preaching}`
    }
    else{
        characters.innerHTML = 'Something Wrong Select correctly';
    }
    
   document.addEventListener('mousemove',(e)=>{
    characters.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    place.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

   }) 
}