const router = require('express').Router();
const adminController = require('../controller/admin.controller');

router.get('/users', adminController.getAdmin);
router.post('/register', adminController.postAdmin);
router.put('/users/:id', adminController.putAdmin);

module.exports = router;