const fs = require('fs-extra');

(async () => {
    let filename = './fs.rst';
    let exists = await fs.pathExists(filename);
    if (exists){
        console.log(`The file ${filename} exists.`);
    } else {
        console.log(`The file ${filename} does not exist.`);
    }
})();
