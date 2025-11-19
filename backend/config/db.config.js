module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Dinosaurea1506",
  DB: "db_discos_photos",
  dialect: "mysql",
  // conexiones que permiten un mejor rendimiento
  pool: {
    max: 5, // max conectadas
    min: 0,
    acquire: 30000, // tiempo que puede estar activa antes de cerrarse
    idle: 10000
  }
};
 
// aqui exportamos la configuracion de la conexión de mi base de datos
// estoy empleando Sequelize (ORM)
