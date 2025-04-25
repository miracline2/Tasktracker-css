
var emotion;
var moodValue;


function handleEmotions(button) {

     emotion = button.id;
     const allButtons = document.querySelectorAll('.btn');
     allButtons.forEach(btn => btn.classList.remove('selected'));
     button.classList.add('selected');
  

  }
  
  function handleInput(e){
   
    e.preventDefault();
    moodValue = document.getElementById('mood').value;

 
  result.innerHTML = `${emotion} - ${moodValue}`;

  void result.offsetWidth;

  result.classList.add('show');

  document.getElementById('mood').value = '';
  const allButtons = document.querySelectorAll('.btn');
  allButtons.forEach(btn => btn.classList.remove('selected'));
  emotion = '';
  
  }