
$(document).ready(function(){

    
    var query = 'footbal';
    $.ajax({
        url: 'http://newsapi.org/v2/everything?q=' + query + '&from=2020-10-25&sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242',
        success: function(data){
            console.log(data);

            let news = new News(data);
            //console.log("author of 1 news ", news.author);
            //console.log("image of 1 news ", news.image);
            $('#main-news').html(news.renderCard());
        }
    });

    // COL 1 ROW 1 
    var query = 'business'
    $.ajax({
        url: 'http://newsapi.org/v2/everything?q=' + query + '&from=2020-10-25&sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242',
        success: function(data){
            console.log(data);

            let news = new News(data);
            $('#col2').html(news.renderCard());
        }
    });

    /// COL 1 ROW 2 
    var query = 'entertainment'
    $.ajax({
        url: 'http://newsapi.org/v2/everything?q=' + query + '&from=2020-10-25&sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242',
        success: function(data){
            console.log(data);

            let news = new News(data);
            $('#col2').append(news.renderCard());
        }
    });

    // COL 1 ROW 3
    var query = 'health'
    $.ajax({
        url: 'http://newsapi.org/v2/everything?q=' + query + '&from=2020-10-25&sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242',
        success: function(data){
            console.log(data);

            let news = new News(data);
            $('#col2').append(news.renderCard());
        }
    });
    

});

/*
{
"status": "ok",
"totalResults": 4234,
-"articles": [
-{
-"source": {
"id": null,
"name": "Bitcoin Magazine"
},
"author": "Ragnar Lifthrasir",
"title": "It’s Time To Join The Bitcoin Circular Economy",
"description": "The Bitcoin circular economy is Bitcoin: permissionless, untied to identity and P2P. It’s time to start participating.\nThe post It’s Time To Join The Bitcoin Circular Economy appeared first on Bitcoin Magazine.",
"url": "https://bitcoinmagazine.com/articles/its-time-to-join-the-bitcoin-circular-economy",
"urlToImage": "https://bitcoinmagazine.com/wp-content/uploads/2020/09/bitcoin-magazine-Circular-Economy-1200x630-cropped.png",
"publishedAt": "2020-11-25T16:37:29Z",
"content": "Makers of 3D-printed guns operate by the motto, Free men dont ask permission. They dont ask the State for permission to bear arms. They dont rely on gun manufacturers to make a gun that theyd like to… [+7037 chars]"
},

*/

class News{

    constructor(obj){
        this.obj = obj;
    }

    query(queryX){
        this.query = queryX;
    }

    OObj(obj){
        this.obj = obj;
    }

    get first(){
        return this.obj.articles[0];
    }

    get author(){
        return this.first.author;
    }

    get image(){
        return this.first.urlToImage;
    }

    get title(){
        return this.first.title;
    }

    get description(){
        return this.first.description;
    }

    article (index){
        return this.obj.articles[index];
    }

    renderCard(){
        /*
        $.ajax({
            url: 'http://newsapi.org/v2/everything?q=' + this.query + '&from=2020-10-25&sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242',
            success: function(data){
                console.log(data);

                //console.log("author of 1 news ", news.author);
                //console.log("image of 1 news ", news.image);
                //$('#main-news').html(news.renderCard());
                // this.OObj(data);
                this.article(1);
            },
            async: false,
            error:function(err, errStatus, errMessage){
                console.log('');
            }
        });
        */
        return `
        <div class="card bg-dark text-white">
        <img src="${this.image}" class="card-img">
        <div class="card-img-overlay">
          <h5 class="card-title">${this.title.substring(1, 10)}</h5>
          <p class="card-text">${this.description.substring(1, 25)}</p>
        </div>
      </div>`;
    }


}