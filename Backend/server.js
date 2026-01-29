// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MySQL connection setup - replace with your credentials
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',               // Your MySQL username
//   password: 'Piyush@12345',  // Your MySQL password
//   database: 'abc'             // Your imported database name
// });

// db.connect(err => {
//   if (err) {
//     console.error('MySQL connection error:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// // API endpoint to get properties without images (temporary fix)
// app.get('/api/properties', (req, res) => {
//   const sql = `
//     SELECT id, title, description, price, location
//     FROM properties
//   `;
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error('DB query error:', err);
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
