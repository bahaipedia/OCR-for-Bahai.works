// cd H:\Projects\Tools\node-ocr
//
// node converter-wu.js 3 4 72

import ot from 'ocr-bulk';
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/World_Unity/Volume' + process.argv[2] + '/No' + process.argv[3] + '/3WUtext.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\World_Unity\\Volume' + process.argv[2] + '\\No' + process.argv[3] + '\\World_Unity_Vol' + process.argv[2] + '_Issue' + process.argv[3] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+214) + '|file=World_Unity_Vol' + process.argv[2] + '_Issue' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});
