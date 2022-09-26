const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) =>{
    let token;
    if(!req.headers.authorization.startsWith('Bearer')){
        const error = new Error('Not authenticated')
        return res.status(500).json({
            ok: false,
            message:  error.message
        })
    }

    token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, 'secret', (err, decoded) =>{
        if(err) {
            const error = new Error('Not valid token')
            return res.status(500).json({
                ok: false,
                message:  error.message
            })
        }
        req.user = decoded
        next()
    })
    
}

module.exports = {
    verifyToken
}