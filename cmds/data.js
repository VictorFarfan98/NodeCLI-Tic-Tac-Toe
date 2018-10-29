const fs = require('fs');


module.exports = {
    
    showBoard: function(){
        var values;
        fs.readFile('data.json', function (err, data) {
            if (data) {
                //console.log("Read JSON file: " + data);
                data = data.toString().trim(); 
                
                //or data = JSON.parse(JSON.stringify(data.trim()));
                storage = JSON.parse(data);
                //console.log(storage.tl);
                console.log();
                console.log(" " + storage.tl + " | " + storage.tc + " | " + storage.tr + " ");
                console.log("-----------")
                console.log(" " + storage.cl + " | " + storage.cc + " | " + storage.cr + " ");
                console.log("-----------")
                console.log(" " + storage.bl + " | " + storage.bc + " | " + storage.br + " ");
        }});      
    },
    
    default: {'tl': ' ', 'tc': ' ', 'tr': ' ', 'cl': ' ', 'cc': ' ', 'cr': ' ', 'bl': ' ', 'bc': ' ', 'br': ' '},

    savetoFile: function(tosave){
        tosave = JSON.stringify(tosave);

        fs.writeFile('data.json', tosave, (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            //console.log('Vamos a comenzar un nuevo juego!');
        });
    }
};