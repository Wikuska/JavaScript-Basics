let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    { quote: "In the middle of difficulty lies opportunity.", person: "Albert Einstein" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela" },
    { quote: "It always seems impossible until it’s done.", person: "Nelson Mandela" },
    { quote: "Happiness is not something ready made. It comes from your own actions.", person: "Dalai Lama" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", person: "Sam Levenson" }
  ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})