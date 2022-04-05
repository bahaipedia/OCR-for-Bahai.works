// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter-no.js 8

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[2],
    outputPath: __dirname + '/../../Bahai.works/English/Australian_Bahai_Report/ABR_19-03.txt',
    getImagePath: function (i) {
        return 'C:\\Users\\daali\\Desktop\\Projects\\Bahai.works\\English\\Australian_Bahai_Report\\ABR_19-03_Page_' + ot.pad(i, 1)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-0) + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});