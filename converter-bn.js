// cd H:\Projects\Tools\node-ocr
//
// node converter-bn.js 272 12

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[3],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/Bahai_News/List_of_issues/' + process.argv[2] + '/Bn.txt',
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Bahai_News\\List_of_issues\\' + process.argv[2] + '\\Baha\'i_News_' + process.argv[2] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=Baha\'i_News_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});