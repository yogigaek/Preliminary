const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    users:{
        type: String,
        required : [true, 'Field user harus ada'],
        mixlength: 3,
        maxlength: 50
    },
    task : {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    },
},{
    timestamps : true
})

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;