const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = 3000;

app.use(express.json()); // necesario para poder traer en el post un json en la respuesta.

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
