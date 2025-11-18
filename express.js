// 1. Import express
const express = require('express');

// 2. Create an express app
const app = express();

// 3. Define a port
const port = 8080;

// 4. Define a route
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// 5. Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});