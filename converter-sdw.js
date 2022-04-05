// cd H:\Projects\Tools\node-ocr 
//
// node converter-sdw.js Jg_19_Nr_06-08 36

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[3],
    outputPath: __dirname + '/../../Bahai.works/German/Sonne_der_Wahrheit/Sonne_der_Wahrheit' + process.argv[2] + '.txt',
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\German\\Sonne_der_Wahrheit\\Sonne_der_Wahrheit_' + process.argv[2] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+94) + '|file=Sonne_der_Wahrheit_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});