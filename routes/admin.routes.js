const router = require('express').Router();
const adminController = require('../controller/admin.controller');

router.post('/register', adminController.postAdmin);
router.get('/admin', adminController.getAdmin);
router.get('/task/common', adminController.viewAdminJob);

module.exports = router