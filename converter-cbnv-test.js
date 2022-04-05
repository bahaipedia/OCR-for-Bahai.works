// cd H:\Projects\Tools\node-ocr 
//
// node converter-cbnv-test.js 5 3 36

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/Canada/1990-1993_CBN/Volume' + process.argv[2] + '/Cbn-en.pdf', //change me
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Canada\\1990-1993_CBN\\Volume' + process.argv[2] + '\\Canadian_Bahai_News_Vol' + process.argv[2] + '_No' + process.argv[3] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    done: function () {
        console.log('Saved!');
    }
});