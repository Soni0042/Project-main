const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');  // Add CORS
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// Enable CORS for all routes and origins
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

// MySQL connection pool setup - update credentials as needed
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'piyush@12345',
  database: 'abc',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// API endpoint to get buy properties
app.get('/api/properties/buy', async (req, res) => {
  try {
    const sql = `
      SELECT 
        p.id, p.name, p.description, p.price, p.price_type,
        pt.name AS property_type,
        loc.name AS location,
        locl.name AS locality,
        pc.name AS property_construction,
        f.name AS furnished_status,
        GROUP_CONCAT(DISTINCT pf.feature) AS features,
        GROUP_CONCAT(DISTINCT CONCAT(aa.key, ': ', aa.value)) AS additional_amenities,
        GROUP_CONCAT(DISTINCT img.name) AS images
      FROM properties p
      LEFT JOIN property_type pt ON p.property_type_id = pt.id
      LEFT JOIN location loc ON p.location_id = loc.id
      LEFT JOIN locality locl ON p.locality_id = locl.id
      LEFT JOIN property_construction pc ON p.property_construction_id = pc.id
      LEFT JOIN furnished f ON p.furnished_id = f.id
      LEFT JOIN properties_feature pf ON p.id = pf.properties_id
      LEFT JOIN additional_amenities aa ON p.id = aa.properties_id
      LEFT JOIN images img ON p.id = img.properties_id
      WHERE p.property_id = (SELECT id FROM property WHERE name = 'Buy' LIMIT 1)
      GROUP BY p.id
      ORDER BY p.id DESC
      LIMIT 50
    `;

    const [rows] = await pool.query(sql);

    res.json({ success: true, properties: rows });
  } catch (error) {
    console.error('DB query error:', error);
    res.status(500).json({ success: false, message: error.message, error });
  }
});

// API endpoint to get rent properties
app.get('/api/properties/rent', async (req, res) => {
  try {
    const sql = `
      SELECT 
        p.id, p.name, p.description, p.price, p.price_type,
        pt.name AS property_type,
        loc.name AS location,
        locl.name AS locality,
        pc.name AS property_construction,
        f.name AS furnished_status,
        GROUP_CONCAT(DISTINCT pf.feature) AS features,
        GROUP_CONCAT(DISTINCT CONCAT(aa.key, ': ', aa.value)) AS additional_amenities,
        GROUP_CONCAT(DISTINCT img.name) AS images
      FROM properties p
      LEFT JOIN property_type pt ON p.property_type_id = pt.id
      LEFT JOIN location loc ON p.location_id = loc.id
      LEFT JOIN locality locl ON p.locality_id = locl.id
      LEFT JOIN property_construction pc ON p.property_construction_id = pc.id
      LEFT JOIN furnished f ON p.furnished_id = f.id
      LEFT JOIN properties_feature pf ON p.id = pf.properties_id
      LEFT JOIN additional_amenities aa ON p.id = aa.properties_id
      LEFT JOIN images img ON p.id = img.properties_id
      WHERE p.property_id = (SELECT id FROM property WHERE name = 'Rent' LIMIT 1)
      GROUP BY p.id
      ORDER BY p.id DESC
      LIMIT 50
    `;

    const [rows] = await pool.query(sql);

    res.json({ success: true, properties: rows });
  } catch (error) {
    console.error('DB query error:', error);
    res.status(500).json({ success: false, message: error.message, error });
  }
});

// API endpoint to get property details by ID
app.get('/api/properties/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const sql = `
      SELECT 
        p.id, p.name, p.description, p.price, p.price_type,
        pt.name AS property_type,
        loc.name AS location,
        locl.name AS locality,
        pc.name AS property_construction,
        f.name AS furnished_status,
        GROUP_CONCAT(DISTINCT pf.feature) AS features,
        GROUP_CONCAT(DISTINCT CONCAT(aa.key, ': ', aa.value)) AS additional_amenities,
        GROUP_CONCAT(DISTINCT img.name) AS images
      FROM properties p
      LEFT JOIN property_type pt ON p.property_type_id = pt.id
      LEFT JOIN location loc ON p.location_id = loc.id
      LEFT JOIN locality locl ON p.locality_id = locl.id
      LEFT JOIN property_construction pc ON p.property_construction_id = pc.id
      LEFT JOIN furnished f ON p.furnished_id = f.id
      LEFT JOIN properties_feature pf ON p.id = pf.properties_id
      LEFT JOIN additional_amenities aa ON p.id = aa.properties_id
      LEFT JOIN images img ON p.id = img.properties_id
      WHERE p.id = ?
      GROUP BY p.id
    `;

    const [rows] = await pool.query(sql, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }
    res.json({ success: true, property: rows[0] });
  } catch (error) {
    console.error('DB query error:', error);
    res.status(500).json({ success: false, message: error.message, error });
  }
});

// New API endpoint to get properties filtered by BHK count (1, 2, 3, 4)
app.get('/api/properties', async (req, res) => {
  const { bhk } = req.query;
  try {
    let sql = `
      SELECT 
        p.id, p.name, p.description, p.price, p.price_type,
        pt.name AS property_type,
        loc.name AS location,
        locl.name AS locality,
        pc.name AS property_construction,
        f.name AS furnished_status,
        GROUP_CONCAT(DISTINCT pf.feature) AS features,
        GROUP_CONCAT(DISTINCT CONCAT(aa.key, ': ', aa.value)) AS additional_amenities,
        GROUP_CONCAT(DISTINCT img.name) AS images
      FROM properties p
      LEFT JOIN property_type pt ON p.property_type_id = pt.id
      LEFT JOIN location loc ON p.location_id = loc.id
      LEFT JOIN locality locl ON p.locality_id = locl.id
      LEFT JOIN property_construction pc ON p.property_construction_id = pc.id
      LEFT JOIN furnished f ON p.furnished_id = f.id
      LEFT JOIN properties_feature pf ON p.id = pf.properties_id
      LEFT JOIN additional_amenities aa ON p.id = aa.properties_id
      LEFT JOIN images img ON p.id = img.properties_id
      WHERE 1=1
    `;
    const params = [];

    const bhkMapping = {
      "1": "1BHK",
      "2": "2BHK",
      "3": "3BHK",
      "4": "4 Bhk"
    };

    if (bhk && bhkMapping[bhk]) {
      sql += ' AND pt.name = ?';
      params.push(bhkMapping[bhk]);
    }

    sql += ' GROUP BY p.id ORDER BY p.id DESC LIMIT 50';

    const [rows] = await pool.query(sql, params);

    res.json({ success: true, properties: rows });
  } catch (error) {
    console.error('DB query error:', error);
    res.status(500).json({ success: false, message: error.message, error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
