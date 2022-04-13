// cd H:\Projects\Tools\node-ocr 
//
// node converter-abold.js 1985 April 32
// node converter-abold.js year, month, number of pages

import ot from 'ocr-bulk';
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../Bahai.works/English/American_Bahai/' + process.argv[2] + '/' + process.argv[3] + '/' + process.argv[3] + '_text.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\American_Bahai\\' + process.argv[2] + '\\' + process.argv[3] + '\\' + ot.pad(i, 1)  + '.jpg';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=The_American_Bahá’í_' + process.argv[3] + '_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});