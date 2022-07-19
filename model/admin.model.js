const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Admin = sequelize.define('admin', {
    firstName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    lastName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
}, {});


module.exports = Admin;
