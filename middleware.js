const express = require('express');
const app = express();
const port = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/api/users', (req, res) => {

    console.log("Received data:", req.body);

    res.status(201).json({
        message: 'User created successfully!',
        user: req.body
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});