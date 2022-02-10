const fs = require("fs");
const rdm = require("randomstring");

exports.ecrire_text = (data) => {
  let name_string = rdm.generate(7);
  try {
    fs.writeFileSync(`./${name_string}.txt`, data);
    console.log("data bien enrégistré");
  } catch (err) {
    console.log(err);
  }
};
