const express = require('express');

const app = express();


app.listen(3000, () =>{
    console.log('abcdefghijk');
});
// change the number in line 8, and in your web input
let number = 2;

app.get('/number/:1', (req, res) =>{
    res.send('<p>The number you have chosen is neither prime nor composite</p>')
})
app.get('/number', (req, res) => {
    res.send('<p>Go to /number/:num to check if :num is prime or composite</p>');
});
let isPrime = true;

if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        app.get(`number/${number}`, (req, res) =>{
            res.send('<p> The number you have chosen is prime.</p>')
        });
    } else {
        app.get(`number/${number}`, (req, res) =>{
            res.send('<p> The number you have chosen is composite.</p>')
        });
    }
}

