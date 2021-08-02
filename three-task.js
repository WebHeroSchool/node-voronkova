const fs = require('fs');
const path = require('path');

const waysStr = fs.readFileSync('text3.txt').toString();
const waysArr = waysStr.split('\r\n');

waysArr.forEach(way => {
    if (fs.existsSync(way)) {
        console.log(`${way} путь существует`);
    } else console.log(`${way} путь не существует`);
})