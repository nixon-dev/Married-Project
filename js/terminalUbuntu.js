document.querySelector('.button-accept').addEventListener('click', function(event) {

    let inputMarissa = document.querySelector('#number-marissa').value;
    let inputMiguel = document.querySelector('#number-miguel').value;

    // Define las frases
    let phrasesMarissa = {
        phrase1: "Tu dedicación a la programación inspira admiración.",
        phrase2: "Tu enseñanza de programación es pura inspiración.",
        phrase3: "Eres la chispa que enciende la pasión por la programación.",
        phrase4: "Tu pasión por la programación ilumina mentes jóvenes.",
        phrase5: "Marissa, tu enseñanza crea el futuro tech que admiramos."
    }

    let phrasesMiguel = {
        phrase1: "Tu ingeniería en telecomunicaciones es asombrosa.",
        phrase2: "Eres el vínculo que conecta el mundo a través de la tecnología.",
        phrase3: "Tu genialidad tech es una inspiración para muchos.",
        phrase4: "Miguel, tu ingeniería transforma el mañana tech.",
        phrase5: "Tu visión en telecomunicaciones es un faro en la era digital."
    }

    // Oculta el div de message-coding
    document.querySelector('.message-coding').style.display = 'none';
    document.querySelector('#congratulations').style.display = 'none';
    document.querySelector('.button-accept').style.display = 'none';

    // Prepara el div de message-both para la transición
    let messageBoth = document.querySelector('.message-both');
    messageBoth.style.opacity = '0';
    messageBoth.style.transition = 'opacity 1s ease-in-out';
    messageBoth.style.display = 'block';

    // Después de un pequeño retraso, cambia la opacidad a 1 para iniciar la transición
    setTimeout(function() {
        messageBoth.style.opacity = '1';
    }, 100);

    // Prepara el div de console-log para la transición
    let consoleLog = document.querySelector('.console-log');
    consoleLog.style.opacity = '0';
    consoleLog.style.transition = 'opacity 1s ease-in-out';
    consoleLog.style.display = 'block';

    // Después de un pequeño retraso, cambia la opacidad a 1 para iniciar la transición
    setTimeout(function() {
        consoleLog.style.opacity = '1';
    }, 500); // Ajusta este valor para controlar el retraso antes de que la consola aparezca

    // Después de un retraso, muestra cada elemento uno por uno
    setTimeout(function() {
        let code = document.querySelector('#code');
        code.textContent = ''; // Limpia el contenido existente
        code.style.display = 'inline';
        let codeText = 'printCode()';
        let indexCode = 0;
        let intervalIdCode = setInterval(() => {
            code.textContent += codeText[indexCode];
            indexCode++;
            if (indexCode === codeText.length) {
                clearInterval(intervalIdCode);
            }
        }, 100); // Ajusta este valor para controlar la velocidad de la animación del texto
    }, 1500);

    setTimeout(function() {
        let nameMarissa = document.querySelector('.name-marissa');
        nameMarissa.textContent = ''; // Limpia el contenido existente
        nameMarissa.style.display = 'block';
        let nameMarissaText = 'Marissa:';
        let indexMarissa = 0;
        let intervalIdMarissa = setInterval(() => {
            nameMarissa.textContent += nameMarissaText[indexMarissa];
            indexMarissa++;
            if (indexMarissa === nameMarissaText.length) {
                clearInterval(intervalIdMarissa);
            }
        }, 100); // Ajusta este valor para controlar la velocidad de la animación del texto
    }, 3000);

    // Imprime la frase correspondiente al número ingresado por Marissa
    setTimeout(function() {
        let consoleMarissa = document.querySelector('#console-marissa');
        consoleMarissa.textContent = ''; // Limpia el contenido existente
        consoleMarissa.style.display = 'block';

        let phraseMarissa = phrasesMarissa['phrase' + inputMarissa];
        let indexMarissa = 0;
        let intervalIdMarissa = setInterval(() => {
            consoleMarissa.textContent += phraseMarissa[indexMarissa];
            indexMarissa++;
            if (indexMarissa === phraseMarissa.length) {
                clearInterval(intervalIdMarissa);
            }
        }, 100); // Ajusta este valor para controlar la velocidad de la animación del texto
    }, 4000);

    // Muestra la línea divisora
    setTimeout(function() {
        let lineDivition = document.querySelector('#line-divition');
        lineDivition.style.opacity = '0';
        lineDivition.style.transition = 'opacity 1s ease-in-out';
        lineDivition.style.display = 'block';
        setTimeout(function() {
            lineDivition.style.opacity = '1';
        }, 100);
    }, 4000 + phrasesMarissa['phrase' + inputMarissa].length * 100);

    // Imprime el nombre de Miguel
    setTimeout(function() {
        let nameMiguel = document.querySelector('.name-miguel');
        nameMiguel.textContent = ''; // Limpia el contenido existente
        nameMiguel.style.display = 'block';
        let nameMiguelText = 'Miguel:';
        let indexMiguel = 0;
        let intervalIdMiguel = setInterval(() => {
            nameMiguel.textContent += nameMiguelText[indexMiguel];
            indexMiguel++;
            if (indexMiguel === nameMiguelText.length) {
                clearInterval(intervalIdMiguel);
            }
        }, 100); // Ajusta este valor para controlar la velocidad de la animación del texto
    }, 5000 + phrasesMarissa['phrase' + inputMarissa].length * 100);

    // Imprime la frase correspondiente al número ingresado por Miguel
    setTimeout(function() {
        let consoleMiguel = document.querySelector('#console-miguel');
        consoleMiguel.textContent = ''; // Limpia el contenido existente
        consoleMiguel.style.display = 'block';

        let phraseMiguel = phrasesMiguel['phrase' + inputMiguel];
        let indexMiguel = 0;
        let intervalIdMiguel = setInterval(() => {
            consoleMiguel.textContent += phraseMiguel[indexMiguel];
            indexMiguel++;
            if (indexMiguel === phraseMiguel.length) {
                clearInterval(intervalIdMiguel);

                // Muestra el botón de aceptar después de que el mensaje de Miguel se haya mostrado completamente
                setTimeout(() => {
                    document.querySelector('.button-terminal-accept').style.display = 'block';
                }, 1000); // Muestra el botón de aceptar después de 1 segundo
            }
        }, 100); // Ajusta este valor para controlar la velocidad de la animación del texto
    }, 6000 + phrasesMarissa['phrase' + inputMarissa].length * 100);

});