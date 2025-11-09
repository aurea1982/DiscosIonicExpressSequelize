module.exports = (sequelize, Sequelize) => {
  const Discos = sequelize.define("discos", {
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    }
  });

  return Discos;
};