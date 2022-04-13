// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter-miscbahai-no.js VahmanFereydun 175_Years_of_Persecution 349

const ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../Bahai.works/English/3.Miscbahai/' + process.argv[2] + '/' + process.argv[3] + '.txt',
    getImagePath (i) {
        return 'C:\\Users\\daali\\Desktop\\Projects\\Bahai.works\\English\\3.Miscbahai\\' + process.argv[2] + '\\' + process.argv[3] + '_Page_' + ot.pad(i, 3)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-16) + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});