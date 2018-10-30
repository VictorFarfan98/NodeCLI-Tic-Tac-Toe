const fs = require('fs');


module.exports = {
    
    showBoard: function(){
        var values;
        fs.readFile('data.json', function (err, data) {
            if (err) throw err;
            
            if (data) {
                //console.log("Read JSON file: " + data);
                data = data.toString().trim(); 
                
                //or data = JSON.parse(JSON.stringify(data.trim()));
                storage = JSON.parse(data);
                //console.log(storage['positions']);
                console.log();
                console.log(" " + storage['positions'].tl + " | " + storage['positions'].tc + " | " + storage['positions'].tr + " ");
                console.log("-----------")
                console.log(" " + storage['positions'].cl + " | " + storage['positions'].cc + " | " + storage['positions'].cr + " ");
                console.log("-----------")
                console.log(" " + storage['positions'].bl + " | " + storage['positions'].bc + " | " + storage['positions'].br + " ");
        }});      
    },
    
    default: {'tl': ' ', 'tc': ' ', 'tr': ' ', 'cl': ' ', 'cc': ' ', 'cr': ' ', 'bl': ' ', 'bc': ' ', 'br': ' '},

    defaultcount: {'won1': 0, 'won2': 0, 'won3': 0, 'won4': 0, 'won5': 0, 'won6': 0, 'won7': 0, 'won8': 0},

    new: {'positions': {'tl': ' ', 'tc': ' ', 'tr': ' ', 'cl': ' ', 'cc': ' ', 'cr': ' ', 'bl': ' ', 'bc': ' ', 'br': ' '},
            'counters': {'won1': 0, 'won2': 0, 'won3': 0, 'won4': 0, 'won5': 0, 'won6': 0, 'won7': 0, 'won8': 0, 'total': 0},
            'last': " ",
            'won': false
        },

    savetoFile: function(tosave){
        tosave = JSON.stringify(tosave);

        fs.writeFile('data.json', tosave, (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            //console.log('Vamos a comenzar un nuevo juego!');
        });
    },

    hasWon: function(){
        fs.readFile('data.json', function (err, data) {
            if (err) throw err;
            
            if (data) {
                //console.log("Read JSON file: " + data);
                data = data.toString().trim(); 
                
                //or data = JSON.parse(JSON.stringify(data.trim()));
                storage = JSON.parse(data);
                //console.log(storage['positions']);
                for(var x in storage.counters){
                    if(x != "total" && storage.counters[x] == 3){
                        console.log("Felicidades!! X ha ganado");
                        //return true;
                    }
                    if(x != "total" && storage.counters[x] == -3){
                        console.log("Felicidades!! O ha ganado");
                        //return true;
                    }                                        
                }
                if(storage.counters.total == 9){
                    console.log("El juego ha terminado en empate!!");
                }
        }});          
    }
};