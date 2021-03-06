
const loadBooks = () => {

    $.ajax({
        url: 'http://localhost:3000/books',
        success: function(data){
            console.log(data);

            let books = '';
            for (let index = 0; index < data.length; index++) 
            {
                books += `<div class="card" style="width: 18rem;float:left;margin:10px;">
                    <!--<img src="${data[index].bookCover}" class="card-img-top">-->
                <div class="card-body">
                    <h5 class="card-title">${data[index].title}</h5>
                    <p class="card-text">${data[index].isbn}</p>
                    <p class="card-text">${data[index].description}</p>
                    <p class="card-text">${data[index].author}</p>
                    <a href="#" class="btn btn-warning edit" data-isbn="${data[index].isbn}">edit</a>
                    <a href="#" class="btn btn-danger" onclick="deleteBook(${data[index].isbn})">delete</a>
                    <a href="#" class="btn btn-info addnew">add new</a>
                </div>
                </div>`;
            }
            document.getElementById('bookslist').innerHTML = books;
        }, 
        error: function(err, status, message){
            //
            if (status == 404){
                console.log('not found');
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
    
        $.ajax({
            // http://localhost:3000/book/7575757575
            url: 'http://localhost:3000/book/' + isbn,
            type: 'GET',
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


$(document).on('click', '.addnew', function(event){

    $('#myModalBook').modal('show');

    $('#myModalBook').on('shown.bs.modal', function () {
            // TODO remove readonly from isbn field
            // edit form 
            document.getElementById("newBook").action = 'http://localhost:3000/book/add';
            document.getElementById('isbn').removeAttribute('readonly');
            document.getElementById('btnSubmitForm').title = 'Add new Book';

    });
});

// get form 

$.ajax({
    url: 'form.html',
    dataType: 'html',
    success: function(data){
        //console.log(data);
        document.querySelector('#myModalBook .modal-body').innerHTML = data;
    }
});


var isError = false;

$(document).on('submit', '#newBook', function(event){

    event.preventDefault();

    var form = $(this);
    console.log("serialized data: ", $(this).serialize());

    // regex
    checkInput('title');
    checkInput('author');
    checkInput('description');


    if (isError == false){
        $.ajax({
            url: document.getElementById("newBook").action,
            type: 'POST',
            dataType: 'text',
            data: form.serialize(),
            success: function(data){
                
                console.log("this is from sending form: ", data);

            }
        });
    } else {

        alert('Error !');
    }

});

function checkInput(inputName){

    let input = document.querySelector('#' + inputName); 
    if (input.value == "")
    {
        input.classList.add('inputError');

        isError = true;
    }
}



