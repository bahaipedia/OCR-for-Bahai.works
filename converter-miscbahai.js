﻿// cd H:\Projects\Tools\node-ocr
//
// node converter-miscbahai.js 1.incoming Revelation_of_Bahaullah_Vol_1 373

import ot from 'ocr-bulk';
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../Bahai.works/English/3.Miscbahai/' + process.argv[2] + '/' + process.argv[3] + '.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\3.Miscbahai\\' + process.argv[2] + '\\' + process.argv[3] + '_Page_' + ot.pad(i, 3)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-18) + '|file=' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});
