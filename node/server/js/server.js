const express = require('express');

const app = express();
const port = 3000;

let books = [
    {
        isbn: "123456789",
        title: "title 1",
        author: "vladimir 1",
        description: "description 1",
        publish_date: "2019.01.01",
        pages: 150,
        bookCover: ""
    },
    {
        isbn: "223456789",
        title: "title 2",
        author: "vladimir 2",
        description: "description 2",
        publish_date: "2020.01.01",
        pages: 250,
        bookCover: ""
    },
    {
        isbn: "323456789",
        title: "title 3",
        author: "vladimir 3",
        description: "description 3",
        publish_date: "2021.01.01",
        pages: 350,
        bookCover: ""
    }
];



app.get('/books', (req, res) => {
    
    console.log('books ...');
    console.log(books);
  
    res.send(books); // browser
});
  

app.listen(port, () => console.log('Books app is working OK!'));