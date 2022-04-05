// cd H:\Projects\Tools\node-ocr
//
// node converter-bw.js BW_Volume5 23

var ot = require('ocr-bulk');
ot.writeFile({
    start: 22,
    end: process.argv[3],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/Bahai_World/Volume5/BW.txt',
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Bahai_World\\Volume5\\' + process.argv[2] + '_Page_' + ot.pad(i, 3)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-1) + '|file=' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});