const mysql = require('promise-mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'electrondb'
})

function getConnection(){
    return connection;
}

module.exports = {
    getConnection
}