const expres = require('express');
const router = new expres.Router();
const Task = require('../models/task.js');
const auth = require('../middleware/auth');

//Create a new task
router.post('/tasks',auth, async (req, res)=>{
    const task = new Task(req.body);

    try{
        await task.save()
        res.status(201).send(task);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//Update a task
router.patch('/tasks/:id',auth, async (req, res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators : true})

        if(!task){
            return res.status(400).send();
        }
        res.send(task);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//Fetch all tasks
router.get('/tasks',async (req, res)=>{
    try{
        const tasks = await Task.find({});
        res.send(tasks);
    }
    catch(e){
        res.status(500).send(e);
    }
})

//Fetch a single task
router.get('/tasks/:id',auth, async (req,res)=>{
    try{
        const task = await Task.findById( req.params.id);
        if(!task)
            return res.status(400).send();
        res.send(task);
    }
    catch(e){
        res.status(500).send(e);
    }
})

//Delete a task by ID
router.delete('/tasks/:id', async (req, res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(400).send();
        }
        res.send(task);
    }
    catch(e){
        return res.status(400).send();
    }
})

module.exports = router;