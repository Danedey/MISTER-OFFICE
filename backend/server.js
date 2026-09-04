// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config(); // carga las variables de entorno desde el archivo .env

// middleware globales
app.use(express.json()); //
app.use(cors()); // habilita CORS para todas las rutas

//hacer ping a la base de datos
const db = require('./src/config/database');
(async () => {
    try {
        const connection = await db.getConnection();
        console.log('✅ Conexión a la base de datos establecida:', process.env.DB_NAME);
        connection.release(); // devuelve la conexión al pool
    } catch (err) {
        console.error('❌ Error conectando a la base de datos:', err);
    }
})();


// importar rutas
const userRoutes = require('./src/routes/user.routes');
const authRoutes = require('./src/routes/auth.routes');


// usar las rutas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


// si no estas en modo testeo
if (process.env.NODE_ENV !== 'test'){
    // iniciar el servidorSV
    app.listen(process.env.PORT, () => {
        console.log('Server is running on port 3000');
    });


}


module.exports = app;