const exp = require("express");
const app = exp();
const fs = require("fs");
const rdm = require("randomstring");
// varibales
let port_un = 8080;
const PORT = process.env.PORT || port_un;

const ecrire_text = (data) => {
  let name_string = rdm.generate(7);
  try {
    fs.writeFileSync(`./${name_string}.txt`, data);
    console.log("data bien enrégistré");
  } catch (err) {
    console.log(err);
  }
};

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
  ecrire_text(convertir_data);
  res.status(200);
});

app.listen(PORT, () => {
  console.log(`server en cours sur : http://localhost:${PORT}`);
});
