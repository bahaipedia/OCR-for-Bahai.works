// cd H:\Projects\Tools\node-ocr 
//
// node converter-cbn.js 103 12

import ot from 'ocr-bulk';
ot.writeFile({
    start: 1,
    end: process.argv[3],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/1.Incoming/CBN/Cbn' + process.argv[2] + '.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\1.Incoming\\CBN\\Canadian_Bahai_News_' + process.argv[2] + '_Page_' + ot.pad(i, 1)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=Canadian_Bahai_News_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});