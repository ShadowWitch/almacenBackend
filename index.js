
const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const router = require('./routes/getData.routes')
const morgan = require('morgan')
const { verifyToken } = require('./middlewares/checkAuth')

app.set('detalles', require('./package.json'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/verdatos', verifyToken, router)

app.get('/', (req, res) =>{
    const {name, author, version, description} = app.get('detalles')
    res.json({
        name,
        author,
        version,
        description
    })
})


app.listen(3000, ( ) => {
    console.log(`Server running in port ${3000}`)
})

// qwe
