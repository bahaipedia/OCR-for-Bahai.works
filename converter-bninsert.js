// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter-insert.js 4

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[2],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/Bahai_News/Inserts/inserts-text.txt',
    getImagePath: function (i) {
        return 'C:\\Users\\daali\\Desktop\\Projects\\Bahai.works\\English\\Bahai_News\\Inserts\\conduct_Page_' + ot.pad(i, 1)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=Conduct_of_the_Local_Spiritual_Assembly_94_Insert.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});