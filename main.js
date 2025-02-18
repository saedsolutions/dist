// server.js (Express server)

const express = require('express');
const app = express();
const InventoryItem = require('./inventoryItem'); // import constructor

// Example: PG pool setup
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'your_database',
  password: 'password',
  port: 5432
});

// Route to get inventory
app.get('/inventory', async (req, res) => {
  try {
    // Query your table (make sure columns match id, category, price, image)
    const { rows } = await pool.query('SELECT id, category, price, image FROM inventory');

    // Convert each row into an InventoryItem object
    const inventoryItems = rows.map(row => {
      return new InventoryItem(row.id, row.category, row.price, row.image);
    });

    // Respond with JSON array of these objects
    res.json(inventoryItems);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving inventory');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});