const startButton = document.getElementById('inicio');
const startButton1 = document.getElementById('inicio1');
const startButton2 = document.getElementById('inicio2');

window.addEventListener("load", function() {
        startButton.classList.add('init');
        scrollTo(0, 0);
    });


startButton.addEventListener('click', function(){
    startButton.classList.add('init');
    startButton1.classList.remove('init');
    startButton2.classList.remove('init');
});

startButton1.addEventListener('click', function(){
    startButton1.classList.add('init');
    startButton.classList.remove('init');
    startButton2.classList.remove('init');
});

startButton2.addEventListener('click', function(){
    startButton2.classList.add('init');
    startButton.classList.remove('init');
    startButton1.classList.remove('init');
});

