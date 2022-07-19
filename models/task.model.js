const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    tasks:{
        type: String,
        required : [true, 'Field task harus ada'],
        mixlength: 3,
        maxlength: 500
    },
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;