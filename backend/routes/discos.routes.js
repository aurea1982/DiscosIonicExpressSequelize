module.exports = app => {
  const discos = require("../controllers/discos.controller.js");
  const router = require("express").Router();


  router.post("/", discos.create);


  router.get("/", discos.findAll);


  router.get("/:id", discos.findOne);

 
  router.put("/:id", discos.update);


  router.delete("/:id", discos.delete);


  app.use('/api/discos', router);
};
