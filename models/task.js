const mongoose = require('mongoose')

const Task = mongoose.model('Task-Manager', {
    taskName : {
        type : String,
        required : true
    },
    taskDescription : {
        type : String,
        required : true
    },
    taskCategory : {
        type : String,
        default : 'Common'
    },
    taskStatus : {
        type : String,
        default : 'Not Started'
    },
    taskValues : [{
        propName : {
            type : String
        },
        propValue : {
            type : String
        }
    }]
});

module.exports = Task