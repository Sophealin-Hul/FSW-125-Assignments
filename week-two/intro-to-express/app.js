const express = require('express');
const app = express();
const PORT = 3000;

let users = [
    { name: 'Patrick', location: 'Bushwick'},
    { name: 'Ben', location: 'Crown Heights'},
    { name: 'Anna', location: 'Manhattan'},
    { name: 'Casey', location: 'Phoenix'},
    { name: 'Fiji', location: 'Phoenix'},
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});