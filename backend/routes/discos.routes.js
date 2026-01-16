module.exports = app => {
  const discos = require("../controllers/discos.controller.js");
  const router = require("express").Router();
  const upload = require('../multer/upload');

  // crea el disco, aqui tengo en cuenta upload para usarlo para la portada
  router.post("/", upload.single('file'), discos.create);

  // obtiene todos los campos de disco
  router.get("/", discos.findAll);

  // busca por el campo estilo
  router.get("/estilo/:estilo", discos.findByEstilo);

  // este busca pero por id
  router.get("/:id", discos.findOne);

 // actualiza el disco, tengo que tener en cuenta tb el upload para la portada
  router.put("/:id", upload.single('file'), discos.update);

 // elimina un disco por el id
  router.delete("/:id", discos.delete);

  app.use('/api/discos', router);
};

// aqui se define las rutas HTTP relacionadas con discos
// conecta cada accion con su controlador 