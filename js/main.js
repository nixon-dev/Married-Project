
document.querySelector('.button-start').addEventListener('click', function() {
    document.querySelector('.first-section-div').style.display = 'none';
    document.querySelector('.start-process-div').style.display = 'flex';
    let counter = 3;
    const intervalId = setInterval(function() {
        document.querySelector('#counter').textContent = counter;
        counter--;
        if (counter < 0) {
            clearInterval(intervalId);
            document.querySelector('.start-process-div').style.display = 'none';
            document.querySelector('.canvas-container').style.display = 'flex'; 
            document.querySelector('.marissa-div').style.display = 'block';
        }
    }, 1000);
});