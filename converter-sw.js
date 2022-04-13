// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter-sw.js 19 2 32

const ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../Bahai.works/English/Star_of_the_West/Volume_' + process.argv[2] + '/SW' + process.argv[2] + '_text.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Star_of_the_West\\Volume_' + process.argv[2] + '\\SW_Vol' + process.argv[2] + '_No' + process.argv[3] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+32) + '|file=SW_Vol' + process.argv[2] + '_No' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});