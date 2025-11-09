const db = require("../models");
const Discos = db.discos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log("BODY QUE LLEGA >>> ", req.body); 

  if (!req.body.brand) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  const discos = {
    brand: req.body.brand,
    model: req.body.model
  };

  Discos.create(discos)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the disco."
      });
    });
};


exports.findAll = (req, res) => {
  Discos.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving discos."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;
  Discos.findByPk(id)
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({ message: "Disco no encontrado." });
    })
    .catch(err => {
      res.status(500).send({ message: "Error obteniendo Disco con id=" + id });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Discos.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Disco actualizado correctamente." });
      } else {
        res.send({ message: `No se pudo actualizar el disco con id=${id}.` });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar disco con id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Discos.destroy({ where: { id: id }})
    .then(num => {
      if (num == 1) {
        res.send({ message: "Disco borrado correctamente!" });
      } else {
        res.send({ message: `No se pudo borrar disco con id=${id}` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error borrando disco con id=" + id });
    });
};

