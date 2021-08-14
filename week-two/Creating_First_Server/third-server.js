const express = require('express');
const server = express();
const PORT = 3000;

let socialMedia = [
    {title: 'The Most Use Social Media'},
    {name: 'Facebook', monthlyActiveUser: '2.7B'},
    {name: 'Instagram', monthlyActiveUser: '1.2B'},
    {name: 'TikTok', monthlyActiveUser: '700M'}
];
server.get('/sm', (req, res) => {
    res.send(socialMedia);
});
server.listen(PORT, () => {
    console.log('This third server will be on localhost:3000/sm');
});