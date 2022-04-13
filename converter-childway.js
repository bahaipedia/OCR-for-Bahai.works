// cd H:\Projects\Tools\node-ocr 
//
// node converter-childway.js 46 6

const ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[3],
    outputPath: __dirname + '/../../Bahai.works/English/Childs_Way/Childs_Way_Issue_' + process.argv[2] + '_text.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Childs_Way\\Child\'s_Way_Issue_' + process.argv[2] + '_Page_' + ot.pad(i, 1)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=Child\'s_Way_Issue_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});