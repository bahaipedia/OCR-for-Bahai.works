// cd H:\Projects\Tools\node-ocr 
//
// node converter-pp.js 22 23

const ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[3],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/Canada/PulsePioneer/PP' + process.argv[2] + '.txt',
    getImagePath (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Canada\\PulsePioneer\\Pulse_of_the_Pioneer_' + process.argv[2] + '_Page_' + ot.pad(i, 2)  + '.png';
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i-1) + '|file=Pulse_of_the_Pioneer_' + process.argv[2] + '.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});