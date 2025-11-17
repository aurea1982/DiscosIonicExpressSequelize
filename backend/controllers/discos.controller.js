const db = require("../models");
const Discos = db.discos;
const Op = db.Sequelize.Op;
// importaciones iniciales
// cargo el objeto db desde models
// discos apunta al modelo db.discos
// Op contiene operadores de Sequelize


// define la funcion para crear un disco
exports.create = (req, res) => {

  // si no llega el campo brand devuelve un error
  if (!req.body.brand) {
    return res.status(400).send({
      message: "El nombre del disco (brand) no puede estar vacío."
    });
  }

  // crea un objeto del disco, toma los datos del req.body
  const nuevoDisco = {
    brand: req.body.brand,
    model: req.body.model,
    portada: req.body.portada || null,
    estilo: req.body.estilo || "Heavy Clásico"
  };

  // guarda en BD, sequelize inserta el disco en mysql
  Discos.create(nuevoDisco)
    .then(data => res.send(data))
    // si falla por algun motivo me da mensaje de error al crear el disco
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error creando el disco."
      });
    });
};


// permite obtener todos los discos de mi bd
exports.findAll = (req, res) => {
  Discos.findAll() // devuelve los registros de la tabla (SELECT * FROM discos)
    .then(data => res.send(data))
    // en caso de que algo no funcione nos da un mensaje de error
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar los discos."
      });
    });
};

// obtiene un determinado disco segun su id
exports.findOne = (req, res) => {
  const id = req.params.id; // toma la id de req y lo mete en la constante id

  Discos.findByPk(id) // permite la busqueda por la id
    .then(data => {
      if (data) res.send(data);
      // si no existe da mensaje de error
      else res.status(404).send({ message: "Disco no encontrado." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error obteniendo disco con id=" + id
      });
    });
};

// actualiza un disco por id

exports.update = (req, res) => {
  const id = req.params.id; //coge la id de req y la mete en la constante id

  // y actualiza todos los campos de mi disco
  const dataActualizada = {
    brand: req.body.brand,
    model: req.body.model,
    portada: req.body.portada,
    estilo: req.body.estilo
  };


  Discos.update(dataActualizada, { where: { id: id } }) // esto permite la ejecutar la actualizacion
    .then(([num]) => {
      if (num === 1) { // 1 registro actualizado
        res.send({ message: "Disco actualizado correctamente." });
      } else { // siono 0 no actualizado y da mensaje de error
        res.send({
          message: `No se pudo actualizar el disco con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar disco con id=" + id
      });
    });
};

// permite borrar un disco segun su id
exports.delete = (req, res) => {
  const id = req.params.id;

  Discos.destroy({ where: { id: id } }) // es como poner DELETE FROM discos WHERE id=?
    .then(num => {
      if (num === 1) { // lo mismo si es 1 borra
        res.send({ message: "Disco borrado correctamente!" });
      } else { // siono no se se encontro
        res.send({
          message: `No se pudo borrar el disco con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error borrando disco con id=" + id
      });
    });
};

// como voy a poner cada disco por su estilo para ponerlo en la vista que le toda 
// estoy buscando el estilo, toma el estilo desde la URL
exports.findByEstilo = (req, res) => {
  const estilo = req.params.estilo;

  if (!estilo) {
    return res.status(400).send({
      message: "Falta el parámetro 'estilo'."
    });
  }

 
  // es como si ejecutase SELECT * FROM discos WHERE estilo LIKE '%Heavy%'
  // es decir consulta discos con estilo que tengan la palabra heavy 
  Discos.findAll({
    where: {
      estilo: { [Op.like]: `%${estilo}%` }
    }
  })
    .then(data => {
      if (data.length === 0) {
        res.status(200).send([]); 
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar discos por estilo."
      });
    });
};
