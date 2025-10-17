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
 
    const updateQuery = 'UPDATE student SET marks = 95 WHERE rollno = 2'; 
 
    connection.query(updateQuery, (err, results) => { 
        if (err) { 
            console.error('Error updating record:', err.message); 
        } else { 
            console.log(`Updated ${results.affectedRows} record(s) successfully.`); 
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