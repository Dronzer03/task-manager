const expres = require('express');
const router = new expres.Router();
const User = require('../models/user.js');
const auth = require('../middleware/auth');

//Create a user
router.post('/users',async (req, res)=>{
    const user = new User(req.body);

    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    }
    catch(e){
        res.status(400).send(e);
    }
})

//Fetch user profile
router.get('/users/me',auth, async (req, res)=>{
    res.send(req.user);
})

//Update user by id
router.patch('/users/me',auth, async (req, res)=>{
    try{
        const attributes = Object.keys(req.body);
        //const user = await User.findById(req.params.id);
        const user = req.user;
        attributes.forEach((attribute) => user[attribute] = req.body[attribute])
        res.send(user);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//Login
router.post('/users/login', async (req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.userName, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token});
    }
    catch(e){
        res.status(400).send()
    }
})

//Logout
router.post('/users/logout', auth, async (req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token!==req.token
        })
        await req.user.save();
        res.send({});
    }
    catch(e){
        res.status(500).send();
    }
})

//Logout all session
router.post('/users/logoutAll', auth, async (req, res)=>{
    try{
        req.user.tokens = [];
        await req.user.save();
        res.send();
    }
    catch(e){
        res.status(500).send();
    }
})

module.exports = router;