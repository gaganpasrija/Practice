const express = require('express');
const app = express();
const port = 8080;

// ===== MIDDLEWARES =====

// Middleware to parse JSON bodies (from POST requests)
app.use(express.json());

// Middleware to parse URL-encoded bodies (like form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files (HTML, CSS, images) from the "public" folder
app.use(express.static('public'));


// ===== ROUTE HANDLER =====

// POST route to receive JSON data from the client
app.post('/api/users', (req, res) => {

    console.log("Received data:", req.body);

    res.status(201).json({
        message: 'User created successfully!',
        user: req.body
    });
});


// ===== START THE EXPRESS SERVER =====
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});