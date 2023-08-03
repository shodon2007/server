const mysql2 = require('mysql2');

const conn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'shodon',
    password: 'shodon2007',
});

conn.connect(err => {
    if (err) {
        throw new Error('Ошибка БД', err);
    }
    console.log('БД успешно подключен');
});


module.exports = conn;