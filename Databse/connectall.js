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
}); 
 
async function runCRUD() { 
    const query = (sql, params = []) => 
        new Promise((resolve, reject) => { 
            connection.query(sql, params, (err, results) => { 
                if (err) reject(err); 
                else resolve(results); 
            }); 
        }); 
 
    async function displayTable() { 
        const rows = await new Promise((resolve, reject) => 
            connection.query('SELECT * FROM employee', (err, results) => { 
                if (err) reject(err); 
                else resolve(results); 
            }) 
        ); 
 
        if (rows.length === 0) { 
            console.log("Table is empty."); 
        } else { 
            console.log("Current Employee Records:"); 
            rows.forEach(r => { 
                console.log(`eno: ${r.eno}, ename: ${r.ename}, salary: ${r.salary}`); 
            }); 
        } 
    } 
 
    try { 
        // 1. Create employee table 
        await query(` 
            CREATE TABLE IF NOT EXISTS employee ( 
                eno INT PRIMARY KEY, 
                ename VARCHAR(100), 
                salary FLOAT 
            ); 
        `); 
        console.log("Table 'employee' created or already exists."); 
        await displayTable(); 
 
        // 2. Insert employees 
        await query(` 
            INSERT INTO employee (eno, ename, salary) VALUES 
            (1, 'Parveen', 50000), 
            (2, 'Ajay', 60000), 
            (3, 'Ashok', 55000); 
        `); 
        console.log("Inserted 3 employee records."); 
        await displayTable(); 
 
        // 3. Update salary for eno = 2 
        await query(`UPDATE employee SET salary = ? WHERE eno = ?`, [65000.20, 2]); 
        console.log("Updated salary for employee eno=2."); 
        await displayTable(); 
 
        // 4. Delete employee with eno = 3 
        await query(`DELETE FROM employee WHERE eno = ?`, [3]); 
        console.log("Deleted employee with eno=3."); 
        await displayTable(); 
 
    } catch (err) { 
        console.error("Error:", err.message); 
    } finally { 
        connection.end((err) => { 
        if (err) { 
            console.error('Error closing connection:', err.message); 
        } else { 
            console.log('Connection closed'); 
        } 
    }); 
    } 
} 
runCRUD(); 