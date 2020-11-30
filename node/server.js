const express = require('express');

let app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  console.log('Well done !');

  res.send('<b>Hello from express !</b>');
});

/*
app.get('/home', (req, res) => {
  console.log('Well done, home !');

  res.send('home from response');
});
*/
app.listen(3000);
