# node-ocr
Code necessary to replicate current OCR practice on bahai.works

Most of these files are specific to a certain periodical. Eg converter-bn.js for Baha'i News or converter-cbn.js for Canadian Baha'i News. 

For books use converter-miscbahai.js

Requirements: 
  1. Tesseract OCR (eg https://github.com/UB-Mannheim/tesseract/wiki for Windows)
  2. node.js (https://nodejs.org/en/)
  3. node-tesseract (this repository)

Instructions:
  1. Create a directory on your computer called node-ocr, place this repository in that directory, so you have eg: C:\node-ocr\converter-miscbahai.js
  2. Open the PDF you want to OCR and save each page as a PNG image (requires Acrobat Pro or similar). In my version of Acrobat: File > Save As Other > Image > PNG
  3. Navigate to the node-ocr directory in console, eg using ConEmu (https://conemu.github.io/): cd C:\node-ocr
  4. Run the script from the console: node converter-miscbahai.js 1.incoming Revelation_of_Bahaullah_Vol_1 373

        1.incoming is the name of a folder on my computer. You will need to modify outputPath and getImagePath in converter-miscbahai.js
        Revelation_of_Bahaullah_Vol_1 is the title of a PDF I want to run OCR on
        373 is the number of pages in the PDF. 
        
        ot.pad(i, 3) may need to be modified. The 3 incicates more than 100 page images. So page numbering is Somefile_Page_001.png
        
        ot.pad(i, 2) would be used if you had Somefile_Page_01.png
        
        In return '{{page|' + (i-18) + '|file=' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
        
        The i-18 means the book numbering (Page 1) began on page 19 of the PDF. Page 19 of the pdf is Page 1 of the text. 19 minus 1 is 18. 

        {{page|...}} refers to the Page template: https://bahai.works/Template:Page


To run OCR in a language other than English you will need to have downloaded the language data (https://github.com/tesseract-ocr/tessdata). For me 
these files are placed in C:\Program Files\Tesseract-OCR\tessdata. And then modify line 25 in this file
https://github.com/bahaipedia/node-ocr/blob/main/node_modules/ocr-bulk/node_modules/node-tesseract/lib/tesseract.js

If you downloaded German (deu.traineddata) then you can modify  'l': 'eng' to read  'l': 'deu'

  
