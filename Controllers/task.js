const Task = require('../models/task.js');

const createTasks = async(req, res)=>{
    const task = new Task(req.body);
    try{
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({
            error:'please request with json'
        });
    };
};

const readTasks = async(req, res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({
            error:error.message
        });
    };
};

const updateTasks = async(req,res)=>{
    const id = req.params.id;
    
    try {
        const task = await Task.findOneAndUpdate(
            {_id:id},
            req.body
        );
        res.status(201).json({status:`${req.params.id} delete successfully`});
    } catch (error) {
        error.json({
            error:error.message
        });
    };
};

const deleteTasks = async(req, res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({status:`${req.params.id} delete successfully`})
    } catch (error) {
        res.json({
            error:error.message
        })
    }
}

module.exports = {createTasks, readTasks, updateTasks, deleteTasks}