const router = require('express').Router();
const taskController = require('../controller/task.controller');

router.get('/tasks', taskController.getTask);
router.post('/assign', taskController.postTask);
router.delete('/unassign/:id', taskController.deleteTask);

module.exports = router;