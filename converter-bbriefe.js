// cd H:\Projects\Tools\node-ocr 
//
// node converter-bbriefe.js 11 37

import ot from 'ocr-bulk';
ot.writeFile({
    start: 1,
    end: process.argv[3],
    outputPath: __dirname + '/../../Bahai.works/German/Bahai_Briefe/Bahai_Briefe' + process.argv[2] + '.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\German\\Bahai_Briefe\\Baha\'i_Briefe_' + process.argv[2] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+247) + '|file=Baha\'i_Briefe_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});