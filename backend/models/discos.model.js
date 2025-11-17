module.exports = (sequelize, Sequelize) => { // recibe la conexion y las librerias
  const Discos = sequelize.define( // crea modelo discos
    "discos", 
    // se definen los campos de la bd
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      portada: {
        type: Sequelize.STRING
      },
      estilo: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: "Heavy Clásico"
      }
    },
    {
      //le dice a Sequelize que la tabla de la bd se llama discos en este caso
      tableName: "discos", 
      // desactiva las columnas automaticas
      timestamps: false     
    }
  );

  // devuelve el modelo parque que lo use index.js y el resto
  return Discos;
};
