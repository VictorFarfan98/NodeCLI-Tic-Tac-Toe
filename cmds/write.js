const func = require('./data.js');
const fs = require('fs');
var storage;
module.exports = (args) => {
    console.log(args._[1]);
    /*
    fs.readFile('data.json', function (err, data) {
        if (data) {
            //console.log("Read JSON file: " + data);
            data = data.toString().trim(); 
            
            //or data = JSON.parse(JSON.stringify(data.trim()));
            storage = JSON.parse(data);
    }}); 
*/
    storage = JSON.parse(fs.readFileSync('data.json', 'utf-8').toString().trim())
    
    switch(args._[1]){
        case "tl":                    
            if(storage.tl === " "){
                console.log("TL esta libre");
                storage.tl = "X";
                //console.log("Vamos a guardar: " + storage)
                func.savetoFile(storage);
            }else{
                console.log("TL no esta libre")
            }
            func.showBoard();
            break;

        case "tc":
            if(storage.tc === " "){
                console.log("TC esta libre");
                storage.tc = "X";
                func.savetoFile(storage);
            }else{
                console.log("TC no esta libre")
            }
            func.showBoard();
            break;

        case "tr":
            if(storage.tc === " "){
                console.log("TR esta libre");
                storage.tr = "X";
                func.savetoFile(storage);
            }else{
                console.log("TR no esta libre")
            }
            func.showBoard();
            break;

        case "cl":
            if(storage.cl === " "){
                console.log("CL esta libre");
                storage.cl = "X";
                func.savetoFile(storage);
            }else{
                console.log("CL no esta libre")
            }
            func.showBoard();
            break;

        case "cc":
            if(storage.cc === " "){
                console.log("CC esta libre");
                storage.cc = "X";
                func.savetoFile(storage);
            }else{
                console.log("CC no esta libre")
            }
            func.showBoard();
            break;

        case "cr":
            if(storage.cr === " "){
                console.log("CR esta libre");
                storage.cr = "X";
                func.savetoFile(storage);
            }else{
                console.log("CR no esta libre")
            }
            func.showBoard();
            break;

        case "bl":
            if(storage.bl === " "){
                console.log("BL esta libre");
                storage.bl = "X";
                func.savetoFile(storage);
            }else{
                console.log("BL no esta libre")
            }
            func.showBoard();
            break;

        case "bc":
            if(storage.bc === " "){
                console.log("BC esta libre");
                storage.bc = "X";
                func.savetoFile(storage);
            }else{
                console.log("BC no esta libre")
            }
            func.showBoard();
            break;

        case "br":
            if(storage.br === " "){
                console.log("BR esta libre");
                storage.br = "X";
                func.savetoFile(storage);
            }else{
                console.log("BR no esta libre")
            }
            func.showBoard();
            break;

        default:
            console.log("Position command needed");
            break;
    }
}

