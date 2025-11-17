const dbConfig = require("../config/db.config.js"); //importa la configuracion de la bd del archivo config

const Sequelize = require("sequelize"); // importa libreria Sequelize 

// crea la conexion a la bd (nombre,usuario,contraseña y pool)
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false, 
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


// crea un objeto vacio llamado db que luego contendra todo lo relativo a mi bd
const db = {};

// guarda en el objeto db la libreria de Sequelize y la instancia conectada a la bd
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// asi otros archivos pueden usarlo y acceder a ellos
// importa el modelo discos y lo mete dentro de db
// el modelo recibe la conexion y las librerias
db.discos = require("./discos.model.js")(sequelize, Sequelize);

// exporta el objeto db completo para que el resto de la aplicacion pueda usarlo
module.exports = db;