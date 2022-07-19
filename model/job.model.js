const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Job = sequelize.define('job', {
    job : {
        type : DataTypes.STRING,
    }
});

// Job.associations = function(models) {
//     Job.belongsToMany(models.Admin, {
//       through: models.JobUser,
//       as: 'admins',
//       foreignKey: 'jobId'
//     });
// };

module.exports = Job
