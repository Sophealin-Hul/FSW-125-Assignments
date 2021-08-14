const express = require('express');
const app = express();
const PORT = 3000;

let plane = [
    {title: 'Planes in WW2'},
    {name: 'Messerschmitt Bf 109', made: 'Germany'},
    {name: 'Mikoyan-Gurevich MiG-1', made: 'USSR'},
    {name: 'Mitsubishi A5M', made: 'Japan'}
]

app.get('/plane', (req, res) => {
    res.send(plane);
});
app.listen(PORT, () => {
    console.log('This second server will be on localhost:3000/plane');
});