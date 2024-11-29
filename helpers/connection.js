const Sequelize = require('sequelize');

const sequelizeCreateDB = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`, {
  dialect: process.env.DB_DIALECT,
  define: { timestamps: false }
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: process.env.DB_DIALECT,
  dialectOptions: {},
  define: {
    timestamps: false
  }
});

sequelizeCreateDB.authenticate()
  .then(async () => {
    await sequelizeCreateDB.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);

    sequelize.authenticate().then(() => console.log("Connected"));
}).catch(e => console.error('Error:', e));

module.exports = sequelize;