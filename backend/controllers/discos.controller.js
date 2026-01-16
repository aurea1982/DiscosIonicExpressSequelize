const db = require("../models");
const Discos = db.discos;
const Op = db.Sequelize.Op;

// crea un nuevo campo en discos
// primero mira si brand no esta vacio, luego crea un objeto nuevo con cada uno de los campos 
// luego lo mete en la BD, da un error en caso de si pasa un error
exports.create = (req, res) => {
  if (!req.body.brand) {
    return res.status(400).send({
      message: "El nombre del disco (brand) no puede estar vacío."
    });
  }

  const nuevoDisco = {
    brand: req.body.brand,
    model: req.body.model,
    filename: req.file ? req.file.filename : "",
    estilo: req.body.estilo || "Heavy Clásico"
  };

  Discos.create(nuevoDisco)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error creando el disco."
      });
    });
};

// obtiene todos los discos que tengo  en mi BD
// llama Discos.findAll() que permite obtener todos los registros de la tabla Discos
exports.findAll = (req, res) => {
  Discos.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar los discos."
      });
    });
};

// permite buscar un id dentro de la tabla discos
// busca dentro de Discos.findByPk el id introducido para la busqueda
exports.findOne = (req, res) => {
  const id = req.params.id;

  Discos.findByPk(id)
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({ message: "Disco no encontrado." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error obteniendo disco con id=" + id
      });
    });
};

// actualiza el disco teniendo en cuenta su id
// lo que mira es si la informacion es la misma que ya tiene o hay algun error
// y si hay que hay algo de modificar lo hace y lo indica
exports.update = (req, res) => {
  const id = req.params.id;

 
  const filenameFinal = req.file
    ? req.file.filename
    : req.body.filenameOriginal; 

  const dataActualizada = {
    brand: req.body.brand,
    model: req.body.model,
    estilo: req.body.estilo,
    filename: filenameFinal
  };

  Discos.update(dataActualizada, { where: { id: id } })
    .then(([num]) => {
      if (num === 1) { // si el resultado es 1 es que lo ha actualizado correctamente
        res.send({ message: "Disco actualizado correctamente." });
      } else {
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

// permite borrar un id indicado de la tabla discos
exports.delete = (req, res) => {
  const id = req.params.id;

  Discos.destroy({ where: { id: id } })
    .then(num => {
      if (num === 1) { // si el resultado es 1 es que lo ha borrado
        res.send({ message: "Disco borrado correctamente!" });
      } else {
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

// permite buscar por el campo estilo
// se introduce el estilo y si no existe me da error y si es correcto me da la informacion
// de todo aquello que lleve dicho estilo
exports.findByEstilo = (req, res) => {
  const estilo = req.params.estilo;

  if (!estilo) {
    return res.status(400).send({
      message: "Falta el parámetro 'estilo'."
    });
  }

  Discos.findAll({
    where: {
      estilo: { [Op.like]: `%${estilo}%` }
    }
  })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar discos por estilo."
      });
    });
};

// exporta las funciones que he creado como controladores para Discos, en este caso
// permit crear, leer, actualizar, borrar y buscar por el campo estilo
