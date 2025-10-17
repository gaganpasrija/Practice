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
 
    const selectQuery = 'SELECT * FROM student'; 
 
    connection.query(selectQuery, (err, results) => { 
        if (err) { 
            console.error('Error fetching records:', err.message); 
        } else { 
            console.log('Student Records:'); 
            results.forEach(row => { 
                console.log(`Roll No: ${row.rollno}, Name: ${row.name}, Marks: ${row.marks}`); 
            }); 
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