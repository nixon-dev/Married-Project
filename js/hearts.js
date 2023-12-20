function createHeart(formPosition) {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart', 'heart-icon');
    heart.style.left = Math.random() * window.innerWidth + 'px'; // Posición aleatoria en toda la anchura de la pantalla
    heart.style.top = (formPosition.top + formPosition.height + Math.random() * window.innerHeight / 2) + 'px'; // Posición inicial un poco más abajo
    document.body.appendChild(heart);
    setTimeout(function() {
        heart.remove();
    }, 2000); // Elimina el corazón después de 2 segundos
}