// cd H:\Projects\Tools\node-ocr 
//
// node converter-bahaicanada.js 15 1 40

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../Bahai.works/English/Canada/1993-2019_BC/Volume' + process.argv[2] + '/' + process.argv[3] + '_text.txt',
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Canada\\1993-2019_BC\\Volume' + process.argv[2] + '\\Bahai_Canada_Vol' + process.argv[2] + '_No' + process.argv[3] + '_Page_' + ot.pad(i, 3)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=Bahai_Canada_Vol' + process.argv[2] + '_No' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});