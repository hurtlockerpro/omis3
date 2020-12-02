
const loadBooks = () => {

    $.ajax({
        url: 'http://localhost:3000/books',
        success: function(data){
            console.log(data);

            let books = '';
            for (let index = 0; index < data.length; index++) 
            {
                books += `<div class="card" style="width: 18rem;">
                    <img src="${data[index].bookCover}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${data[index].title}</h5>
                    <p class="card-text">${data[index].isbn}</p>
                    <p class="card-text">${data[index].description}</p>
                    <p class="card-text">${data[index].author}</p>
                    <a href="#" class="btn btn-warning edit" data-isbn="${data[index].isbn}">edit</a>
                    <a href="#" class="btn btn-danger" onclick="deleteBook(${data[index].isbn})">delete</a>
                </div>
                </div>`;
            }
            document.getElementById('bookslist').innerHTML = books;
        }, 
        error: function(err, status, message){
            //
            if (status == 404){
                console.log('nmot found');
            }
        }
    });

};


const deleteBook = (isbn) => {

    $.ajax({
        url: 'http://localhost:3000/book/' + isbn,
        type: 'DELETE',
        success: function(data){
            console.log(data);
        }
    });
}

loadBooks();

// MODAL WINDOW WITH FORM

$(document).on('click', '.edit', function(event){

    let isbn = this.dataset.isbn;

    $('#myModalBook').modal('show');

    $('#myModalBook').on('shown.bs.modal', function () {

        console.log('modal is shown');
        // get form 
        $.ajax({
            url: 'form.html',
            success: function(data){
                //console.log(data);
                let window = document.querySelector('#myModalBook .modal-body').innerHTML = data;
            }
        });

        $.ajax({
            // http://localhost:3000/book/7575757575
            url: 'http://localhost:3000/book/' + isbn,
            success: function(data){
                //console.log(data);

                document.getElementById('isbn').value = data.isbn;
                document.getElementById('title').value = data.title;
                document.getElementById('author').value = data.author;
                document.getElementById('description').value = data.description;
                document.getElementById('publish_date').value = data.publish_date;
                document.getElementById('pages').value = data.pages;
 
            }
        });
    

    })

});


$(document).on('submit', '#btnSubmitForm', function(event){

        event.preventDefault();

        $.ajax({
            url: 'http://localhost:3000/book/edit/ok', // + isbn,
            type: 'json',
            method: 'post',
            data: $('newBook').serialize(),
            success: function(data){
                console.log(data);

            }
        });

});


