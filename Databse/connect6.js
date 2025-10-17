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
 
    const deleteQuery = 'DELETE FROM student WHERE rollno = 3'; 
 
    connection.query(deleteQuery, (err, results) => { 
        if (err) { 
            console.error('Error deleting record:', err.message); 
        } else { 
            console.log(`Deleted ${results.affectedRows} record(s) successfully.`); 
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