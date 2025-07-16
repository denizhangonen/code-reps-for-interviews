require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

async function main() {
  const result = await pool.query('SELECT * FROM USERS ');
  console.log('Database time:', result.rows[0]);
}

main();

