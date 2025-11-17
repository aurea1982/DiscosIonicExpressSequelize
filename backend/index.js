const express = require("express"); // importa libreria express
const cors=require("cors"); // devuelve el permiso CORS desde la API
const app = express(); //empieza a usar express usando la constante app

// se define que el origen esta autorizado a acceder a tu API
// permite peticiones desde la direccion indicada
var corsOptions={

  origin: "http://localhost:8100"
};

// activa CORS en express, aplica la politica CORS empleando las opciones de express
// permite esta direccion y bloquea otras
app.use(cors(corsOptions));

app.use(express.json());  // le dice a express que cuando llegue una peticion tipo JSON la convierta en objeto JS
app.use(express.urlencoded({ extended: true })); //permite al servidor entender datos enviados en HTML

const db = require("./models"); // importa archivo models.index.js que contiene la conexion y librerias

// sync crea las tablas de la bd si no existen
// force: false => controla si Sequelize debe borrar de las tablas antes de crearlas
// console.log => termina de sincronizar la bd sin errores, permite saber si la conexion funciona, sino aparece un error
db.sequelize.sync({ force: false }).then(() => {
  console.log("DB OK");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to discos application" });
}); //crea un GET con este mensaje en localhost:8080, permite saber si el servidor funciona


// importa el archivo con las rutas relacionadas con discos
// con app pasa la aplicacion de express
require("./routes/discos.routes")(app);

const PORT = process.env.PORT || 8080; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); //inicia el servidor y muestra en consola el mensaje

// ya se puede hacer peticiones a la API
