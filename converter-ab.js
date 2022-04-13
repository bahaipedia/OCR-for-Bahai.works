// cd H:\Projects\Tools\node-ocr
//
// node converter-ab.js 22 3 24
// node converter-ab.js volume, issue, number of pages

const ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../Bahai.works/English/American_Bahai/Vol' + process.argv[2] + '/No' + process.argv[3] + '/' + process.argv[3] + '_text.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\American_Bahai\\Vol' + process.argv[2] + '\\No' + process.argv[3] + '\\' + ot.pad(i, 1)  + '.jpg';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=The_American_Bahá’í_Vol' + process.argv[2] + '_No' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});
