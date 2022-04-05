// cd H:\Projects\Tools\node-ocr 
//
// node converter-wo.js 2 14 3_4 52
// node converter-wo.js series, volume, issue, number of pages

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[5],
    outputPath: __dirname + '/../../Bahai.works/English/World_Order/Series' + process.argv[2] + '/Volume' + process.argv[3] + '/World_Order2_Vol' + process.argv[3] + '_Issue' + process.argv[4] + '_text2.txt',
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\English\\World_Order\\Series' + process.argv[2] + '\\Volume' + process.argv[3] + '\\World_Order2_Vol' + process.argv[3] + '_Issue' + process.argv[4] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-2) + '|file=World_Order2_Vol' + process.argv[3] + '_Issue' + process.argv[4] + '.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});