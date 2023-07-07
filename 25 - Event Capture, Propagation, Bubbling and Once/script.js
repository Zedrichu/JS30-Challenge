const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    // if (this.classList.value === 'two') { 
    //     e.stopPropagation(); // Blocks/stops the bubbling after we found the right child
    // }
}

document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {capture: false, once: false}));

// Capture goes top to bottom - can select order of executing function on the way down
// Bubbling (click-events) from bottom to top - execute function on the way up (default)

// Once listens for a click once and then unbinds the event listener after
button.addEventListener('click', () => {console.log('Click!')}, {once: true});