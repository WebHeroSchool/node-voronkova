const fs = require('fs');

const textOne = fs.readFileSync('text4-1.txt').toString().split(/\r\n/);
const textTwo = fs.readFileSync('text4-2.txt').toString().split(/\r\n/);

textOne.forEach((item, index) => {
    let sample = 'При сравнении двух текстов в строке';
    if (item === textTwo[index]) {
        console.log(`${sample} ${index} отличий не обнаружено.`)
    } else {
        console.log(`${sample} ${index} есть отличия.`)
    }
});


