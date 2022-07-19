const Admin = require('../models/admin.model');
const { ObjectId } = require('bson');
const { showTask } = require('./task.controller')

const postAdmin = async(req, res, next) => {
    let payload = req.body;

	if(payload.task) {
		let task = await showtask({ name: {$regex: payload.task, $options: 'i'} })
		if(task) {
			payload = {...payload, task: task._id}
		} else {
			delete payload.task
		}
	}

    try {
        let admin = await Admin.create(payload)
        return res.status(200).json({ status: 200, data: admin, message: "Succesfully Create User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const getAdmin = async(req, res, next) => {
    let { name = '', task = '' } = req.query
	let criteria = {}

	if (name.length) {
		criteria = {
			...criteria,
			name: {$regex: name, $options: 'i'}
		}
	}

	if (task.length) {
		task = await showTask({name :{$regex: task, $options: 'i'}})

		if (task) {
			criteria = {...criteria, task: task._id}
		}
	}

	try {
		let admin  = await Admin.find(criteria).populate('task')
		return res.status(200).json({ status: 200, data: admin, message: "Succesfully User Retrieved" })
	} catch(e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

const putAdmin = async (req,res, next) => {
    let payload = req.body
	let id = req.params

	if(payload.task) {
		let task = await showTask({ name: {$regex: payload.task, $options: 'i'} })
		if(task) {
			payload = {...payload, task: task._id}
		} else {
			delete payload.task
		}
	}

    try {
        let admin = await Admin.updateOne({ _id: ObjectId(id) }, { $set: payload })
        return res.status(200).json({ status: 200, data: admin, message: "Succesfully Update User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports = {
    postAdmin,
    getAdmin,
    putAdmin
}