const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// librerias de Sequelize y con sequelize activa la conexion
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
    // crea la conexion
  },
  logging: false // desactiva que aparezcan lo SQl por consola
});

const db = {}; // guarda todo lo relacionado de la BD

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.discos = require("./discos.model.js")(sequelize, Sequelize);
// se carga discos pasandole la conexion sequelize y la clase Sequelize

module.exports = db;

// importa la configuracion de la BD
// crea la conexion Sequelize
// carga los modelos
// exporta un objeto db