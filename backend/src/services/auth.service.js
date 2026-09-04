const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config/database');

exports.sigup = async ( email, password, nombre ) => {

    const [rows] = await connection.execute('SELECT id FROM USERS WHERE email = ?', [email]);
    if (rows.lenght > 0){
        const error = new Error('El email ya esta registrado');
        error.statusCode = 400;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await connection.execute(
        'INSERT INTO USERS (email, password_hash, nombre, rol) VALUES ( ?, ?, ?, ?);',
        [email, hashedPassword, nombre, 'usuario']
    );
}


exports.login = async (email, password) => {

    const [rows] = await connection.execute('SELECT * FROM USERS WHERE email = ?',[email]);
    if (rows.length === 0) {
        const error = new Error('Cuenta no registrada');
        error.statusCode = 400;
        throw error;
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
        const error = new Error('La contraseña es incorrecta');
        error.statusCode = 400;
        throw error;
    }

    const token = jwt.sign(
        { id: user.id, rol: user.rol },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );

    return { token, user };
}

