const express = require('express');
const app = express();
const port = 3000;

// Route that causes a synchronous error
app.get('/error', (req, res) => {
    throw new Error('Synchronous error occurred!');
});

// Route that causes an asynchronous error
app.get('/async-error', (req, res, next) => {
    setTimeout(() => {
        try {
            const result = nonExistentFunction(); // This will throw a ReferenceError
            res.send(result);
        } catch (err) {
            next(err); // Pass to error handler
        }
    }, 100);
});

// Normal route
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Custom error-handling middleware (must have 4 arguments)
app.use((err, req, res, next) => {
    console.error('Error Message:', err.message);
    console.error('Stack Trace:', err.stack);
    res.status(500).send('Something went wrong on the server!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});