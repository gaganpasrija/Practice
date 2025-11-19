const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("WELCOME TO THE API");
});

let students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 }
];

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    res.json(student || { message: "Student not found" });
});

app.post('/students', (req, res) => {
    const newStudent = { id: students.length + 1, ...req.body };
    students.push(newStudent);
    res.json({ message: "Student added successfully", id: newStudent.id });
});

app.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});