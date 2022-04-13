// cd C:\Users\daali\Desktop\Projects\Tools\node-ocr
//
// node converter-bahaicanadaspecial.js 24

import ot from 'ocr-bulk';
ot.writeFile({
    start: 1,
    end: process.argv[2],
	outputPath: __dirname + '/../../Bahai.works/English/Canada/Bahai_Canada/Bahai_Canada_83_Jul-Aug_Issue.txt',
    getImagePath (i) {
        return 'C:\\Users\\daali\\Desktop\\Projects\\Bahai.works\\English\\Canada\\Bahai_Canada\\Bahai_Canada_83_Jul-Aug_Issue_Page_' + ot.pad(i, 2)  + '.png';		
    },
    concatenater (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=Bahai_Canada_83_Jul-Aug_Issue.pdf|page=' + i + '}}' + text;
    },
    done () {
        console.log('Saved!');
    }
});