// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter-onecountry.js 19 1 16

import ot from 'ocr-bulk';
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/One_Country/1Country.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\One_Country\\One_Country_Vol_' + process.argv[2] + '_Issue_' + process.argv[3] + '_Page_' + ot.pad(i, 2) + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=One_Country_Vol_' + process.argv[2] + '_Issue_' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});