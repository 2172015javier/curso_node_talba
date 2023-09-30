const fs = require("fs");
const colors =require('colors')


const crearArchivo = (base, listar = false, hasta=10) => {
  return new Promise((resolve, reject) => {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${i * base}\n`;
    }
    if (listar) {
      console.log(`================================`.green);
      console.log(`         tabla del ${colors.blue(base)}       `.red);
      console.log(`================================`.green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    resolve(`Tabla${base}.txt creada`);
  });
};

module.exports = {
  crearArchivo,
};
