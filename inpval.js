const express = require('express');
const app = express();

const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Custom validation middleware
function validateUserInput(req, res, next) {
    const { username, email, password } = req.body;

    // Validate username
    if (!username || typeof username !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing username' });
    }

    // Validate email
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    // Validate password
    if (!password || password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    next(); // All validations passed
}

// POST route using middleware
app.post('/register', validateUserInput, (req, res) => {
    res.status(201).json({
        message: 'User registered successfully',
        user: req.body
    });
});

// Default error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});