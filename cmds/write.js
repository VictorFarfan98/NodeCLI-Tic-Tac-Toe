const func = require('./data.js');
const fs = require('fs');
var storage;
module.exports = (args) => {
    var position = args._[1].toLowerCase();
    var signo = args._[2].toUpperCase();
    //console.log(position);
    //console.log(signo);
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
    //console.log('AAAA:' + JSON.stringify(storage.positions.tl))
    switch(position){
        case "tl":                    
            if(storage['positions'].tl === " "){
                //console.log("TL esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.tl = signo;
                        if(signo == "X"){
                            storage.counters.won1++;
                            storage.counters.won4++
                            storage.counters.won7++;
                        }else{
                            storage.counters.won1--;
                            storage.counters.won4--
                            storage.counters.won7--;
                        }
                        storage.counters.total++;
                        storage.last = signo;
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }
                
                //console.log("Vamos a guardar: " + storage)
                
            }else{
                //console.log("TL no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        case "tc":
            if(storage['positions'].tc === " "){
                //console.log("TC esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.tc = signo; 
                        if(signo == "X"){
                            storage.counters.won1++;
                            storage.counters.won5++;                        
                        }else{
                            storage.counters.won1--;
                            storage.counters.won5--;  
                        }
                        storage.counters.total++;  
                        storage.last = signo;                 
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }
                
            }else{
                //console.log("TC no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        case "tr":
            if(storage['positions'].tr === " "){
                //console.log("TR esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.tr = signo;
                        if(signo == "X"){
                            storage.counters.won1++;
                            storage.counters.won6++;
                            storage.counters.won8++;                      
                        }else{
                            storage.counters.won1--;
                            storage.counters.won6--;
                            storage.counters.won8--;  
                        }
                        storage.counters.total++; 
                        storage.last = signo;
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }
                
            }else{
                //console.log("TR no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        case "cl":
            if(storage['positions'].cl === " "){
                //console.log("CL esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.cl = signo;
                        if(signo == "X"){
                            storage.counters.won2++;
                            storage.counters.won4++;                                              
                        }else{
                            storage.counters.won2--;
                            storage.counters.won4--;                    
                        }
                        storage.counters.total++; 
                        storage.last = signo;
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }                
                
            }else{
                //console.log("CL no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        case "cc":
            if(storage['positions'].cc === " "){
                //console.log("CC esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.cc = signo;
                        if(signo == "X"){
                            storage.counters.won2++;
                            storage.counters.won5++;                                              
                            storage.counters.won7++;
                            storage.counters.won8++;
                        }else{
                            storage.counters.won2--;
                            storage.counters.won5--;
                            storage.counters.won7--;
                            storage.counters.won8--;                    
                        }
                        storage.counters.total++;
                        storage.last = signo;
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }                
                
            }else{
                //console.log("CC no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        case "cr":
            if(storage['positions'].cr === " "){
                //console.log("CR esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.cr = signo;
                        if(signo == "X"){
                            storage.counters.won2++;
                            storage.counters.won6++;                                              
                        }else{
                            storage.counters.won2--;
                            storage.counters.won6--;                    
                        }
                        storage.counters.total++; 
                        storage.last = signo;
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }
                
            }else{
                //console.log("CR no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        case "bl":
            if(storage['positions'].bl === " "){
                //console.log("BL esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.bl = signo;
                        if(signo == "X"){
                            storage.counters.won3++;
                            storage.counters.won4++;                                              
                            storage.counters.won8++;
                        }else{
                            storage.counters.won3--;
                            storage.counters.won4--;
                            storage.counters.won8--;                    
                        }
                        storage.counters.total++;
                        storage.last = signo;
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }                
                
            }else{
                //console.log("BL no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        case "bc":
            if(storage['positions'].bc === " "){
                //console.log("BC esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.bc = signo;                    
                        if(signo == "X"){
                            storage.counters.won3++;
                            storage.counters.won5++;                                                                      
                        }else{
                            storage.counters.won3--;
                            storage.counters.won5--;                        
                        }
                        storage.counters.total++;
                        storage.last = signo;
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }                
                
            }else{
                //console.log("BC no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        case "br":
            if(storage['positions'].br === " "){
                //console.log("BR esta libre");
                if(signo == "X" || signo == "O"){
                    if(signo != storage.last){
                        storage.positions.br = signo;
                        if(signo == "X"){
                            storage.counters.won3++;
                            storage.counters.won6++;                                                                      
                            storage.counters.won7++;
                        }else{
                            storage.counters.won3--;
                            storage.counters.won6--;                        
                            storage.counters.won7--;
                        }
                        storage.counters.total++;
                        storage.last = signo;
                        func.savetoFile(storage);
                    }else{
                        console.log("Signo invalido. Acaba de ser el turno de " + storage.last);
                    }
                }else{
                    console.log("Signo invalido. El comando debe ser <X> o <O>");
                }                
                
            }else{
                //console.log("BR no esta libre")
            }
            
            func.showBoard();
            func.hasWon();
            break;

        default:
            console.log("Position command needed");
            break;
    }
}

