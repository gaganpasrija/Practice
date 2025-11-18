const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

function validateUserInput(req, res, next) {
    const { username, email, password } = req.body;

    if (!username || typeof username !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing username' });
    }

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    next(); 
}

app.post('/register', validateUserInput, (req, res) => {
    res.status(201).json({
        message: 'User registered successfully',
        user: req.body
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});