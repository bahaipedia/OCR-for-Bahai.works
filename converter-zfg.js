// cd H:\Projects\Tools\node-ocr 
//
// node converter-zfg.js 01 8

const ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[3],
    outputPath: __dirname + '/../../Bahai.works/German/Zeit-fur-Geist/Zeit_fur_Geist' + process.argv[2] + '.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\German\\Zeit-fur-Geist\\Zeit_fur_Geist_Nr_' + process.argv[2] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+308) + '|file=Zeit_fur_Geist_Nr_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});