module.exports = app => { //exporta una funcion que recibe como parametro la aplicacion express
  const discos = require("../controllers/discos.controller.js"); //importa el archivo que contiene las funciones para manejar la BD
  const router = require("express").Router(); //crea un mini-servidor en express para definir rutas especificas
  // es como si las rutas relacionadas con discos las defino en ese router

 
  // crea un disco (POST)
  router.post("/", discos.create);


  // obtiene todos los discos (GET)
  router.get("/", discos.findAll);

  // busca por estilo (GET)
  router.get("/estilo/:estilo", discos.findByEstilo);

 // busca un disco por su id (GET)
  router.get("/:id", discos.findOne);

  // actualiza un disco segun su id (PUT)
  router.put("/:id", discos.update);

  // borra un disco segun su id (DELETE)
  router.delete("/:id", discos.delete);

  // define las rutas en router
  app.use('/api/discos', router);
};
