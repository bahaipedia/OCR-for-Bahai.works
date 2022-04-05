// cd H:\Projects\Tools\node-ocr 
//
// node converter-cbnv.js 5 3 2

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/Canada/1990-1993_CBN/Volume' + process.argv[2] + '/Cbn-en.txt', //change me
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Canada\\1990-1993_CBN\\Volume' + process.argv[2] + '\\Canadian_Bahai_News_Vol' + process.argv[2] + '_No' + process.argv[3] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-0) + '|file=Canadian_Bahai_News_Vol' + process.argv[2] + '_No' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});