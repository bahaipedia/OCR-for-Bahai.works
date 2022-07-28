# node-ocr

Code necessary to replicate current OCR practice on bahai.works

Most of these files are specific to a certain periodical. Eg converter-bn.js
for Baha'i News or converter-cbn.js for Canadian Baha'i News.

For books use converter-miscbahai.js

## Prerequisite installation instructions

1. Download/clone this repository to a folder on your computer, eg: C:/node-ocr
2. Download node.js (https://nodejs.org/en/). During installation (windows) you do not need to install Chocolatey.
3. (Windows) Download and install git (https://git-scm.com/download/win). I checked only default options during installation. 
4. In console (I use ConEmu https://conemu.github.io/)    
    1. cd C:\node-ocr
    2. npm i -g pnpm (assuming you didn't already have pnpm)
    3. pnpm i

C:/node-ocr should now have a new folder: node_modules.

5. Download and install Tesseract. (Windows https://github.com/UB-Mannheim/tesseract/wiki). If you plan on ocr'ing other languages you can select those during installation. They can also be added later. You may also need to add a PATH variable, described below.
You are now ready to use this package.




## OCR instructions

1. Open the PDF you want to OCR and save each page as a PNG image (requires Acrobat Pro or similar). In my version of Acrobat: File > Save As Other > Image > PNG

2. Modify the script (eg. converter-miscbahai.js) paths outputPath: __dirname and getImagePath as necessary to match the location where you have saved the page images from step 1. (Note that where you see /../../Bahai.works/ that means going back two directory levels from where node-ocr is installed. If you put the images in a folder called "Images" on your desktop it would be: /../Users/dhaslip/Desktop/ and in the return section it would look something like return 'C:\\Users\\dhaslip\\Desktop\\...')

3. Navigate to the node-ocr directory in console: cd C:\node-ocr

4. Run the script from the console: node converter-miscbahai.js Images Revelation_of_Bahaullah_Vol_1 373

If you get an error ReferenceError: __dirname is not defined in ES module scope then add this to the top of your converter-miscbahai.js script:

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

5. If you get an error tesseract is not recognized as an internal or external command you need to add a PATH variable (windows). Start menu, search "path" and find "Edit the system environment variables" then click "Environment Variables" which is at the bottom of the "Advanced" tab. In the top box find "Path" click "Edit". Click "New" and add (for example) C:\Program Files\Tesseract-OCR. 

Close console and retry.

6. If you get an error about the file not being found, double check the path, filename, and "Start:" variables in the .js script, (eg: start: 1, to start at Somefilename_Page_1.png) and ot.pad(...) variables (described next).

7. The .js script variable ot.pad(i, 3) defines the number of zero's in the filename before the page number. Somefilename_Page_1.png would use ot.pad(i, 1), Somefilename_Page_01.png would use ot.pad(i, 2) and Somefilename_Page_001.png would use ot.pad(i, 3), etc.

## Tesseract in other languages

To run OCR in a language other than English you will need to have downloaded the language data (https://github.com/tesseract-ocr/tessdata). For me
these files are placed in C:\Program Files\Tesseract-OCR\tessdata. And then modify line 25 in this file
https://github.com/bahaipedia/node-ocr/blob/main/node_modules/ocr-bulk/node_modules/node-tesseract/lib/tesseract.js

If you downloaded German (deu.traineddata) then you can modify  'l': 'eng' to read  'l': 'deu'
