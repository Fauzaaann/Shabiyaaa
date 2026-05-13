function handleUnwrap() {
    const clicksToOpen = 3;
    // ... (keep your existing click logic) ...

    if (clicks === clicksToOpen) {
        // Multi-layered confetti for a "Hard Work" look
        var duration = 5 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
        }, 250);

        // Fade out wrapper and start heart rain
        document.getElementById('unwrapper-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('unwrapper-screen').classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            startHeartRain();
        }, 1000);
    }
}

function startHeartRain() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart-particle';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }, 200);
}
