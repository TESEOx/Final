// Inicia el audio cuando se hace clic en el sobre
document.getElementById("envelope").addEventListener("click", function() {
    const audio = document.getElementById("backgroundMusic");
    audio.play();
    
    // Reinicia el audio cada 20 segundos
    setInterval(function() {
        audio.currentTime = 0; // Reinicia el audio
    }, 70000); // 70 segundos
});

// Función para cerrar el sobre y detener el audio
document.getElementById("closeButton").addEventListener("click", function() {
    const audio = document.getElementById("backgroundMusic");
    audio.pause(); // Pausa el audio cuando se cierra el contenido expandido
});

document.getElementById('envelope').addEventListener('click', function() {
    const flap = document.getElementById('envelopeFlap');
    const expandedContent = document.getElementById('expandedContent');

    flap.classList.toggle('open');
    expandedContent.classList.toggle('show');
    if (expandedContent.classList.contains('show')) {
        expandedContent.classList.remove('hide'); 
    } else {
        expandedContent.classList.add('hide'); 
    }
});

document.getElementById('closeButton').addEventListener('click', function() {
    const flap = document.getElementById('envelopeFlap');
    const expandedContent = document.getElementById('expandedContent');

    flap.classList.remove('open');
    expandedContent.classList.add('hide'); 
    setTimeout(function() {
        expandedContent.classList.remove('show');
    }, 400); 
});


// Cuenta regresiva
function updateCountdown() {
    const eventDate = new Date('2024-09-23T00:00:00');
    const now = new Date();
    const timeDiff = eventDate - now;
    
    if (timeDiff <= 0) {
        document.getElementById('countdown').innerHTML = "<span class='countdown-item'>¡Es el gran día!</span>";
        return;
    }
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = `
        <span class='countdown-item'>${days}d</span>
        <span class='countdown-item'>${hours}h</span>
        <span class='countdown-item'>${minutes}m</span>
        <span class='countdown-item'>${seconds}s</span>
    `;
}

setInterval(updateCountdown, 1000);
