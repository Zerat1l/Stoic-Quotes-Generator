
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
    
    getQuotes();
    addAnimation();
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

setTimeout(show, 500)





