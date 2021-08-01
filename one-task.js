
const path = require('path');
const fs = require('fs');

const way = path.dirname(path.resolve('01-task.js'));

const nameFiles = fs.readdir(way, (res, err) => {
    if (res) {
        console.log(res.sort());
    } else console.log(err);
});
