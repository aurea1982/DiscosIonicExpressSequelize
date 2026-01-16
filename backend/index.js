const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();


app.use('/images', express.static(path.join(__dirname, 'uploads')));


app.use(express.static(path.join(__dirname, 'public')));


const corsOptions = {
  origin: "http://localhost:8100"
};
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./models");

db.sequelize.sync({ force: false })
  .then(() => {
    
  })
  .catch(err => {
    console.error("Error al sincronizar DB:", err);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to discos application" });
});


require("./routes/discos.routes")(app);


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// este es el archivo que se ejecuta por parte del backend para empezar mi BD
// por lo que aqui se inicializa Express, configura CORS, permite usar JSON y los formularios
// conecta el Sequilize y la BD
// importa las rutas de discos y arranca HTTP en 8080