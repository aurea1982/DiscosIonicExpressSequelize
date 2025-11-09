module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Dinosaurea1506",
  DB: "db_discos",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle:10000
  }
};