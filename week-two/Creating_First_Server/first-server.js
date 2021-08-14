const express = require('express');
const server = express();
const Port = 3000;

let pasta = [
    {title: 'Type of Pasta'},
    {name: 'Bavette', origin: 'Liguria'},
    {name: 'Bigoli', origin: 'Veneto'},
    {name: 'Lasagna', origin: 'Italy'}
]

server.get('/pasta', (req, res) => {
    res.send(pasta);
});
server.listen(Port, () => {
    console.log(`This first server will be on localhost:3000/pasta`)
})