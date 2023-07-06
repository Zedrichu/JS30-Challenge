/* Get elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress-filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');
const fullscreen = player.querySelector('.fullscreen')

/* Build functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(e) {
    const icon = e.type === "pause" ? "⏵" : "⏸";
    toggle.innerHTML = icon;
}

function skip() {
    const step = this.dataset.skip;
    video.currentTime += parseFloat(step);
}

function handleRangeUpdate() {
    // this.name = 'playbackRate' : 'volume'
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration ) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

let full = false
function toggleFullscreen() {
    if (full) {
        document.exitFullscreen();
    } else {
        player.requestFullscreen();
    }
    full =! full
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousedown', () => mousedown = true);

fullscreen.addEventListener('click', toggleFullscreen)