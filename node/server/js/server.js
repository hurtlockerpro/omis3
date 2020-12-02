const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
    //console.log(books);
  
    res.send(books); // browser
});



app.get('/book/:isbn', (req, res) => {
    
    console.log('exact book: ');  
    console.log(req.params.isbn);
    
    books.forEach(element => {
        if (element.isbn == req.params.isbn)
        {
            return res.send(element);
        }
    });
  
    res.status(404).send("Book not found"); // browser
});


app.delete('/book/:isbn', (req, res) => {
    
    console.log('exact book: ');  
    console.log(req.params.isbn);
    
    books.forEach((element, index) => {
        if (element.isbn == req.params.isbn)
        {
            books.splice(index, 1);
            //return res.send(element);
        }
    });
  
    res.status(200).send("Book deleted successfully"); // browser
});

app.post('/book/edit/ok', (req, res) => {
    
    console.log('new data: ');  
    console.log(req.body);
    /*
    books.forEach(element => {
        if (element.isbn == req.params.isbn)
        {
            return res.send(element);
        }
    });
  
    res.status(404).send("Book not found"); // browser
    */
});

app.listen(port, () => console.log('Books app is working OK!'));