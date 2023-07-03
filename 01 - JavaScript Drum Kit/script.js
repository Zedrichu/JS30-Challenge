function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; //Stop function for keys not found on screen
    
    audio.currentTime = 0; // Rewind to start of sound
    audio.play();
    
    key.classList.add('playing')    
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if it's not transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);