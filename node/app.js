
// 1 - plugin/module import 
const http = require('http');

// 2 - logic
let server = http.createServer(function (request, response){

    let greeting = "Hello World!";
    console.log(greeting);

    response.end(greeting);
});


server.listen(5000);

// 3 export