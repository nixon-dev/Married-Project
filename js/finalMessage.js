document.querySelector('.button-terminal-accept').addEventListener('click', function(event) {    
    // Oculta el div de message-both
    document.querySelector('.message-both').style.display = 'none';
    document.querySelector('.icon-languages').style.display = 'none';

    // Muestra el div de message-final
    document.querySelector('.message-final').style.display = 'block';

    // Define el texto final
    let finalMessageTitleText = 'Congratulations for your new stage, many successes!';

    // Oculta el título y el botón al principio
    document.querySelector('.final-message-title').style.display = 'none';
    document.querySelector('.button-message-final').style.display = 'none';

    // Imprime el título final letra por letra
    let finalMessageTitle = document.querySelector('.final-message-title');
    finalMessageTitle.textContent = ''; // Limpia el contenido existente
    let indexTitle = 0;
    let intervalIdTitle = setInterval(() => {
        finalMessageTitle.style.display = 'block';
        finalMessageTitle.textContent += finalMessageTitleText[indexTitle];
        indexTitle++;
        if (indexTitle === finalMessageTitleText.length) {
            clearInterval(intervalIdTitle);

            // Muestra el botón con una transición
            let buttonMessageFinal = document.querySelector('.button-message-final');
            buttonMessageFinal.style.transition = 'opacity 1s ease-in-out';
            buttonMessageFinal.style.opacity = '0';
            buttonMessageFinal.style.display = 'block';
            setTimeout(function() {
                buttonMessageFinal.style.opacity = '1';
            }, 1000);
        }
    }, 100); // Ajusta este valor para controlar la velocidad de la animación del texto
});

document.querySelector('.button-message-final').addEventListener('click', function() {
    // Crea la animación de los corazones más rápido
    for (let i = 0; i < 100; i++) {
        setTimeout(function() {
            createHeart(formPosition);
        }, i * 10); // Crea un nuevo corazón cada 25 milisegundos
    }

    // Desvanece la página a blanco después de la animación de los corazones
    setTimeout(function() {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = '0';
    }, 1000); // Ajusta el tiempo de espera a la nueva duración de la animación de los corazones

    // Recarga la página después del desvanecimiento
    setTimeout(function() {
        location.reload();
    }, 2000); // Ajusta el tiempo de espera a la nueva duración de la animación de los corazones más la duración del desvanecimiento
});