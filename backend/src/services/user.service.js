const connection = require('../config/database');

exports.getallusers = async () => {
    return [rows] = await connection.execute('SELECT * FROM USERS;');
}