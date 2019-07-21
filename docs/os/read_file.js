const fs = require('fs-extra');

(async () => {
    // The readFile function reads the contents of a file in a buffer.
    let contents = await fs.readFile('read_file.js');
    // Buffer can be converted into string for further processing.
    let contents_str = contents.toString();
    console.log(contents_str);
})();
