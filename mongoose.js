const mongoose = require('mongoose');

// Step 1: Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/school")
.then(() => {
    console.log('Connected to MongoDB');

    // Step 2: Define Schema
    const studentSchema = new mongoose.Schema({
        name: String,
        age: Number,
        grade: String
    });

    // Step 3: Create Model
    const Student = mongoose.model('Student', studentSchema);

    // Step 4: CREATE a student
    const newStudent = new Student({ name: 'Alice', age: 22, grade: 'B' });

    newStudent.save()
    .then((created) => {
        console.log('Student Created:', created);

        // Step 5: READ all students
        return Student.find();
    })
    .then((students) => {
        console.log('All Students:', students);

        // Step 6: UPDATE a student
        return Student.findOneAndUpdate(
            { name: 'Alice' },
            { grade: 'A+' },
            { new: true } // tells MongoDB to return updated document instead of old one
        );
    })
    .then((updated) => {
        console.log('Student Updated:', updated);

        // Step 7: DELETE the student
        return Student.findOneAndDelete({ name: 'Alice' });
    })
    .then((deleted) => {
        console.log('Student Deleted:', deleted);
        return mongoose.disconnect(); // Close connection
    })
    .then(() => {
        console.log('Disconnected from MongoDB');
    })
    .catch((err) => {
        console.error('Error:', err);
    });

})
.catch((err) => {
    console.error('Connection Error:', err);
});