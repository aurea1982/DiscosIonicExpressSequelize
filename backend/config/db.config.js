module.exports = { //este objeto puede ser exportado y utilizado por otros archivos
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Dinosaurea1506",
  DB: "db_discos",
  dialect: "mysql",
  pool: { // controlador del pool de conexiones
    max: 5, //max conexiones abiertas
    min: 0,
    acquire: 30000, // tiempo max que sequelize esperara para obtener conexion antes de error
    idle:10000
  }
};