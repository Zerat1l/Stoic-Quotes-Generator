
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const mainElement = document.querySelector('#main');

window.addEventListener('load', getQuotes);

let quotesArray = [];

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
    
    animate();
    getQuotes();
}

function animate() {
    quote.style.animation = 'fade 2s';
    author.style.animation = 'fade 2s';
}

setTimeout(show, 500)





