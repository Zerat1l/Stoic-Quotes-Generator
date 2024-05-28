
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const mainElement = document.querySelector('#main');
const tip = document.querySelector('#tooltip');

window.addEventListener('load', getQuotes);

let quotesArray;

function getQuotes() {
    try {
        fetch("https://stoic-quotes.com/api/quote")
        .then(function(response) { 
            return response.json()
        })
        .then(quotes => {
            quotesArray = quotes;
            return quotesArray;  
        })
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error);
    }
    
}

mainElement.addEventListener('click', show)

function show() {
    quote.textContent = '';
    author.textContent = '';
    
    quote.textContent = quotesArray.text;
    author.textContent = `-${quotesArray.author}-`;
    
    getQuotes();
    addAnimation();
    setInterval(tooltipShow, 3000)
}

function addAnimation() {
    quote.classList.add('animate');
    author.classList.add('animate');
    setTimeout(removeAnimation, 1000);
}

function removeAnimation() {
    quote.classList.remove('animate');
    author.classList.remove('animate');
}

document.addEventListener('keypress', keyPressed)

function keyPressed(e) {
    if(e.keyCode == 32) {
        setTimeout(show, 300);
    }
}

function tooltipShow() {
    tip.style.opacity = 1;
}

setTimeout(show, 500)
const autoplayBtn = document.querySelector('#autoPlay');

autoplayBtn.addEventListener('click', decide);

function decide() {
    console.log(autoplayBtn.textContent);

    if(autoplayBtn.textContent == 'autoplay is OFF') {
        autoPlay();
        autoplayBtn.textContent = 'autoplay is ON'
    } else {
        stopAutoPlay();
        autoplayBtn.textContent = 'autoplay is OFF'
    }
}



function autoPlay() {
    let queteWordLength = quotesArray.text.split(' ').length;
    let interval = Math.round((queteWordLength / 2.5) * 1000);
    
    autoplayBtn.textContent = 'autoplay is ON'
    show();
    setTimeout(autoPlay, interval);
    
    console.log(interval);
}

function stopAutoPlay() {
    autoplayBtn.textContent = 'autoplay is OFF';
    clearTimeout(autoPlay);
}





