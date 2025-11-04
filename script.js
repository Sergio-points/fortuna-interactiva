const fortunes = [
    "Sí, definitivamente.",
    "Es cierto.",
    "Sin duda alguna.",
    "Sí, claro.",
    "Puedes confiar en ello.",
    "Como yo lo veo, sí.",
    "Lo más probable.",
    "Buenas perspectivas.",
    "Sí.",
    "Las señales apuntan a sí.",
    "Respuesta confusa, intenta de nuevo.",
    "Pregunta de nuevo más tarde.",
    "Mejor no decirte ahora.",
    "No puedo predecirlo ahora.",
    "Concéntrate y pregunta de nuevo.",
    "No cuentes con ello.",
    "Mi respuesta es no.",
    "Mis fuentes dicen que no.",
    "Las perspectivas no son buenas.",
    "Muy dudoso."
];

const ball = document.getElementById('ball');
const triangle = document.getElementById('triangle');
const message = document.getElementById('message');
const askButton = document.getElementById('askButton');

function getRandomFortune() {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

function showFortune() {
    ball.classList.add('shake');
    triangle.style.opacity = '0';
    message.textContent = 'Pensando...';
    
    setTimeout(() => {
        ball.classList.remove('shake');
        triangle.style.opacity = '1';
        message.textContent = getRandomFortune();
        message.classList.add('fade-in');
        
        setTimeout(() => {
            message.classList.remove('fade-in');
        }, 500);
    }, 500);
}

ball.addEventListener('click', showFortune);
askButton.addEventListener('click', showFortune);
