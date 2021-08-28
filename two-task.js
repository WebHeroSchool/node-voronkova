const fs = require('fs');

fs.readFile('text.txt', (err, res) => {
  if (res) {
    const text = res.toString();

    let arrText = text.split(' ').join('.').split('.').join(':')
    .split(':').join(',').split(',').join('\r\n').split('\r\n');
    arrText = arrText.filter(item => item != '');

    console.log(`В этом файле ${arrText.length} слов`);
    } else console.log(err);
});
