const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, name: 'jokes1', desc: 'this is jokes 1' },
    { id: 2, name: 'jokes2', desc: 'this is jokes 2' },
    { id: 3, name: 'jokes3', desc: 'this is jokes 3' },
    { id: 4, name: 'jokes4', desc: 'this is jokes 4' },
  ];
  res.send(jokes);
});

// GET method route
app.get('/hello', (req, res) => {
  res.send("Hii what's up");
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.listen(port, () => {
  console.log(`Yoo I’m listening on port ${port}`);
});