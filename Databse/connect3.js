const mysql = require('mysql2'); 
 
const connection = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: 'Arya@123', 
    database: 'student' 
}); 
 
connection.connect((err) => { 
    if (err) { 
        console.error('Connection error:', err.message); 
        return; 
    } 
 
    console.log('Connected to MySQL!'); 
 
    const insertQuery = ` 
        INSERT INTO student (rollno, name, marks) VALUES 
        (1, 'Amit', 85), 
        (2, 'Savitri', 90), 
        (3, 'Ashok', 78) 
    `; 
 
    connection.query(insertQuery, (err, results) => { 
        if (err) { 
            console.error('Error inserting records:', err.message); 
        } else { 
            console.log(`Inserted ${results.affectedRows} records successfully.`); 
        } 
 
        connection.end((err) => { 
        if (err) { 
            console.error('Error closing connection:', err.message); 
        } else { 
            console.log('Connection closed'); 
        } 
    }); 
    }); 
});