const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid'); //for creating random "id:"
const PORT = 3000;

app.use(express.json()); //app level middleware

let books = [
    { title: 'Devil and the White City', author: 'Erik Larson', _id: uuidv4()},
    { title: 'Le Transperceneige', author: 'Jacques Lob', _id: uuidv4()},
    { title: 'American Gods', author: 'Neil Gaiman', _id: uuidv4()},
    { title: 'Active Imagination', author: 'Carl Jung', _id: uuidv4()},
];

app.post('/books', (req, res) => { //adding new data to the database
    const newBook = req.body;
    newBook._id = uuidv4();
    books.push(newBook);
    console.log(books);

    res.send(`Sucessesfully push ${newBook.title} to the database`); //dont forget to choose JSON as script in POSTMAN
});


app.get('/books', (req, res) => {
    res.send(books);
});

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});