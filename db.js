const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DATABASE || 'todo_database',
  host: process.env.POSTGRES_HOST || 'localhost',
});

module.exports = pool;