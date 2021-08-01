const fs = require('fs');

const textOne = 'text4-1.txt';
const textTwo = 'text4-2.txt';

fs.watchFile(textOne, () => comparisonOfTexts(textOne, textTwo));
fs.watchFile(textTwo, () => comparisonOfTexts(textTwo, textOne));

function comparisonOfTexts(oneText, twoText) {
  let textRight = fs.readFileSync(oneText).toString().split('\r\n');
  let textLeft = fs.readFileSync(twoText).toString().split('\r\n');

  console.log('Файл изменился');
  textRight.forEach((item, index) => {
    let sample = 'При сравнении двух текстов в строке';
    if (item === textLeft[index]) {
      console.log(`${sample} [index] отличий не обнаружено.`)
    } else {
      console.log(`${sample} [index] есть отличия.`)
    }
});
}

