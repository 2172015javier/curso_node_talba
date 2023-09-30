const { option } = require("yargs");
const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOptions: true,
    describe: "es la base de la tabla de multiplicar",
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    defaultValue: false,
  })
  .options("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    description: 'numero hasta donde se quiere la tabla'
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    return true;
  })
  .argv;

module.exports = argv;