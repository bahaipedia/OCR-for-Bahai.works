// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter-byb.js 8

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[2],
    outputPath: __dirname + '/../../Bahai.works/English/Bahai_Youth_Bulletin/Bahai_Youth_Bulletin_114_(Jun).txt',
    getImagePath: function (i) {
        return 'C:\\Users\\daali\\Desktop\\Projects\\Bahai.works\\English\\Bahai_Youth_Bulletin\\Bahai_Youth_Bulletin_114_(Jun)_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-2) + '|file=Bahai_Youth_Bulletin_114_(Jun).pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});