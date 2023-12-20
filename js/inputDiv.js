document.querySelector('.button-next').addEventListener('click', function(event) {
    event.preventDefault();

    // Obtiene el valor del input de Marissa
    let inputMarissa = Number(document.querySelector('#number-marissa').value);
    if (isNaN(inputMarissa) || inputMarissa < 1 || inputMarissa > 5) {
        alert('Please enter a number between 1 and 5');
        return; // Detiene la ejecución del código si el valor es inválido
    }

    // Oculta el input de Marissa
    document.querySelector('#number-marissa').style.display = 'none';

    document.querySelector('.marissa-div').style.display = 'none';
    document.querySelector('.miguel-div').style.display = 'block';
});

let formPosition;

document.querySelector('.button-play').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Obtiene el valor del input de Miguel
    let inputMiguel = Number(document.querySelector('#number-miguel').value);
    if (isNaN(inputMiguel) || inputMiguel < 1 || inputMiguel > 5) {
        alert('Please enter a number between 1 and 5');
        return; // Detiene la ejecución del código si el valor es inválido
    }
    
    formPosition = document.querySelector('.miguel-div').getBoundingClientRect(); // Obtiene la posición del formulario
    document.querySelector('.miguel-div').style.display = 'none'; // Oculta el formulario

    // Asigna los valores de los inputs a los span
    document.querySelector('#code-marissa').textContent = document.querySelector('#number-marissa').value;
    document.querySelector('#code-miguel').textContent = inputMiguel;

    for (let i = 0; i < 100; i++) { // Crea 100 corazones
        setTimeout(function() {
            createHeart(formPosition);
        }, i * 10); // Crea un nuevo corazón cada 10 milisegundos
    }

    setTimeout(function() {
        let printMessageDiv = document.querySelector('.print-message');
        printMessageDiv.style.opacity = '0'; // Inicialmente invisible
        printMessageDiv.style.transition = 'opacity 1s ease-in-out'; // Agrega transición
        printMessageDiv.style.display = 'flex'; // Muestra el formulario después de 1 segundo
        printMessageDiv.style.position = 'fixed'; // Cambia a fixed para cubrir todo el viewport
        printMessageDiv.style.left = '0px';
        printMessageDiv.style.top = '0px';
        printMessageDiv.style.width = '100vw'; // Cubre todo el ancho del viewport
        printMessageDiv.style.height = '100vh'; // Cubre toda la altura del viewport
        printMessageDiv.style.justifyContent = 'center'; // Centra el contenido horizontalmente
        printMessageDiv.style.alignItems = 'center'; // Centra el contenido verticalmente
    
        // Después de un pequeño retraso, cambia la opacidad a 1 para iniciar la transición
        setTimeout(function() {
            printMessageDiv.style.opacity = '1';
    
            // Comienza a imprimir el contenido de print-code elemento por elemento
            let printCodeDiv = document.querySelector('#print-code');
            let textLabel = document.querySelector('.text-label');
            let buttonPrint = document.querySelector('.button-print');
    
            // Asegúrate de que text-label y button-print estén visibles
            textLabel.style.display = 'none'; // Inicialmente oculto
            buttonPrint.style.display = 'none'; // Inicialmente oculto
            buttonPrint.style.opacity = '0'; // Inicialmente transparente
            buttonPrint.style.transition = 'opacity 1s ease-in-out'; // Agrega transición
    
            // Obtiene el contenido original de print-code y lo guarda
            let originalContent = Array.from(printCodeDiv.children); // Usa children en lugar de innerHTML
            printCodeDiv.innerHTML = ''; // Limpia el contenido de print-code
    
            // Imprime el contenido original elemento por elemento
            let i = 0;
            let intervalId = setInterval(function() {
                printCodeDiv.appendChild(originalContent[i].cloneNode(true)); // Usa appendChild en lugar de innerHTML
                i++;
    
                // Cuando se ha impreso todo el contenido, imprime text-label letra por letra
                if (i >= originalContent.length) {
                    clearInterval(intervalId);
    
                    let originalTextLabel = textLabel.innerText;
                    textLabel.innerText = '';
                    textLabel.style.display = 'block';
    
                    let j = 0;
                    let intervalId2 = setInterval(function() {
                        textLabel.innerText += originalTextLabel[j] === ' ' ? '\xa0' : originalTextLabel[j];
                        j++;
    
                        // Cuando se ha impreso todo el contenido de text-label, muestra button-print con una transición
                        if (j >= originalTextLabel.length) {
                            clearInterval(intervalId2);
                            buttonPrint.style.display = 'block';
                            setTimeout(function() {
                                buttonPrint.style.opacity = '1';
                            }, 100);
                        }
                    }, 150);
                }
            }, 300); // Ajusta el tiempo de espera entre cada elemento
        }, 100);
    }, 1000);
});