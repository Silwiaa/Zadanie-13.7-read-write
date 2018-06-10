var fs = require('fs'),
    colors = require('colors');

fs.readFile('text.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    
    fs.appendFile('text.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        
        fs.readFile('text.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie!'.blue)
            console.log(data);
        });
    });
});

fs.readdir('../zadanie_13_7', function(err, data) {
    console.log('Folder przed zapisem'.yellow);
    
    fs.writeFile('./text.txt', '\nPlik po zapisie', function(err) {
        console.log('Zapisano nowy plik'.yellow);
    });
});