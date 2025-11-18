const express = require('express');
const app = express();
const port = 3000;

app.get('/product', (req, res) => {
  res.send('Getting product info');
});

app.post('/product', (req, res) => {
  res.send('Adding new product');
});

app.put('/product/:id', (req, res) => {
  res.send('Updating product with ID ' + req.params.id);
});

app.delete('/product/:id', (req, res) => {
  res.send('Deleting product with ID ' + req.params.id);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});