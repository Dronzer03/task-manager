const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minLength : 6,
        validate(value){
            if(value.indexOf('password')>-1)
                throw new Error('Please select more secure Password')
        }   
    },
    email : {
        type : String,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email!');
            }
        }
    },
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }]
});

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign( { _id : this._id.toString() } , 'newUser')
    this.tokens = this.tokens.concat({token});
    await this.save();
    return token;
}

userSchema.methods.toJSON = function(){
    const user = this.toObject();
    delete user.password;
    delete user.tokens;
    return user;
}

userSchema.statics.findByCredentials = async (userName, password) => {
    const user = await User.findOne({ userName });

    if(!user)
        throw new Error('Unable to login');

    const isMatched = await bcrypt.compare(password, user.password);

    if(!isMatched)
        throw new Error('Unable to login')

    return user;
}

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 8);
    }
    next()
})

const User = mongoose.model('User', userSchema);


module.exports = User;