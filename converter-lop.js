// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter-lop.js 47 8

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[3],
    outputPath: __dirname + '/../../Bahai.works/English/Light_of_the_Pacific/Light_of_the_Pacific_Issue_' + process.argv[2] + '.txt',
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Light_of_the_Pacific\\Light_of_the_Pacific_Issue_' + process.argv[2] + '_Page_' + ot.pad(i, 1)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=Light_of_the_Pacific_Issue_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});