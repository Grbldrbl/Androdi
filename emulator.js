// emulator.js
class AndroidEmulator {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.init();
    }

    init() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.canvas.addEventListener('click', (event) => {
            const x = event.clientX - this.canvas.offsetLeft;
            const y = event.clientY - this.canvas.offsetTop;
            console.log(`Clicked at (${x}, ${y})`);
            // Handle touch event
        });
    }

    // emulator.js
let touchStartY = 0;
let touchEndY = 0;
const emulator = document.getElementById('emulator');
const appScreen = document.getElementById('appScreen');

emulator.addEventListener('touchstart', function(event) {
    touchStartY = event.touches[0].clientY;
}, false);

emulator.addEventListener('touchmove', function(event) {
    touchEndY = event.touches[0].clientY;
}, false);

emulator.addEventListener('touchend', function() {
    if (touchEndY > touchStartY + 50) { // Swipe down detected
        appScreen.style.top = '0';
    } else if (touchEndY < touchStartY - 50) { // Swipe up detected
        appScreen.style.top = '-640px';
    }
}, false);
}

const canvas = document.createElement('canvas');
canvas.width = 360;
canvas.height = 640;
document.getElementById('emulator').appendChild(canvas);

const emulator = new AndroidEmulator(canvas);
