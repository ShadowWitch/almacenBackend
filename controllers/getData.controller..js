
const jwt = require('jsonwebtoken')

const getData = (req, res) =>{
    console.log('esta >> ', req.user)

    res.json({
        ok: true,
        message: 'hola de getData'
    })
}

const sendData = (req, res) =>{
    const {user, pass} = req.body

    if(user !== 'juan' && pass !== 'juan123'){
        return res.status(401).json({
            ok: false,
            message: 'Forbiden'
        })
    }

    // Is valid
    const token = jwt.sign({
        user
    }, 'secret', {expiresIn: '1h'})

    res.json({
        ok: true,
        message: 'Insertado en sendData',
        token
    })
}

module.exports = {
    getData,
    sendData
}