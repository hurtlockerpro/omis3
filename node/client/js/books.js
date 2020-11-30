
const loadBooks = () => {
    //const xhttp = new XMLHttpRequest();
    $.ajax({
        url: 'http://localhost:3000/books',
        success: function(data){
            console.log(data);

            let = books = '';
            for (let index = 0; index < data.length; index++) 
            {
                books += `<div class="card" style="width: 18rem;">
                    <img src="${data[index].bookCover}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${data[index].title}</h5>
                    <p class="card-text">${data[index].description}</p>
                    <p class="card-text">${data[index].author}</p>
                    <a href="#" class="btn btn-warning">edit</a>
                    <a href="#" class="btn btn-danger">delete</a>
                </div>
                </div>`;
            }
            document.getElementById('bookslist').innerHTML = books;
        }
    });

};

loadBooks();