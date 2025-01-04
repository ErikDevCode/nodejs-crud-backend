const express = require("express");
const cors = require('cors');
const routerApi = require("./routes");

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json()); //  necesario para poder traer en el post un json en la respuesta.
const whitelist = ['http://localhost:8080/','https://myapp.pe', 'http://localhost:3000/'];
const options = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else{
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Hola mi server en express");
});

app.get("/nueva-ruta", (req, res) => {
  res.json("Hola, soy una nueva ruta");
});

app.listen(port, () => {
  console.log("Mi port" + port);
});


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);