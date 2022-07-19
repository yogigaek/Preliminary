const dbConfig = require("../config/sequelize");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admins = require("./admin.model")(sequelize, Sequelize);
db.jobs = require("./job.model")(sequelize, Sequelize);

db.admins.hasMany(db.jobs, { as: "jobs" });
db.jobs.belongsTo(db.admins, {
  foreignKey: "adminId",
  as: "admin",
});

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});

module.exports = db;