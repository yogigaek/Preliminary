const Task = require('../models/task.model');
const { ObjectId } = require('bson');

const postTask = async(req, res, next) => {
    let payload = req.body
    try {
        let task = await Task.create(payload);
        return res.status(200).json({ status: 200, data: task, message: 'Succesfully Create Task User' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const getTask = async(req, res, next) => {
    try {
        let task = await Task.find();
        return res.status(200).json({ status: 200, data: task });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const showTask = async(req, res, next) => {
    try {
        let task = await Task.findOne()
        return task;
    } catch (e) {
        console.log(e.message)
        throw Error('Error Task')
    }
};

const deleteTask = async(req, res) => {
    let id = req.body
    try {
        let task = await Task.deleteOne(id)
        return res.status(204).json({ status: 204, data: task, message: 'Succesfully Delete Task' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports = {
    postTask,
    getTask,
    showTask,
    deleteTask
};