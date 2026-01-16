module.exports = (sequelize, Sequelize) => {
  const Discos = sequelize.define(
    "discos",
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
      estilo: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: "Heavy Clásico"
      },
      filename: {
        type: Sequelize.STRING
      }
    },
    {
      tableName: "discos", // le dice a sequelize que  tabla debe usar de la BD
      timestamps: false // no deja que sequelize agrege columnas automaticas
    }
  );

  return Discos;
};
 // permite definir la estructura de la tabla y como Sequelize lo mapea para la aplicacion