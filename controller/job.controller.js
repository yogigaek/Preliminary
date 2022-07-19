const Job = require('../model/job.model');

const postJobWthId  = async(req, res) => {
    let { job, adminId } = req.body;
    try {
        let jobs = await Job.create({ job, adminId })
        return res.status(204).json({ status: 204, data: jobs, message: "Succesfully Create Job User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
const postJob = async(req, res) => {
    let payload = req.body;
    try {
        let jobs = await Job.create(payload)
        return res.status(204).json({ status: 204, data: jobs, message: "Succesfully Create Job User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const getJob = async(req, res) => {
    try {
        let job = await Job.findAll()
        return res.status(204).json({ status: 204, data: job, message: "Succesfully Get Job User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const getJobById = async (req, res) => {
    const id = req.params;
    try {
        let job = await Job.findByPk(id, { include: ["admin"] })
        return res.status(204).json({ status: 204, data: job, message: "Succesfully Get Job User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const deleteJob = async (req, res) => {
    const id = req.params;
    try {
        let job = await Job.destroy(id)
        return res.status(204).json({ status: 204, data: job, message: "Succesfully Delete Job User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


module.exports = {
    postJob,
    getJob,
    postJobWthId,
    getJobById,
    deleteJob
}