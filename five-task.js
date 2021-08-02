const fs = require('fs');

const file = 'text4-1.txt';
const initalText = fs.readFileSync(file).toString().split('\r\n');

fs.watchFile(file, () => {
  let nowText = fs.readFileSync(file).toString().split('\r\n');

  console.log('Файл изменился');
  initalText.forEach((item, index) => {
    let sample = 'При сравнении двух текстов в строке';
    if (item === nowText[index]) {
      console.log(`${sample} ${index} отличий не обнаружено.`);
    } else {
      console.log(`${sample} ${index} есть отличия.`);
    }
  });
});



