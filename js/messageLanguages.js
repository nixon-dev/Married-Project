document.querySelector('.button-print').addEventListener('click', function(event) {
    let iconLanguages = document.querySelector('.icon-languages');
    let printMessageDiv = document.querySelector('.print-message');
    let headerIcon = document.querySelector('.header-icon');
    let icons = Array.from(iconLanguages.querySelectorAll('.fa-brands'));
    let messageCoding = document.querySelector('.message-coding');
    let coding = document.querySelector('#coding');
    let congratulations = document.querySelector('#congratulations');
    let buttonAccept = document.querySelector('.button-accept');

    printMessageDiv.style.display = 'none';
    iconLanguages.style.opacity = '0'; // Inicialmente invisible
    iconLanguages.style.transition = 'opacity 1s ease-in-out'; // Agrega transición
    iconLanguages.style.display = 'block';

    // Después de un pequeño retraso, cambia la opacidad a 1 para iniciar la transición
    setTimeout(function() {
        iconLanguages.style.opacity = '1';
    }, 200);

    // Crea un nuevo div para contener los íconos
    let iconContainer = document.createElement('div');
    iconContainer.style.display = 'flex'; // Asegúrate de que los íconos se muestren en línea
    iconContainer.style.overflow = 'hidden'; // Oculta los íconos que se desplazan fuera de la vista
    headerIcon.appendChild(iconContainer);

    // Crea un nuevo div para la animación del carrusel
    let carousel = document.createElement('div');
    carousel.style.display = 'flex'; // Asegúrate de que los íconos se muestren en línea
    carousel.style.animation = 'carousel 20s linear infinite'; // Añade la animación del carrusel
    iconContainer.appendChild(carousel);

    icons.forEach((icon, index) => {
        icon.style.display = 'block';
        icon.style.margin = '25px'; // Agrega un margen alrededor de cada ícono
    
        // Añade el ícono al carrusel
        carousel.appendChild(icon);
    });
    
    // Después de añadir todos los íconos, añade sus clones
    icons.forEach((icon, index) => {
        // Añade el clon del ícono al carrusel
        carousel.appendChild(icon.cloneNode(true));
    });

    // Después de todas las animaciones, muestra el mensaje letra por letra
    setTimeout(() => {
        messageCoding.style.display = 'block';
        let message = coding.textContent;
        coding.textContent = '';
        let index = 0;

        let intervalId = setInterval(() => {
            coding.textContent += message[index];
            index++;

            if (index === message.length) {
                clearInterval(intervalId);

                // Muestra el mensaje de felicitación después de que el primer mensaje se haya mostrado completamente
                setTimeout(() => {
                    congratulations.style.display = 'block';
                    let congratsMessage = congratulations.textContent;
                    congratulations.textContent = '';
                    let congratsIndex = 0;

                    let congratsIntervalId = setInterval(() => {
                        congratulations.textContent += congratsMessage[congratsIndex];
                        congratsIndex++;

                        if (congratsIndex === congratsMessage.length) {
                            clearInterval(congratsIntervalId);

                            // Muestra el botón de aceptar después de que el mensaje de felicitación se haya mostrado completamente
                            setTimeout(() => {
                                buttonAccept.style.display = 'block';
                            }, 1000); // Muestra el botón de aceptar después de 1 segundo
                        }
                    }, 100); // Ajusta este valor para controlar la velocidad de la animación del texto
                }, 1000); // Muestra el mensaje de felicitación después de 1 segundo
            }
        }, 100); // Ajusta este valor para controlar la velocidad de la animación del texto
    }, 1000); // Muestra el mensaje después de 1 segundo
});