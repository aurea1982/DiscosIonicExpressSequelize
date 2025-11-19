const multer = require('multer'); // para manejar los formularios con imagenes
const path = require('path'); // manejo las rutass del SO

const storage = multer.diskStorage({ //archivos que se almacenan 
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images')); // donde voy a guardarlos
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase(); //mira cual es la extension de la imagen
    if (!ext) { // tiene que ser una de estas tres gif, png o jpg
      if (file.mimetype === 'image/gif') ext = '.gif';
      if (file.mimetype === 'image/png') ext = '.png';
      if (file.mimetype === 'image/jpeg') ext = '.jpg';
    }
    const filename = 'image-' + Date.now() + ext; // crea un nombre unico, le da un nombre
    cb(null, filename); // y lo devuelve para guardarlo donde lo indique
  }
});

const upload = multer({ storage: storage });

module.exports = upload; // permite usarlos en las rutas


// aqui utilizo el multer que me permiten manejar las imagenes en el servidor
// configura el multer, dice donde se guardan las imagenes, como se van a nombrar las imagenes
// y exporta upload para poder usarlo en las rutas