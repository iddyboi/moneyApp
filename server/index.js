const express = require('express');
const fetch = require('node-fetch');

const app = express();

const port = 5000 || process.env.PORT;

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => console.log(data));

app.get('/', (req, res) => {
  res.send('hello');
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
