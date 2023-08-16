document.addEventListener('keydown', playSound); 
const keys = Array.from(document.querySelectorAll('.key')); 
// console.log(keys[0]); 

function playSound(e) { 
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    if (!audio) return; 
    audio.currentTime = 0; 
    audio.play();  

    const div = document.querySelector(`div[data-key=${e.code}]`); 
    div.classList.add('playing'); 
    }; 

function reset(e) {
    let div = document.querySelector(`div[data-key=${e.code}`); 
    if (!div) return; 
    div.classList.remove('playing'); 
}

document.addEventListener('keyup', reset); 