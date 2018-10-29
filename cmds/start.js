const func = require('./data.js');

//console.log("Vamos a empezar un juego nuevo")
//console.log("Final: " + func.default);
func.savetoFile(func.default);
func.showBoard();