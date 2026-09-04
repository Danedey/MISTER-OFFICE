// src/config/database.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true, // espera si no hay conexiones libres
    connectionLimit: 10,      // máximo 10 conexiones simultáneas
    queueLimit: 0             // 0 = sin límite en la cola de espera
});


module.exports = pool;