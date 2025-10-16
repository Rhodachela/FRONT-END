// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        person: "Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        person: "Marilyn Monroe"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        person: "Bernard M. Baruch"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        person: "Dr. Seuss"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        person: "Mahatma Gandhi"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        person: "Mark Twain"
    },
    {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        person: "Oscar Wilde"
    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        person: "Elbert Hubbard"
    },
    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        person: "Mahatma Gandhi"
    },
    {
        quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        person: "Ralph Waldo Emerson"
    }
];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})