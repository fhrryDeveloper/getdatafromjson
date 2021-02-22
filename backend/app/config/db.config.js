const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  port: 3000,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Article = require('../models/articles.model.js')(sequelize, Sequelize);
db.Product = require('../models/products.model.js')(sequelize, Sequelize);
 
module.exports = db;