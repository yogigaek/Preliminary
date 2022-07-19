const Admin = require('../model/admin.model');

const postAdmin = async(req, res) => {
    const { firstName, lastName, email } = req.body;
    try {
        let admin = await Admin.create({ firstName, lastName,  email})
        return res.status(204).json({ status: 204, data: admin, message: "Succesfully Create User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const getAdmin = async(req, res) => {
    try {
        let admin = await Admin.findAll()
        return res.status(204).json({ status: 204, data: admin, message: "Succesfully Get User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const getAdminById = async (req, res, adminId) => {
    try {
        let admin = await Admin.findByPk(adminId, { include: ["jobs"] })
        return res.status(204).json({ status: 204, data: admin, message: "Succesfully Get User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

const viewAdminJob = async (req, res) => {
    try {
        let admin = await Admin.findAll({
            include: ["jobs"],
        })
        return res.status(200).json({ status: 200, data: admin, message: "Succesfully Get User Job" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = {
    postAdmin,
    getAdmin,
    viewAdminJob,
    getAdminById
}