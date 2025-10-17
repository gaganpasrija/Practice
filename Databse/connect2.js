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
     
    const createTableQuery = ` 
        CREATE TABLE IF NOT EXISTS student ( 
            rollno INT PRIMARY KEY, 
            name VARCHAR(100), 
            marks INT 
        ) 
    `; 
 
    connection.query(createTableQuery, (err, results) => { 
        if (err) { 
            console.error('Error creating table:', err.message); 
        } else { 
            console.log('Table "student" created or already exists.'); 
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