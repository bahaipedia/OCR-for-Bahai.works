// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter1.js 11

var ot = require('ocr-bulk');
ot.writeFile({
    start: 401,
    end: process.argv[2],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/1.Incoming/inprogress/Messages_to_the_Antipodes.txt',
    getImagePath: function (i) {
        return 'C:\\Users\\daali\\Desktop\\Projects\\Bahai.works\\English\\1.Incoming\\inprogress\\Messages_to_the_Antipodes_Page_' + ot.pad(i, 3)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-15) + '|file=Messages_to_the_Antipodes.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});