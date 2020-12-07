const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
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
            res.send(element);
            return;
        }
    });
  
    //res.send("Book not found"); // browser
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

app.post('/book/edit', (req, res) => {
    
    console.log('new data: ');  
    console.log(req.body);

    let isSent = false;
    books.forEach(element => {
        if (element.isbn == req.body.isbn) // params -> GET, body -> POST
        {
            element.title = req.body.title;
            element.author = req.body.author;
            element.description = req.body.description;
            element.publish_date = req.body.publish_date;
            element.pages = req.body.pages;

            isSent = true;

            // TODO
            return res.status(200).send("Book was succeffully updated!");
        }
    });
  
    if (isSent == false) res.status(404).send("Book not found"); // browser
});



app.post('/book/add', (req, res) => {
    
    console.log('new data (added new): ');  
    console.log(req.body);

    
    let book = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        publish_date: req.body.publish_date,
        pages: req.body.pages
    };
    books.push(book);

    //
    return res.status(200).send("Book was succeffully added!");
});

app.listen(port, () => console.log('Books app is working OK!'));