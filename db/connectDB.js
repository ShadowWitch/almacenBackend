const connectData = {
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'amanda'
}

const connect = mysql.createConnection(connectData);
connect.connect((err) =>{
    if (err) {
        throw err
    }
    console.log('Conexion Exitosa')
})

module.exports = connect;