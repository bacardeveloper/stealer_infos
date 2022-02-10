const exp = require("express");
const exporter_fonctions = require('./fonctions_export');
const app = exp();

// varibales
let port_un = 8080;
const PORT = process.env.PORT || port_un;

// HEADERS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(exp.json());

app.use(
  exp.urlencoded({
    extended: true,
  })
);

app.post("/recevoir", (req, res) => {
  // à la reception enregistrer la data dans un fichier
  let convertir_data = JSON.stringify(req.body);
  exporter_fonctions.ecrire_text(convertir_data);
  return res.status(200);
});

app.listen(PORT, () => {
  console.log(`server en cours sur : http://localhost:${PORT}`);
});
