// Add these functions to your existing script.js

function toggleMusic() {
    const audio = document.getElementById('birthday-audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Function to create falling hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start falling hearts only after unwrap
function startAnimations() {
    setInterval(createHeart, 300);
}

// Update your handleUnwrap() function to include:
// if (clicks === 3) { 
//    ... existing code ...
//    startAnimations(); 
// }
