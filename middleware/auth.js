const jwt = require('jsonwebtoken');
const User = require('../models/user.js');


const auth = async (req, res, next) => {
    try{
        const token = req.header('authToken');
        const decoded = jwt.verify(token, 'newUser');
        const user = await User.findById({_id : decoded._id, 'tokens.token' : token});

        if(!user){
            throw new Error()
        }
        req.token = token;
        req.user = user;
        next()
    }
    catch(e){
        res.status(401).send({ error : 'Authentication failed!'})
    }
}

module.exports = auth;